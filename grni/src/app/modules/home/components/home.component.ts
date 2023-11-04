import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';
import { ModalDismissReasons,  NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LocaldbserverService } from '../services/localdbserver.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  getOUNames: any;
  data = './../../../assets/db.json'
  constructor(public toastService: NotificationService, 
    private localDbService: LocaldbserverService,
    private modalService: NgbModal, config: NgbModalConfig, ) {
      // config.backdrop = 'static';
      // config.keyboard = false;
    }

  ngOnInit(): void { 
    // fetch('./../../../assets/db.json').then(res => res.json()).then(data => { 
    //         this.getOUNames = data; 
    //         console.log("Received!", this.getOUNames);
    // });  

    this.localDbService.getOuNamesList().subscribe((res: any)=> {
      console.log(res); 
      this.getOUNames = res;
    });
    console.log("Received!", this.getOUNames);
  }


	open(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}


  ngOnDestroy(): void {
     
	}

}
