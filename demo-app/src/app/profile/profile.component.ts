import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { CharService } from '../char.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userData:any

  constructor(private route:ActivatedRoute,private charService:CharService){

  }
  

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'))
      var id:any = params.get('id')
      this.charService.getcharctorsDetails(id).subscribe((result:any)=>{
       this.userData = result
        console.log(result)
      })

  })
  }

}
