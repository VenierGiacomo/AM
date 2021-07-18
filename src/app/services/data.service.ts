import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private data = [];
 
  constructor() { }
 
  setData(name, data) {
    this.data[name] = data;
  }
 
  getData(name) {
    return this.data[name];
  }
}