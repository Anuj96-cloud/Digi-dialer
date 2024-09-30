import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, apiResultFormat, getAssets, routes } from 'src/app/core/core.index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agent-extension',
  templateUrl: './agent-extension.component.html',
  styleUrl: './agent-extension.component.scss'
})
export class AgentExtensionComponent {

  public routes = routes;
  showModal: boolean = false;
  activeTab: string = 'list';
  lists: any[] = [];
  dncNumbers: any[] = [];
  leads: any[] = [];
  listForm: FormGroup;
  dncForm: FormGroup;
  leadForm: FormGroup;
  uploadForm: FormGroup;
  isEdit: boolean = false;
  editIndex: number | null = null;
  countries: { name: string; code: string }[] = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'United Kingdom', code: 'UK' },
    { name: 'India', code: 'IN' },
    { name: 'Australia', code: 'AU' },
    { name: 'Germany', code: 'DE' },
    { name: 'France', code: 'FR' },
    { name: 'Japan', code: 'JP' },
    // Add more countries as needed
  ];

  constructor(private fb: FormBuilder) {
    this.listForm = this.fb.group({
      id: [null], // Will be set when editing
      name: ['', Validators.required],
      resetTime: [''],
      leadCount: [''],
      callTime: [''],
      lastCallTime: [''],
      campaign: [''],
      status: [''],
    });

    this.dncForm = this.fb.group({
      dncNumber: ['', Validators.required],
      reason: [''],
    });

    this.leadForm = this.fb.group({
      listId: ['', Validators.required],
      campaign: ['', Validators.required],
      title: [''],
      fullName: ['', Validators.required],
     
      state: [''],
      city: [''],
      pinCode: [''],
      phoneNumber: ['', Validators.required],
      altPhoneNumber: [''],
       address: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],  
      email: ['', [Validators.required, Validators.email]],
      dialcode: ['', Validators.required],
    });

    this.uploadForm = this.fb.group({
      listId: ['', Validators.required],
      campaign: ['', Validators.required],
      duplicateCheck: ['', Validators.required],
      csvFile: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadLists();
    this.loadDNCNumbers();
    this.loadLeads();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.resetForms();
  }

  resetForms() {
    this.listForm.reset();
    this.dncForm.reset();
    this.leadForm.reset();
    this.uploadForm.reset();
    this.isEdit = false;
    this.editIndex = null;
  }

  // List Management
  loadLists() {
    this.lists = [
      { id: 1, name: 'Test List 1', resetTime: '10:00 AM', leadCount: 50, callTime: '2 PM', lastCallTime: '1 PM', campaign: 'Campaign A', status: 'Active' },
      // Add more sample lists
    ];
  }

  onAddList() {
    this.resetForms();
    this.isEdit = false;
    this.activeTab = 'list';
  }

  onEdit(list: any) {
    this.listForm.patchValue(list);
    this.isEdit = true;
    this.activeTab = 'list';
  }

  onSubmitList() {
    if (this.listForm.valid) {
      if (this.isEdit && this.editIndex !== null) {
        this.lists[this.editIndex] = this.listForm.value;
      }  
      this.resetForms();
    }
  }

  onDelete(id: number) {
    this.lists = this.lists.filter(list => list.id !== id);
  }

  // DNC Management
  loadDNCNumbers() {
    this.dncNumbers = [
      { dncNumber: '1234567890', reason: 'No Calls' },
      // Add more sample DNC numbers
    ];
  }

  onDeleteDNC(dncNumber: string) {
    this.dncNumbers = this.dncNumbers.filter(dnc => dnc.dncNumber !== dncNumber);
  }

  // Lead Management
  loadLeads() {
    this.leads = [
      { listId: '1', campaign: 'Campaign A', fullName: 'John Doe', phoneNumber: '9876543210' },
      // Add more sample leads
    ];
  }

  // onSubmitLead() {
  //   if (this.leadForm.valid) {
  //     this.leads.push(this.leadForm.value);
  //     this.leadForm.reset();
  //   }
  // }

  // Upload Leads Management
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({
        csvFile: file,
      });
    }
  }

  onSubmitUpload() {
    if (this.uploadForm.valid) {
      const formData = new FormData();
      formData.append('file', this.uploadForm.get('csvFile')?.value);
      formData.append('listId', this.uploadForm.get('listId')?.value);
      formData.append('campaign', this.uploadForm.get('campaign')?.value);
      formData.append('duplicateCheck', this.uploadForm.get('duplicateCheck')?.value);
      
      // Handle file upload logic here
      
      this.uploadForm.reset();
    }
  }
//   onEdit(list: any, index: number) {
//   this.editIndex = index; // Set the index for the edited item
//   this.listForm.patchValue(list); // Populate the form with the selected list data
// }
}
