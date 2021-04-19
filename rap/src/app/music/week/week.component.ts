import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {WeekService} from 'src/app/music/week/week.service';
import{DomSanitizer} from '@angular/platform-browser'


@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  Videos : any;
  videoRef!: AngularFireList<any>; 
  videoRef1!: AngularFireList<any>;
 
  constructor(
    private ser:WeekService,
    private sanitizer:DomSanitizer
    ){this.ser.fetchObject();
      this.ser.fetchObject1()}

  ngOnInit() {
 
    let videoRef = this.ser.getObjectList();
  
    videoRef.snapshotChanges().subscribe((res: any[]) => {
      this.Videos = [];
      
      res.forEach((item => {
        let data = item.payload.toJSON();
        
        data['$key'] = item.key;   
        data['rank']=Number(data['$key'])+1;

      let videoRef1 = this.ser.getObjectList1(data['vidId']) ;
       videoRef1.snapshotChanges().subscribe((res: any[]) => {
        
        res.forEach((item => {
          let data1 = item.payload.toJSON();
          
          data1['vidId'] = item.key;
    
          
          data[data1['vidId']] = data1
          
        
     
        }))
        
      })
      console.log(data);
      this.Videos.push(data)}))});











     

    
    }
} 





