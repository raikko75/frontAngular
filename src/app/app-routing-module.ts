import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponentComponent } from "./landing-page-component/landing-page-component.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { SingleFaceSnapsComponent } from "./single-face-snaps/single-face-snaps.component";

const routes: Routes = [
  {path : 'facesnaps' , component:FaceSnapListComponent},
  {path : '', component:LandingPageComponentComponent},
  {path : 'facesnaps/:id', component:SingleFaceSnapsComponent},
  {path : 'create', component:NewFaceSnapComponent},
];


@NgModule({
  imports: [
  RouterModule.forRoot(routes)
],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
