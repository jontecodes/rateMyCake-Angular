import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  avg;
  @Input() selectedCake: any;
  constructor() { }

  ngOnInit() {
    this.getAvg();
    console.log("ONINIT");
  }

  getAvg(){
  //   let sum =0;
  //   console.log("HELLOOOO");
  //   for(let i = 0; i < this.selectedCake['comments'].length; i++){
  //     sum += this.selectedCake[i]['rating'];
  //     console.log(this.selectedCake[i]['rating']);
  //   };
  //   this.avg = sum / this.selectedCake['comments'].length;
  // }

}
