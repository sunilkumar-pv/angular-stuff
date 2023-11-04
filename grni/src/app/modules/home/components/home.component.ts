import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';
import { ModalDismissReasons,  NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(public toastService: NotificationService, 
    private modalService: NgbModal, config: NgbModalConfig, ) {
      // config.backdrop = 'static';
      // config.keyboard = false;
    }

  ngOnInit(): void {
 
  }


	open(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}


  ngOnDestroy(): void {
 
	}

}
