import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductRegistrationService {

  constructor(private http:HttpClient) { }

  public doregistration(product:Product){
    return this.http.post("http://localhost:9090/post",product, {responseType:"text"});
  }
    public getProduct(){
      return this.http.get("http://localhost:9090/allproducts");
    }
    public deleteProduct(id:number){
      return this.http.get("http://localhost:9090/id");
    }


    
}
