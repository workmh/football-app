import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllLeagues(): Observable<any>{
    let headers = new HttpHeaders({
      'X-RapidAPI-Key':'bc842ba5c7msh185cc08b74c79dbp1d9831jsn65f910a87093',
      'X-RapidAPI-Host':'api-football-v1.p.rapidapi.com'
    });
    return this.http.get('https://api-football-v1.p.rapidapi.com/v3/leagues',{
      headers: headers
    })
  }

}
