import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductRegistrationService } from '../product-registration.service';


@Component({
  selector: 'app-serach-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product:Product=new Product();
  
  constructor(private service: ProductRegistrationService) { }
  
  ngOnInit(){
    let resp=this.service.getProduct();
        resp.subscribe(data=>{
          this.product=<Product>data;
      })
  }

  public deleteproduct(id:number){
    let resp = this.service.deleteProduct(id);
    resp.subscribe(data =>{
      this.product=<Product>data;
    }) 
    }

}
