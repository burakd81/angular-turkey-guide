import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhotoService} from "../../services/photo.service";
import {Photo} from "../../models/photo.model";


declare var $: any;
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent{


  @Input() photo:Photo = new Photo();
  @Output() save = new EventEmitter<any>();
  constructor(private photoService:PhotoService) { }

  savePhoto(){
    this.photoService.savePhoto(this.photo).subscribe(data=>{
      this.save.emit(data);
      $('#photoModal').modal('hide');
    })
  }
  showPhotoModal(){
    $('#photoModal').modal('show');
  }

}
