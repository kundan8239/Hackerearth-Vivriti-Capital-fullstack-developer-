import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class IndexService
{
  api_url = "../../assets/beer.json"; 
  constructor(private http: HttpClient) { }

  getBearList()
  {
     return this.http.get(this.api_url);
  }
}