import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {map, Observable } from 'rxjs';
import { FaceSnap } from '../modele/face-snap.model';
import { TestGetService } from '../service/test-get.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.css']
})
export class NewFaceSnapComponent implements OnInit {
  snapForm !: FormGroup;
  faceSnapPreview$ !: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder : FormBuilder,private service : TestGetService, private route :Router) { }

  ngOnInit(): void {
    this.snapForm =  this.formBuilder.group(
      {
        title:[null, [Validators.required]],
        description:[null,[Validators.required]],
        imageUrl:[null, [Validators.required, Validators.pattern(this.urlRegex)]],
        location:[null,[Validators.required]]
      },{
        upDateOn:'blur'
      }
    )
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id:0,
        snaps:0
      }))
    );
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
  }
    onSubmitForm(): void{
    console.log("on submit : "  + this.snapForm.value.imageUrl);
    this.service.addFaceSnap(this.snapForm.value);
    this.route.navigateByUrl('/facesnaps');
    }


}
