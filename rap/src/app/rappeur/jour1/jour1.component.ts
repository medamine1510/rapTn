import { Component, OnInit } from '@angular/core';
import {CrudService} from './service.jour';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-jour1',
  templateUrl: './jour1.component.html',
  styleUrls: ['./jour1.component.css']
})
export class Jour1Component implements OnInit {

  Videos : any;
 
  videoRef!: AngularFireList<any>;
  videoRef1!: AngularFireList<any>;
 
  
  constructor(
    private ser:CrudService
    ){this.ser.fetchObject();
      this.ser.fetchObject1( );}
  
  ngOnInit(){
 
  
  let videoRef = this.ser.getObjectList();
  
    videoRef.snapshotChanges().subscribe((res: any[]) => {
      this.Videos = [];
      
      res.forEach((item => {
        let donne = item.payload.toJSON();
        
        donne['$key'] = item.key;
        
        donne['rank']=Number(donne['$key'])+1;
       

      let videoRef1 = this.ser.getObjectList1(donne['id']) ;
       videoRef1.snapshotChanges().subscribe((res: any[]) => {
        
        res.forEach((item => {
          let data1 = item.payload.toJSON();
          
          data1['id'] = item.key;
    
          
          donne[data1['id']] = data1;
          
          
        
     
        }))
        
      })
      console.log(donne);
      this.Videos.push(donne)}))});











     

    
    }
   
}


