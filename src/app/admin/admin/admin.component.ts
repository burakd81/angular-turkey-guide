import {Component, OnInit, ViewChild} from '@angular/core';


import {PhotoComponent} from "../photo/photo.component";
import {Photo} from "../../models/photo.model";
import {PhotoService} from "../../services/photo.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  photoList:Array<Photo> = [];
  selectedPhoto:Photo = new Photo();


  @ViewChild(PhotoComponent) child:PhotoComponent | undefined;
  constructor(private photoService:PhotoService) { }

  ngOnInit(): void {
    this.photoService.getAllPhoto().subscribe(data=>{
      this.photoList=data;
    });}
  createPhotoRequest(){
    this.selectedPhoto = new Photo();
    this.child?.showPhotoModal();}
  editPhotoRequest(item:Photo){
    this.selectedPhoto = Object.assign({},item);
    this.child?.showPhotoModal();}
  savePhotoWatcher(photo:Photo){
    let itemIndex = this.photoList.findIndex(item=>item.id === photo.id);
    if(itemIndex !== -1){
      this.photoList[itemIndex]=photo;
    }
    else{this.photoList.push(photo);}
  }
  deletePhoto(item:Photo,ind:number){
    this.photoService.deletePhoto(item).subscribe(data=>{
      this.photoList.splice(ind,1);
    });

  }


}
