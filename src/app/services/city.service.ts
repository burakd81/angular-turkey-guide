import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {RequestBaseService} from "./request-base.service";
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {City} from "../models/city.model";
import {Observable} from "rxjs";

const API_URL = `${environment.BASE_URL}/api/city`;

@Injectable({
  providedIn: 'root'
})
export class CityService extends RequestBaseService{

  constructor(authenticationService:AuthenticationService,http:HttpClient) {
    super(authenticationService,http );
  }
  saveCity(city: City): Observable<any> {
    return this.http.post(API_URL, city, {headers: this.getHeaders});
  }

  deleteCity(city: City): Observable<any> {
    return this.http.delete( `${API_URL}/${city.id}`, {headers: this.getHeaders});
  }

  getAllCity(): Observable<any> {
    return this.http.get(API_URL);
  }

}
