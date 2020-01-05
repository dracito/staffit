import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
export class FirestoreDataCreation{

  private _jsonURL = 'assets/person.json';

  constructor(private http: HttpClient){
    this.getJSON().subscribe(data => {
    console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}