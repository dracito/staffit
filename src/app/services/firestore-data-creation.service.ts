import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataCreationService{

  private peopleCollection: AngularFirestoreCollection;
  
  constructor(private http: HttpClient, private db: AngularFirestore){
    this.peopleCollection = db.collection('peopleimport')
  }

  //Create people
  public importPeople(){
    
    this.http.get('assets/people.json').subscribe((data: any[]) => {
      console.log(data);
      for (var value of data) {
        console.log(value);
        // Add a new document in collection "cities"
        this.peopleCollection
        .add({
          .value
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      };  
    });
    
  }
}