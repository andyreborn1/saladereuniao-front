import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl: string =
    'https://sala-de-reuniao-api.herokuapp.com/api/v1/room';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  findById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  save(room: Room): Observable<Room> {
    if (room.id) {
      return this.http.put<Room>(`${this.apiUrl}/${room.id}`, room);
    } else {
      return this.http.post<Room>(`${this.apiUrl}`, room);
    }
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
