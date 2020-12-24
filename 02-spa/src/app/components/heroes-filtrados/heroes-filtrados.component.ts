import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes-filtrados',
  templateUrl: './heroes-filtrados.component.html',
  styleUrls: ['./heroes-filtrados.component.css']
})
export class HeroesFiltradosComponent implements OnInit {

  heroes:Heroe[] = [];
  busqueda:string = "";

  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) { 
    this.activatedRoute.params.subscribe(params =>{
      this.busqueda = params['busqueda'];
      this.heroes = this._heroesService.buscarHeroes(params['busqueda']);
    });
  }

  ngOnInit(): void {
    
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
  }

}
