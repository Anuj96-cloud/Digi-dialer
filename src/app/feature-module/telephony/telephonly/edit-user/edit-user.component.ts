import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  editAssetsForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
    this.editAssetsForm = this.formBuilder.group({
      editAssetName: ['', Validators.required],
      editUserGroup: ['', Validators.required],
      editWarranty: ['', Validators.required],
      editAssetUserEmail: ['', [Validators.required, Validators.email]],
      editAssetStatus: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.editAssetsForm.valid) {
      this.dialogRef.close(this.editAssetsForm.value);
    }
  }
}
