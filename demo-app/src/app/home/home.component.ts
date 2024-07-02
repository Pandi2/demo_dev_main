import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CharService } from '../char.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  charList:any[] = []
  current_page = 1
  pageSize:any = 10
  collection_size:any
  selectedOptionMovie = ""
  selectedOptionSpecies= ""
  selectedOptionVehicle= ""
  selectedOptionShips= ""
  selectedOptionYear= ""
  vehicleList:any[] = []
  filmList:any[] = []
  startShipsList:any[] = []
  speciesList:any[] = []
  peopelBirtList:any[] = []
 


  constructor(private http: HttpClient,private charservice:CharService) {}

   ngOnInit(){

    this.getPeope(this.current_page)

    // this.charservice.getAllCharactors().subscribe((result:any) =>{
    //   console.log(result)
    //   this.charList = result
    //   var data:any = []
    //   result.characters.forEach( (element:any) =>{

        
        
    //     console.log(element.split("/")[5])
    //      this.charservice.getcharctorsDetails(element.split("/")[5]).subscribe((character:any) =>{
    //       character['id'] = element.split("/")[5]
    //       if(character.species.length){
    //         character.species.forEach( (species:any) =>{
    //            this.charservice.getcharspecies(species.split("/")[5]).subscribe((spec_data:any)=>{
    //             character['species_details'] = spec_data
    //           })
    //         })
    //       }
    //       else{
    //         character['species_details'] = {"name":""}
    //         data.push(character)

    //       }
    //       console.log(character)
    //     })
    //   })

    console.log(this.charList)
    
      // console.log("133",data)
      // result.characters.forEach((element:any) =>{
      //   console.log(element.split("/")[5])
      // })
      // result.characters.forEach((element:any) =>{
      //   console.log(element.split("/")[5])
      // })
      // result.characters.forEach((element:any) =>{
      //   console.log(element.split("/")[5])
      // })
      // result.characters.forEach((element:any) =>{
      //   console.log(element.split("/")[5])
      // })

    // })
  }
  getPeope(current_page: number) {
    this.charList = [];
    this.charservice.getAllCharactors(current_page).subscribe((result:any) =>{
      this.collection_size = result.count
      this.peopelBirtList = result.results;
      result.results.forEach((people:any)=>{
        people['id'] = people.url.split("/")[5]
          if(people.species.length){
            people.species.forEach( (species:any) =>{
               this.charservice.getcharspecies(species.split("/")[5]).subscribe((spec_data:any)=>{
                people['species_details'] = spec_data
                this.charList.push(people)
              })
            })
          }
          else{
            people['species_details'] = {"name":""}
            this.charList.push(people)

          }
      })
    })
    this.charservice.getfilms('https://swapi.dev/api/films/').subscribe((films:any) =>{
      this.filmList = films.results
    })
    this.charservice.getSpecies('https://swapi.dev/api/species/').subscribe((species:any) =>{
      this.speciesList = species.results
    })
    this.charservice.getVehiclesDetails('https://swapi.dev/api/vehicles/').subscribe((vehicles:any) =>{
      this.vehicleList = vehicles.results
    })
    this.charservice.getStarshipss('https://swapi.dev/api/starships/').subscribe((star:any) =>{
      this.startShipsList = star.results
    })

  }


  loadPage(page:number){
    this.getPeope(page)
  }

  onOptionSelected(event:any){

  }

  search(){

    if(this.selectedOptionMovie){
        this.charList.filter((element =>{
          element.forEach((data:any)=> data.url === this.selectedOptionMovie)
        }))
    }
    if(this.selectedOptionSpecies){
      
    }
    if(this.selectedOptionVehicle){
      
    }
    if(this.selectedOptionShips){
      
    }
    if(this.selectedOptionYear){
      
    }

  }

}
