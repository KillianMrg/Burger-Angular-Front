import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgersService } from '../api/api/burgers.service'

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent implements OnInit {

  burger;
  constructor(private burgersService : BurgersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.burger = this.burgersService.burgerDetail(id)
        .subscribe(burger => this.burger = burger);
  }

}
