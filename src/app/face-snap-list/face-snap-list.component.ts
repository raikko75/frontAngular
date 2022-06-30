import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../modele/face-snap.model';
import { TestGetService } from '../service/test-get.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  mySnap !: FaceSnap[];
  faceSnap$ !: Observable<FaceSnap[]>;
  private destroy$ !: Subject<any>;
  constructor(private serviceGet : TestGetService) { }


  ngOnDestroy(): void {
      this.destroy$.next(true);
    }

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
    this.faceSnap$ = this.serviceGet.getAllFaceSnaps();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)).subscribe();
  }
}
/*Un Observable souscrit qui ne complète pas risque de créer des fuites de mémoire.

Si un Observable est souscrit avec la méthode subscribe(), 2 possibilités :

Si vous connaissez le nombre d'émissions qui vous intéressent, utilisez l'opérateur  take().

Si vous avez besoin de toutes les émissions durant la vie du component, utilisez le pattern Destroy Subject.

ngOnDestroy est un lifecycle hook qui est appelé lors de la destruction du component.

Un Subject est un Observable que l'on peut forcer à émettre avec sa méthodenext()  .

Les Observables souscrits avec le pipe  async  sont unsubscribe automatiquement par Angular lors de la destruction du component.
*/

