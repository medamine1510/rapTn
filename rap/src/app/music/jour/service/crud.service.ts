import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { video } from './model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  objectListRef!: AngularFireList<any>;
  objectRef!: AngularFireObject<any>;
  collName = '/ranking/video/day';
  coll='video';
  objectListRef1!: AngularFireList<any>;
  objectRef1!: AngularFireObject<any>;

 

  

  
  constructor(private db: AngularFireDatabase) { }


  createObject(vid: video) {
    return this.objectListRef.push(vid)
  }


  getObject(id: string) {
    this.objectRef = this.db.object(this.collName + '/' + id);
    return this.objectRef;
  }


  getObjectList() {
    this.objectListRef = this.db.list(this.collName);
    return this.objectListRef;
  }
  
  


  updateObject(id: any, vid: video) {
    return this.objectRef.update(vid)
  }


  deleteObject(id: string) {
    this.objectRef = this.db.object(this.collName + '/'  + id);
    this.objectRef.remove();
  }

  fetchObject(){
    this.db.list(this.collName).valueChanges().subscribe(res => {
     })
  }



/********************
 2eme table:video
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