import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DipendentiService {

  constructor(private httpClient: HttpClient) { }

  get(page: number, size: number) : Observable<any> {
    return this.httpClient.get('http://localhost:8080/employees?page='+page+'&size='+size);
  }

  add(item:any) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/employees', item);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8080/employees/'+id);
  }

  
}
