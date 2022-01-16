import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {Photo} from "../models/photo.model";
import {Observable} from "rxjs";
import {RequestBaseService} from "./request-base.service";
import {environment} from "../../environments/environment";


const API_URL = `${environment.BASE_URL}/api/photo`;

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends RequestBaseService{

  constructor( authenticationService:AuthenticationService,
              http:HttpClient) {
    super(authenticationService, http);
  }


 savePhoto(photo:Photo):Observable<any>{
 return this.http.post(API_URL,photo,{headers: this.getHeaders});
}

  deletePhoto(photo: Photo): Observable<any> {
    return this.http.delete( `${API_URL}/${photo.id}`, {headers: this.getHeaders});
  }

  getAllPhoto(): Observable<any> {
    return this.http.get(API_URL);

  }

}
