import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreDataCreation{

  constructor(private http: HttpClient, private db: AngularFirestore){
  }

  //Create people
  public importPeople(){
    this.http.get('assets/people.json').subscribe(data => {
      console.log(data);    
    });
  }
}