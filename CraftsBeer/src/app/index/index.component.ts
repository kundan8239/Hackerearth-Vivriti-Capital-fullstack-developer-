import { Component, OnInit } from '@angular/core';
import { IndexModel } from './indexModel';
import { IndexService } from './index.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  indexService : IndexService;
  beerdetail : any;
  bearList = [];
  p: number = 1;
  count : any = 0;
  cartList = [] ;

  constructor(private indexService1: IndexService)
  {
    this.indexService = indexService1;
    this.getBeerData();
  }

  getBeerData()
  {
    this.indexService.getBearList().subscribe(res=>{
       this.beerdetail = res;
       for(var i =0 ;i<this.beerdetail.length; i++)
       {
            var model = new IndexModel();
            model.abv = this.beerdetail[i].abv;
            model.ibu = this.beerdetail[i].ibu;
            model.id = this.beerdetail[i].id;
            model.name = this.beerdetail[i].name;
            model.style= this.beerdetail[i].style;
            model.ounces = this.beerdetail[i].ounces;
            this.bearList.push(model); 
       }
    },error => {
         console.log("response does not arrived !!")
     });
  }  

  addBeer(beer)
  {
     this.cartList.push(beer);
     this.count = this.count + 1; 
  }

  removeBeer(beer)
  { 
     var index = this.cartList.indexOf(beer);
     this.cartList.splice(index,1);
     if(this.count > 0)
       this.count = this.count-1;
     else
      alert("No Item to Removed !!");
  }
  ngOnInit() {
  }

}
