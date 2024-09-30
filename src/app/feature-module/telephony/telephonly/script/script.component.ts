import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, apiResultFormat, getAssets, routes } from 'src/app/core/core.index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrl: './script.component.scss'
})
export class ScriptComponent {
  scripts = [
    { id: 5003, name: 'Surinder Singh', group: 'AGENTS', status: 'Active' }
  ];
  
  selectedScript: any;
  scriptForm!: FormGroup;
  isEdit: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form
    this.scriptForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      group: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onEdit(script: any) {
    this.isEdit = true;
    this.selectedScript = script;
    this.scriptForm.patchValue(script);
  }

  onDelete(id: number) {
    const index = this.scripts.findIndex(script => script.id === id);
    if (index !== -1) {
      this.scripts.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.scriptForm.valid) {
      if (this.isEdit) {
        const index = this.scripts.findIndex(script => script.id === this.scriptForm.value.id);
        if (index !== -1) {
          this.scripts[index] = this.scriptForm.value;
        }
        this.isEdit = false;
      }
      // Reset the form
      this.scriptForm.reset();
    }
  }

}
