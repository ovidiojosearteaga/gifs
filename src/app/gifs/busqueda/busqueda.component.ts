import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild("inputTextBuscar") inputTextBuscar!:ElementRef<HTMLInputElement>;

  get termino() {
    return this.gifsService.termino;
  }

  constructor(
    private gifsService:GifsService
  ) { 
  }

  ngOnInit(): void {
  }

  buscar() {
    const termino = this.inputTextBuscar.nativeElement.value;
    this.gifsService.buscarGifs(termino);
    this.clearInputTextBuscar();
  }

  private clearInputTextBuscar() {
    this.inputTextBuscar.nativeElement.value = '';
  }

}
