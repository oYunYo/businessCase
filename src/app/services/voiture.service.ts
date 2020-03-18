import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Voiture } from '../models/voiture';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  getVoitureByiD(id: number) {
    throw new Error("Method not implemented.");
  }
  voitures: Voiture[];
  apiURL = 'http://localhost:3000/voitures';   
  httpOptions = {       
    headers: new HttpHeaders({             
      'Content-Type': 'application/json'         
    })     
  };   
  constructor(private http: HttpClient) {
    this.voitures = [];
   }

  handleError(error) {     
  let errorMessage = '';     
  if ( error.error instanceof ErrorEvent ) {         
    // Get client-side error         
    errorMessage = error.error.message;     
  } else {         
    // Get server-side error         
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;     
  }     
  window.alert(errorMessage);     
  return throwError(errorMessage); 
} 

getVoitures(): Observable<Voiture[]> {      
  return this.http.get<Voiture[]>(this.apiURL)          
    .pipe(             
        retry(1),              
        catchError(this.handleError)          
    ); 
}

getOneVoiture(id: number): Observable<Voiture> {     
  return this.http.get<Voiture>(this.apiURL + '/' + id)         
    .pipe(             
      retry(1),             
      catchError(this.handleError)         
    ); 
}

addVoiture(voiture:Voiture): Observable<Voiture> {
  return this.http.post<Voiture>(this.apiURL, voiture, this.httpOptions).pipe(
    catchError(this.handleError)
  );
}

}
