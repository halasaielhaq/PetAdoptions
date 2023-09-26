import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Animal } from 'src/app/Models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  token:any;
  headers!:HttpHeaders;
  private apiUrl = 'http://localhost:8080/api/animals';
  constructor(private http: HttpClient) {
     this.token = localStorage.getItem('jwtToken');
    
  }

  getHeaders():HttpHeaders{
    return this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`, 
    });
  }

 

  createAnimalWithImage(animal: Animal,image:string,type:string):Observable<any>{
   
      animal.imageFile=image;
      animal.typePhoto=type
      
      return this.http.post(this.apiUrl+`/add`,animal, { headers:this.getHeaders() });
  }


  getListAnimal(){
    return this.http.get<any>(this.apiUrl+`/allAnimals`,{ headers:this.getHeaders()})
  }
  


}