import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  public createUser(idToken: String){
    // return this.http.post('http://localhost:3000'+ idToken,"");
    return this.http.post('http://localhost:4200/' +  'user', '', { headers: new HttpHeaders({ 'Authorization': `${idToken}`})});
  }
  

}