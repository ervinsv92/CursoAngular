import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:Heroe= null;

  constructor(private heroesService:HeroesService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.heroe = this.heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
