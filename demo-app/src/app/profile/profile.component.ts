import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { CharService } from '../char.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userData:any
  vehicleList:any[] = []
  filmList:any[] = []
  startShipsList:any[] = []

  constructor(private route:ActivatedRoute,private charService:CharService){

  }
  

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'))
      var id:any = params.get('id')
      this.charService.getcharctorsDetails(id).subscribe((result:any)=>{
       this.userData = result
        console.log(result)
        this.getVehicles();
        this.getFilms()
        this.getStarships()


      })

  })
  }

  getVehicles(){
    if(this.userData.vehicles.length){
    this.userData.vehicles.forEach((vehi:any)=>{
      this.charService.getVehiclesDetails(vehi).subscribe((result:any)=>{
        this.vehicleList.push(result)
      })
    })
  }

  }

  getFilms(){
    if(this.userData.films.length){
    this.userData.films.forEach((film:any)=>{
      this.charService.getfilms(film).subscribe((result:any)=>{
        this.filmList.push(result)
      })
    })
  }
  }

  getStarships(){ 
    if(this.userData.starships.length){
    this.userData.starships.forEach((starships:any)=>{
      this.charService.getStarshipss(starships).subscribe((result:any)=>{
        this.startShipsList.push(result)
      })
    })
  }
  }

}
