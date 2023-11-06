import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';
import { ModalDismissReasons,  NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LocaldbserverService } from '../services/localdbserver.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  getOUNames: any;
  data = './../../../assets/db.json'

  grniDataMainForm!: FormGroup;
  formControls: any;

  jsonData: any;
  searchText: any;
  selectedCheckboxes: string = "";
  selectAllChecked: boolean = false; // Track the state of the "Select All" checkbox


  constructor(public toastService: NotificationService, private fb: FormBuilder,
    private localDbService: LocaldbserverService,
    private modalService: NgbModal, config: NgbModalConfig, ) {
      // config.backdrop = 'static';
      // config.keyboard = false;
    }

  ngOnInit(): void {  
    this.initializeForm();  
  }

  initializeForm(){
    this.grniDataMainForm =  this.fb.group({
      ouSearch: ['', Validators.required],
      ouNameList: this.fb.array([])
    }) 
    this.formControls = this.grniDataMainForm.controls;
  }


	open(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}

  getOuListFromApi(val: any){
    console.log(val.value); 
    this.localDbService.getOuNamesList().subscribe((res: any)=> {
      // console.log(res); 
      // this.getOUNames = res;
      this.jsonData = res;
      console.log("Received!", this.jsonData);
    });
    
  }
  
 
  toggleSelectAll(event: any) {
    const checkboxes = document.getElementsByName('checkboxName');
    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i] as HTMLInputElement;
      checkbox.checked = event.target.checked;
    }
    this.updateSelectedCheckboxes();
  }

  toggleCheckbox(checkboxId: string) {
    this.updateSelectedCheckboxes();
    // Check if any of the individual checkboxes are unchecked
    const checkboxes = document.getElementsByName('checkboxName');
    this.selectAllChecked = true;
    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i] as HTMLInputElement;
      if (!checkbox.checked) {
        this.selectAllChecked = false;
        break; // No need to continue checking, as we found one unchecked checkbox
      }
    }
  }

  private updateSelectedCheckboxes() {
    const checkboxes = document.getElementsByName('checkboxName');
    const selectedNames = [];
    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i] as HTMLInputElement;
      if (checkbox.checked) {
        const itemId = checkbox.value;
        const item = this.jsonData.find((dataItem: any) => dataItem.id === itemId);
        if (item) {
          selectedNames.push(item.name);
        }
      }
    }
    this.selectedCheckboxes = selectedNames.join(", ");
  }
  
  submitMainForm(){
    console.log(this.grniDataMainForm.value); 
  }

  ngOnDestroy(): void { 
	}

}
