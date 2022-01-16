import { Component, OnInit } from '@angular/core';
import {City} from "../../models/city.model";
import {CityService} from "../../services/city.service";


declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityList:Array<City> = [];
  constructor(private cityService:CityService) { }


  ngOnInit(): void {
    this.cityService.getAllCity().subscribe(data=>{
      this.cityList=data;

    });
  }

  watchVideo(){
    $("#myModal").modal('show');
  }
}
