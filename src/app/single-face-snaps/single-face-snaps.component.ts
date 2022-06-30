import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../modele/face-snap.model';
import { TestGetService } from '../service/test-get.service';

@Component({
  selector: 'app-single-face-snaps',
  templateUrl: './single-face-snaps.component.html',
  styleUrls: ['./single-face-snaps.component.css']
})
export class SingleFaceSnapsComponent implements OnInit {

  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  constructor(private service: TestGetService, private route : ActivatedRoute) {
  }


  ngOnInit() {
    this.faceSnap.buttonText = 'Oh snap ! ';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.service.getFaceSnapById(faceSnapId);
  }
  onSnap(){

  }

}
