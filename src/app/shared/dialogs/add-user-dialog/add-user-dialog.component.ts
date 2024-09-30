import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss',
})
export class AddUserDialogComponent {
  usersForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddUserDialogComponent>
  ) {
    this.userFormInit();
    if (this.data.userData.userId) {
      this.patchFormValue();
    }
  }

  patchFormValue(): void {
    this.usersForm.patchValue({
      userId: this.data.userData.userId,
      userName: this.data.userData.userName,
      groupName: this.data.userData.groupName,
      status: this.data.userData.status,
      email: this.data.userData.email,
      userStatus: this.data.userData.userStatus,
    });
  }

  private userFormInit(): void {
    this.usersForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      groupName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      userStatus: new FormControl('', Validators.required),
    });
  }
  close(){
    this.dialogRef.close();
  }
}
