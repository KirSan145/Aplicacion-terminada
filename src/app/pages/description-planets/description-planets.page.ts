import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-planets',
  templateUrl: './description-planets.page.html',
  styleUrls: ['./description-planets.page.scss'],
})
export class DescriptionPlanetsPage implements OnInit {

  planets:any; 

  constructor(private actroute020:ActivatedRoute, private obtenservice30:SwapiService) { }

  ngOnInit() {
    this.actroute020.paramMap.subscribe((param)=>{
      let id = param.get('id');
      console.log(id);
      this.planets = this.obtenservice30.getswapi(`planets/${id}`).subscribe(data =>{
        this.planets=data;
        console.log(data);
    });

  });
 }
  
}
