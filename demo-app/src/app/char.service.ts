import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CharService {

  constructor(private http: HttpClient) { }

  getAllCharactors(){
    return this.http.get('https://swapi.dev/api/films/1/');
  }

  getcharctorsDetails(id:string){
    return this.http.get(`https://swapi.dev/api/people/${id}`);
  }

  getcharspecies(id:string){
    return this.http.get(`https://swapi.dev/api/species/${id}`);
  }
}
