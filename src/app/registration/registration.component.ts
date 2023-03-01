import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductRegistrationService } from '../product-registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  product: Product = new Product();
  message: any;

  constructor(private service: ProductRegistrationService) { }

  ngOnInit() {
   

  }

  //  registerNow(){
  //     console.log("cccccc");
  //     let resp=this.service.doregistration(this.product);
  //     resp.subscribe(data=>{
  //       console.log(data);
  //    }) 
  //   }

  doRegister() {
    if(this.product.name!=null && this.product.price!=null && this.product.productId!=null){     
    let resp=this.service.doregistration(this.product);
        resp.subscribe(data=>{
           console.log(data);
       }); 
      }else{
        alert("Please fill all information");
      }
      
  }
}
