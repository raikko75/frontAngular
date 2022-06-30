import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFaceSnapsComponent } from './single-face-snaps.component';

describe('SingleFaceSnapsComponent', () => {
  let component: SingleFaceSnapsComponent;
  let fixture: ComponentFixture<SingleFaceSnapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFaceSnapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFaceSnapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
