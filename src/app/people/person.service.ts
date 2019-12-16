import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument,
 DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { FirestoreService } from '../services/firestore.service';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService{
  private dbPath = '/people';
  private peopleRefs: AngularFirestoreCollection<Person> = null;

  constructor(private db: FirestoreService /*private db: AngularFirestore*/){
    this.peopleRefs = db.col$(this.dbPath);
    //this.peopleRefs = db.collection(this.dbPath);
  }

  createPerson(person: Person): void{
    this.peopleRefs.add({...person});
  }

  updatePerson(id: string, value: any): Promise<void>{
    return this.peopleRefs.doc(id).update(value);
  }

  deletePerson(id: string): Promise<void>{
    return this.peopleRefs.doc(id).delete();
  }

  getPerson(id: string): Person{
    const personDoc = this.peopleRefs.doc<Person>(id);
    return personDoc.valueChanges();
  }

  getPeopleList() {
    return this.peopleRefs.snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<Person>[]) => {
        return actions.map((a: DocumentChangeAction<Person>) => {
          const data: Object = a.payload.doc.data() as Person;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );
  }
}