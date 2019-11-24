import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument,
 DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
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

  getPerson(key: string): Person{
    const personDoc = this.peopleRefs.doc<Person>(key);
    return personDoc.valueChanges();
  }

  getPeopleList() {
    return this.peopleRefs.snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<Person>[]) => {
        return actions.map((a: DocumentChangeAction<Person>) => {
          const data: Object = a.payload.doc.data() as Person;
          const key = a.payload.doc.id;
          return { key, ...data };
        });
      }),
    );
  }

  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
  return this.col(ref, queryFn)
    .snapshotChanges()
    .pipe(
      map((actions: DocumentChangeAction<T>[]) => {
        return actions.map((a: DocumentChangeAction<T>) => {
          const data: Object = a.payload.doc.data() as T;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );
}
}