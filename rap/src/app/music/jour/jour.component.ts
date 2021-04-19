import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {CrudService} from './service/crud.service';
import { video } from './service/model';
import { detail } from './service/model';
import{DomSanitizer} from '@angular/platform-browser'
import { MaxLengthValidator } from '@angular/forms';





@Component({
  selector: 'app-jour',
  templateUrl: './jour.component.html',
  styleUrls: ['./jour.component.scss']
})

export class JourComponent implements OnInit {

  Videos : any;
 
  videoRef!: AngularFireList<any>;
  videoRef1!: AngularFireList<any>;
 
  
  constructor(
    private ser:CrudService,
    private sanitizer:DomSanitizer
    ){this.ser.fetchObject();
      this.ser.fetchObject1( );}
  
  ngOnInit(){
 
  
  let videoRef = this.ser.getObjectList();
  
    videoRef.snapshotChanges().subscribe((res: any[]) => {
      this.Videos = [];
      
      res.forEach((item => {
        let data = item.payload.toJSON();
        
        data['$key'] = item.key;
        
        data['rank']=Number(data['$key'])+1;
       

      let videoRef1 = this.ser.getObjectList1(data['id']) ;
       videoRef1.snapshotChanges().subscribe((res: any[]) => {
        
        res.forEach((item => {
          let data1 = item.payload.toJSON();
          
          data1['id'] = item.key;
    
          
          data[data1['id']] = data1;
          
          
        
     
        }))
        
      })
      console.log(data);
      this.Videos.push(data)}))});











     

    
    }
   
}


