import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';
import { User } from '../models/User';
import { UserResponseDto } from '../models/dto/UserResponseDto';

@Injectable()
export class EventoService {
  baseUrl = 'https://localhost:7171';
  apiPedidos = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}/all`);
  }

  public getEventosByTema(tema: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}/tema/${tema}`);
  }

  public getEventoById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseUrl}/${id}`);
  }

  public addUser(user: User): Observable<UserResponseDto> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<UserResponseDto>(`${this.apiPedidos}/api/usuario`, user, { headers });
  }
}
