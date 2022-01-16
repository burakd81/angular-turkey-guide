import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../services/photo.service";
import {Photo} from "../models/photo.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const API_URL = `${environment.BASE_URL}/api/photo`;
@Component({
  selector: 'app-city-photo',
  templateUrl: './city-photo.component.html',
  styleUrls: ['./city-photo.component.css']
})
export class CityPhotoComponent implements OnInit {

  photoList:Array<Photo> = [];
  constructor(private photoService:PhotoService) { }

  filterText="";

  ngOnInit(): void {
    this.photoService.getAllPhoto().subscribe(data=>{
      this.photoList=data;

    });
  }

}
