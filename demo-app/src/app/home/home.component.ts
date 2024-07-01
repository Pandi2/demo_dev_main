import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CharService } from '../char.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  charList:any
  constructor(private http: HttpClient,private charservice:CharService) {}

   ngOnInit(){
    this.charservice.getAllCharactors().subscribe((result:any) =>{
      console.log(result)
      this.charList = result
      var data:any = []
      result.characters.forEach( (element:any) =>{

        
        
        console.log(element.split("/")[5])
         this.charservice.getcharctorsDetails(element.split("/")[5]).subscribe((character:any) =>{
          character['id'] = element.split("/")[5]
          if(character.species.length){
            character.species.forEach( (species:any) =>{
               this.charservice.getcharspecies(species.split("/")[5]).subscribe((spec_data:any)=>{
                character['species_details'] = spec_data
              })
            })
          }
          else{
            character['species_details'] = {"name":""}
            data.push(character)

          }
          console.log(character)
        })
      })

      this.charList = data
    
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

    })
  }

}
