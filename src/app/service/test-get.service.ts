import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FaceSnap } from '../modele/face-snap.model';
@Injectable({
  providedIn: 'root'
})
export class TestGetService {

  endpointUrl = environment.baseUrl + '/test';

  constructor(private httpClient : HttpClient) { }

  getAll(){
    console.log("teswsst");
    return new Observable((observer:any) => {
      this.httpClient.get("http://localhost:8080/test").subscribe(result => {

        console.log("complete"),
          (error: any)=> console.log("error");
      } )
    });

  }

  mySnap: FaceSnap[] = [
    {
      id : 1,
      title: 'itachi',
      description: 'the best',
      imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1819992864661873261/32096F8E242EC6650491116F6C56994F9570BCB9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false',
      createdDate: new Date(),
      snaps: 6,
      buttonText: 'Oh snap ! '
    },
    {
      id : 2,
      title: 'itachi',
      description: 'the best',
      imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1819992864661873261/32096F8E242EC6650491116F6C56994F9570BCB9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false',
      createdDate: new Date(),
      snaps: 0,
      buttonText: 'Oh snap ! ',
      location: 'france'
    }

  ];




  getAllFaceSnaps(): Observable<FaceSnap[]>{
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapFaceSnapbyid(id:number): Observable<FaceSnap> {

    return this.httpClient.get<FaceSnap>('http://localhost:3000/facesnaps/'+{id})
  }

  getFaceSnapByIdforPlus(id : number, snapType: 'snap' | 'unsnap'): void {
  const faceSnap = this.snapFaceSnapbyid(id);
 }
 addFaceSnap(formValue : {title: string , description:string, imageUrl:string ,location ? :string}): void {
    const faceSnap:FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.mySnap[this.mySnap.length - 1].id + 1,

    };

    this.mySnap.push(faceSnap);
 }
}
// Importez HttpClientModule et injectez HttpClient pour d??bloquer les requ??tes HTTP.
//
//   Les requ??tes HTTP en Angular sont des Observables qui :
//
//   ??mettent une fois et compl??tent lors d'une r??ponse positive ;
//
// ??mettent une erreur (et sont donc d??truits) lors d'une erreur serveur.
//
// Les Observables g??n??r??s par HttpClient envoient leur requ??te uniquement lorsqu'on souscrit ?? ces Observables ;
//
// Souscrire ?? l'Observable HTTP avec le pipe  async  permet d'afficher facilement les donn??es retourn??es par un serveur ;
//
// La m??thode  get  de HttpClient cr??e une requ??te GET ?? l'URL pass??e en argument.
