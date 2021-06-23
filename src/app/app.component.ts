import { Component} from '@angular/core';
import {GetApiService} from './get-api.service'
// import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-service-example';
  constructor(private api:GetApiService){

  } 
  ngOnInit(){
    this.api.apiCall().subscribe((data)=>{
      console.warn("get api data", data)
      // this.title = data['title'];
    })
  }
}
