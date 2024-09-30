import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, apiResultFormat, getAssets, getUsers, routes } from 'src/app/core/core.index';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
 import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from 'src/app/shared/dialogs/add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  selected1 = '1';
  public statusValue!: string;
  public usersForm!: FormGroup;
  public allUsers: Array<getUsers> = [];
  public searchDataValue = '';
  dataSource!: MatTableDataSource<getUsers>;
  public routes = routes;

  // Pagination variables
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;

  assetToDelete!: string; // Store the asset to be deleted
  searchText: string = '';
 

  constructor(
    private formBuilder: FormBuilder, 
    private data: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // this.userFormInit();
    this.filterUsers();
    this.getTableData();
  }


 //Search filter 
  filterUsers() {
    if (this.searchText) {
      this.allUsers = this.allUsers.filter(users => 
        users.userName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.allUsers = this.allUsers;
    }
    
  }
  

  // Get table data from the data service
  private getTableData(): void {
    this.allUsers = [];
    this.serialNumberArray = [];

    this.data.getUsers().subscribe((res: apiResultFormat) => {
      this.totalData = res.totalData;
      res.data.map((res: getUsers, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.allUsers.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      console.log(this.allUsers);
      
      this.dataSource = new MatTableDataSource<getUsers>(this.allUsers);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  // Sort data
  public sortData(sort: Sort) {
    const data = this.allUsers.slice();

    if (!sort.active || sort.direction === '') {
      this.allUsers = data;
    } else {
      this.allUsers = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  // Search functionality
  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.allUsers = this.dataSource.filteredData;
  }

  // Pagination controls
  public getMoreData(event: string): void {
    if (event === 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event === 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    this.getTableData();
  }

  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 !== 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }

  // Method to open the edit modal
  openUserEdDialog(userId?: string) {
  if(userId){
    const userToEdit = this.allUsers.find(user => user.userId === userId);
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '500px',
      data: {
       userData: userToEdit,
       title: "Edit User",
       buttonText: "Update"
    }
  });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.updateAsset();
      }
    });
  }
  else{
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '500px',
      data: {
       userData: {},
       title: "Add User",
       buttonText: "Save"
    }
  });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.updateAsset();
      }
    });
  }
  }

  // Method to update the asset in the data source
  updateAsset() {
    if (this.usersForm.valid) {
      const updatedAsset = this.usersForm.value;
      console.log('Updated Asset:', updatedAsset);
      // Implement your logic to send updatedAsset to the server
    }
  }

  // Set the asset to be deleted
  setAssetToDelete(userId: string) {
    this.assetToDelete = userId;
  }

  // Delete the selected asset
  deleteAsset() {
    if (this.assetToDelete) {
      console.log(`Deleting asset with ID: ${this.assetToDelete}`);
      // Implement your delete logic here
      this.assetToDelete = ''; // Optionally reset assetToDelete
    }
  }
}

export interface pageSelection {
  skip: number;
  limit: number;
}
