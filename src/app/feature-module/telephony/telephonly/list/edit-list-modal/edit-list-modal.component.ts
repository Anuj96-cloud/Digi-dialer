import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-list-modal',
  templateUrl: './edit-list-modal.component.html',
})
export class EditListModalComponent {
  @Input() list: any;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>(); // Event emitter to close the modal
  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      resetTime: [''],
      leadCount: [''],
      callTime: [''],
      lastCallTime: [''],
      campaign: [''],
      status: [''],
    });
  }

  ngOnChanges() {
    if (this.list) {
      this.editForm.patchValue(this.list);
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.save.emit(this.editForm.value);
    }
  }

  closeModal() {
    this.close.emit(); // Emit the close event
  }
}
