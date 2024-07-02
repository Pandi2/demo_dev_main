import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CharService {

  constructor(private http: HttpClient) { }

  getAllCharactors(page:any){
    return this.http.get(`https://swapi.dev/api/people/?page=${page}`);
  }

  getcharctorsDetails(id:string){
    return this.http.get(`https://swapi.dev/api/people/${id}`);
  }


  getcharspecies(id:string){
    return this.http.get(`https://swapi.dev/api/species/${id}`);
  }

  getSpecies(url:string){
    return this.http.get(url);
  }

  getVehiclesDetails(url:string){
    return this.http.get(url);
  }
  getfilms(url:string){
    return this.http.get(url);
  }
  getStarshipss(url:string){
    return this.http.get(url);
  }
}






