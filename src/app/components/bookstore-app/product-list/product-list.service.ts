import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()


export class BooksService {

  private url = 'http://localhost:5000/livros';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}
   
    getBooks() {
      return this.http.get(this.url)
    }
}

