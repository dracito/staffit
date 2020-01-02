import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,
 DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService{
  private peopleCollection: AngularFirestoreCollection<Person>;
  private people: Observable<an[]>;

  constructor(private db: AngularFirestore){
    this.peopleCollection = db.collection<Person>('people');
    this.people = this.peopleCollection.snapshotChanges();
  }

  createPerson(person: Person): void{
    this.peopleRefs.add({...person});
  }

  updatePerson(id: string, value: any): Promise<void>{
    this.people
    this.itemDoc.update(item);
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