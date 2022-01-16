import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CityService} from "../../services/city.service";
import {City} from "../../models/city.model";


declare var $: any;
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {



  @Input() city:City = new City();
  @Output() save = new EventEmitter<any>();
  constructor(private cityService:CityService) { }

  saveCity(){
    this.cityService.saveCity(this.city).subscribe(data=>{
      this.save.emit(data);
      $('#cityModal').modal('hide');
    })
  }


  showCityModal(){
    $('#cityModal').modal('show');
  }

}
