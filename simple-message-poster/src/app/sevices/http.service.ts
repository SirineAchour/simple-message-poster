import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api:string="http://localhost:3000"

  constructor(private http: HttpClient) { }

  post_message(data:string){
    console.log("post")
    console.log(data)
    console.log(JSON.stringify({data: data}))
    return this.http.post(this.api+"/create", {data: data});
  }

  get_messages(){
    return this.http.get(this.api + '/')
  }

  delete_message(id:any){
    return this.http.delete(this.api+"/"+id+"/delete");
  }
}
