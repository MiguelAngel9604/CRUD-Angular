import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { heroeModel } from '../../models/heroeModel';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:heroeModel = new heroeModel();
  constructor() { }

  ngOnInit(): void {
  }

  sendHeroe(form:NgForm){
    if (!form.valid) {
      console.log("Invalid Form");
      
    }
    console.log(form);
    console.log(this.heroe);
    
    

  }

}
