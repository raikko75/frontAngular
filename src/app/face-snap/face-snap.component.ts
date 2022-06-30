import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../modele/face-snap.model';
import { TestGetService } from '../service/test-get.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  constructor(private service: TestGetService) {
  }


  ngOnInit() {
    this.faceSnap.buttonText = 'Oh snap ! '
  }

  onSnap(){
    if(this.faceSnap.buttonText === 'Oh snap ! ') {
      console.log(this.faceSnap.buttonText);
      this.service.getFaceSnapByIdforPlus(this.faceSnap.id,'snap');
      this.faceSnap.buttonText = 'Oops snappps!';

    }else{
      this.service.getFaceSnapByIdforPlus(this.faceSnap.id,'unsnap');
      this.faceSnap.buttonText = 'Oh snap ! '
      }
    }
}
