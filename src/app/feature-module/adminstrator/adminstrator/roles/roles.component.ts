import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, apiResultFormat, getAssets, routes } from 'src/app/core/core.index';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
 import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  selected1 = '1';
  public statusValue!: string;
  public addAssets!: FormGroup;
  public editAssets!: FormGroup;
  public allAssets: Array<getAssets> = [];
  public searchDataValue = '';
  dataSource!: MatTableDataSource<getAssets>;
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

  constructor(
    private formBuilder: FormBuilder, 
    private data: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getTableData();

    // Add Assets Form Validation
    this.addAssets = this.formBuilder.group({
      assetId: ["", [Validators.required]],
      assetName: ["", [Validators.required]],
      userGroup: ["", [Validators.required]],
      warranty: ["", [Validators.required]],
      assetUser: ["", [Validators.required]],
      assetStatus: ["", [Validators.required]],
    });

    // Edit Assets Form Validation
    this.editAssets = this.formBuilder.group({
      editAssetId: ["", [Validators.required]],
      editAssetsName: ["", [Validators.required]],
      edituserGroup: ["", [Validators.required]],
      editWarranty: ["", [Validators.required]],
      editAssetUser: ["", [Validators.required]],
      editAssetStatus: ["", [Validators.required]],
    });
  }

  // Get table data from the data service
  private getTableData(): void {
    this.allAssets = [];
    this.serialNumberArray = [];

    this.data.getAssets().subscribe((res: apiResultFormat) => {
      this.totalData = res.totalData;
      res.data.map((res: getAssets, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.allAssets.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<getAssets>(this.allAssets);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  // Sort data
  public sortData(sort: Sort) {
    const data = this.allAssets.slice();

    if (!sort.active || sort.direction === '') {
      this.allAssets = data;
    } else {
      this.allAssets = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  // Search functionality
  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.allAssets = this.dataSource.filteredData;
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
  // openEditModal(assetId: string) {
  //   const assetToEdit = this.allAssets.find(asset => asset.assetId === assetId);
  //   const dialogRef = this.dialog.open(EditUserComponent, {
  //     width: '500px',
  //     data: assetToEdit
  //   });

  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     if (result) {
  //       this.updateAsset();
  //     }
  //   });
  // }

  // Method to update the asset in the data source
  updateAsset() {
    if (this.editAssets.valid) {
      const updatedAsset = this.editAssets.value;
      console.log('Updated Asset:', updatedAsset);
      // Implement your logic to send updatedAsset to the server
    }
  }

  // Set the asset to be deleted
  setAssetToDelete(assetId: string) {
    this.assetToDelete = assetId;
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

