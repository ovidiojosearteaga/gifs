import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifspageComponent } from './gifspage/gifspage.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifspageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifspageComponent
  ],
})
export class GifsModule { }
