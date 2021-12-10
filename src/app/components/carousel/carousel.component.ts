import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  responsiveOptions: any;
  products = [
    {
      name: 'Product 1',
      price: '$100',
      image: 'assets/images/main_banner.jpg',
    },
    {
      name: 'Product 2',
      price: '$200',
      image: 'assets/images/main_banner2.jpg',
    },
  ];

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => {
    //     this.cars = cars
    // });
  }
}
