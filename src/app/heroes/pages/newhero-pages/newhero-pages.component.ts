import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Hero, Publisher} from "../../interfaces/hero.interface";
import {HeroesService} from "../../services/heroes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
  selector: 'app-newhero-pages',
  templateUrl: './newhero-pages.component.html',
  styleUrl: './newhero-pages.component.css'
})
export class NewheroPagesComponent implements OnInit {
    public publishers = [
      {
        id: 'DC Comics',
        desc: 'DC - Comics'
      },
      {
        id: 'Marvel Comics',
        desc: 'Marvel - Comics'
      }
    ]
    constructor(private heroService:HeroesService,
                private activatedRoute:ActivatedRoute,
                private  router:Router,
                private snackbar: MatSnackBar,
                private dialog: MatDialog

    ) {}

    // formulario reactivo
    public heroForm = new FormGroup({
        id: new FormControl(''),
        superhero: new FormControl('',{nonNullable: true}),
        publisher:new FormControl<Publisher>(Publisher.DCComics),
        alter_ego:new FormControl(''),
        first_appearance:new FormControl(''),
        characters:new FormControl(''),
        alt_img:  new FormControl('') ,
    });

    ngOnInit():void {
        if(!this.router.url.includes('edit')) return;

        this.activatedRoute.params.pipe(
          switchMap(({id}) => this.heroService.getHeroesById(id)),
        ).subscribe( hero => {
          if(!hero) return this.router.navigateByUrl('/');

          this.heroForm.reset(hero);
          return;
        })

    }

  get currentHero():Hero {
      const hero = this.heroForm.value as Hero;
        return hero;
    }

    onSubmit():void {
        if(this.heroForm.invalid) return;

        if( this.currentHero.id) {
          this.heroService.updateHero(this.currentHero)
            .subscribe(hero => {
              //mostrar snackbar
              this.showSnackbar(`${hero.superhero} actualizado `)
            })
          return;
        }

        this.heroService.addHero(this.currentHero)
          .subscribe(hero => {
              //mostrar snackbar y navegar a /heroes/edit/ hero.id
              this.showSnackbar(`${hero.superhero} creado `)
              this.router.navigate(['/heroes/edit',hero.id]);
            })
    }

    showSnackbar (message:string):void {
      this.snackbar.open(message,'done',{
        duration: 2500
      })
    }

    onDeleteHero():void {
      if(!this.currentHero.id) throw Error ('El id de hero es requerido');

        const dialogRef = this.dialog.open(ModalComponent, {
          data: this.heroForm.value
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
          if(!result) return;
          this.heroService.deleteHero(this.currentHero.id)
            .subscribe(wasDeleted=> {
              if(wasDeleted) this.router.navigate(['/heroes']);
          })
        });

    }

}
