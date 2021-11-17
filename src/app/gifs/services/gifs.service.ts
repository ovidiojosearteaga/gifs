import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API:string = "484Y8PmBbixkhEPGwuVZW5XzAES6f3s4";
  private servicioUrl:string = "https://api.giphy.com/v1/gifs";
  private _historial:string[] = [];
  private _termino!:string;

  public resultados:Gif[] = [];

  get historial():string[] {
    return [...this._historial];
  }

  get termino():string {
    return this._termino;
  }

  constructor(
    private http:HttpClient
  ) {
    this.loadHistorialFromLocalStorage();
    this.loadLastResultadoFromLocalStorage();
    this.loadTerminoFronLocalStorage();
  }

  private loadHistorialFromLocalStorage() {
    const historial = localStorage.getItem("historial");
    this._historial = JSON.parse(historial!) || []
  }

  private loadLastResultadoFromLocalStorage() {
    const resultado = localStorage.getItem("resultado");
    this.resultados = JSON.parse(resultado!) || [];
  }

  private loadTerminoFronLocalStorage() {
    this._termino = localStorage.getItem("termino")! || "Buscar Gif";
  }

  buscarGifs(query:string) {
    if (query.trim().length === 0) { return; }

    query = query.trim().toLocaleLowerCase();
    this.setTerminoToLocalStorage(query);
    this.updateHistorialWith(query);
    this.getGifs(query);
  }

  private setTerminoToLocalStorage(termino:string) {
    this._termino = termino;
    localStorage.setItem('termino', this._termino);
  }

  private updateHistorialWith(termino:string) {
    if (!this._historial.includes(termino)) {
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem("historial", JSON.stringify(this._historial));
    }
  }

  private getGifs(query:string) {
    const params = new HttpParams()
      .set('api_key', this.API)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
    .subscribe((resp) => {
      this.resultados = resp.data;
      localStorage.setItem("resultado", JSON.stringify(resp.data));
    });
  }
}
