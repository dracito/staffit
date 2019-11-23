import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService{
  private dbPath = '/people';
  peopleRefs: AngularFirestoreCollection<Person> = null;

  constructor(private db:AngularFirestore){
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

  getPeopleList(): AngularFirestoreCollection<Person>{
    return this.peopleRefs;
  }
}