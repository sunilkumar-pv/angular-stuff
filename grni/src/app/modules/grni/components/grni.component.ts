import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-grni',
  templateUrl: './grni.component.html',
  styleUrls: ['./grni.component.scss']
})
export class GrniComponent implements OnInit{

  jsonData: any;
  selectedItems = [];
  constructor(private dataService: DataService){
    this.dataService.getOuNamesList().subscribe((res: any)=> {
      // console.log(res);
      this.jsonData = res
    })
  } 

  ngOnInit(): void {
    console.log(this.jsonData); 
  }
 
 

}
