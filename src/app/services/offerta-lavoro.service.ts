import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffertaLavoroService {
  private baseUrl = `${environment.HOST_DOMAIN}/api/offerte-lavoro`;

  constructor(private http: HttpClient) { }

  getOfferte(max: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lista?max=${max}`);
  }

  createOfferta(offerta: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/creare`, offerta);
  }

  updateOfferta(offertaLavoroID: number, offerta: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/modifica/${offertaLavoroID}`, offerta);
  }

  searchOfferte(query: string, max: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/cerca`, { query, max });
  }

  deleteOfferta(offertaLavoroID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/elimina/${offertaLavoroID}`);
  }
}
