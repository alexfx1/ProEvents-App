import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable()
export class EventoService {
  baseUrl = 'https://localhost:7171';

  constructor(private http: HttpClient) { }

  public getEventos() : Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}/all`)
  }

  public getEventosByTema(tema: string) : Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}/tema/${tema}`)
  }

  public getEventoById(id: number) : Observable<Evento> {
    return this.http.get<Evento>(`${this.baseUrl}/${id}`)
  }
}
