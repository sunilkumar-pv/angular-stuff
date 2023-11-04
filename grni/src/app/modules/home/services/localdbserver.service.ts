import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocaldbserverService {
  baseUrl: string = './../../../assets/db.json';

  constructor(private httpClient: HttpClient) { }

  getOuNamesList(){
    return this.httpClient.get(this.baseUrl);
  }

  
}
