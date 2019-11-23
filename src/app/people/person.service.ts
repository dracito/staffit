import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService{
  private dbPath = '/people';
  private peopleRefs: AngularFirestoreCollection<Person> = null;

  constructor(private db: AngularFirestore){
    this.peopleRefs = db.collection(this.dbPath);
  }

  createPerson(person: Person): void{
    this.peopleRefs.add({...person});
  }

  updatePerson(key: string, value: any): Promise<void>{
    return this.peopleRefs.doc(key).update(value);
  }

  deletePerson(key: string): Promise<void>{
    return this.peopleRefs.doc(key).delete();
  }

  getPerson(key: string): Promise<Person>{
    const document: AngularFirestoreDocument<Person> = this.peopleRefs.doc<Person>(key);    
    return document.valueChanges().toPromise();
    
    //this.peopleRefs.doc<Person>(key).ref.get().then((doc) => {return doc.data;})
    /*
    this.peopleRefs.doc(key).ref.get().then((doc) => {
      if(doc.exists){
        return doc.data;
      }else{
        console.log("No such Person data with key"+key+"!");
      }
    }
    */
  }

  getPeopleList(): AngularFirestoreCollection<Person>{
    return this.peopleRefs;
  }
}