import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  objectListRef!: AngularFireList<any>;
  objectRef!: AngularFireObject<any>;
  collName = '/ranking/channel/day';
  coll='channel';
  objectListRef1!: AngularFireList<any>;
  objectRef1!: AngularFireObject<any>;

 

  

  
  constructor(private db: AngularFireDatabase) { }


 


  getObject(id: string) {
    this.objectRef = this.db.object(this.collName + '/' + id);
    return this.objectRef;
  }


  getObjectList() {
    this.objectListRef = this.db.list(this.collName);
    return this.objectListRef;
  }
  
  


 

  fetchObject(){
    this.db.list(this.collName).valueChanges().subscribe(res => {
     })
  }



/********************
 2eme table:chaine
 */
 fetchObject1(){
  this.db.list(this.coll).valueChanges().subscribe(res => {
   })
  }



  getObject1(id: string) {
    this.objectRef1 = this.db.object(this.coll + '/' + id);
    return this.objectListRef1;
  }


  getObjectList1(id: string) {
    this.objectListRef1 = this.db.list(this.coll+'/'+id);
    return this.objectListRef1;
  }
}