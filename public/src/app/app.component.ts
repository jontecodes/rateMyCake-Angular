import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { discardPeriodicTasks } from "@angular/core/testing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cakes';
  // this will keep object being passed for a new cake
  newCake: any;
  newComment = {comment: '', rating: 1};
  // Cakes array declare
  cakes = [];
  oneCake = [];
  // avg;
  constructor(private _http: HttpService){}

  ngOnInit(){

    // load all cakes on load
    this.getCakes();
    this.newCake = {name: '', image: ''};
  }
  // add cake to post function in service
  addCake(){
    console.log('Cake recieved', this.newCake);
    let observable = this._http.addCake(this.newCake);
    observable.subscribe(data => {
      console.log('Got post data', data);
      this.newCake = {name: '', image: ''};
      this.getCakes();
    });
  }
  // add comment to certain cake
  addComment(id: any, comment: any){
    this.add(id, this.newComment);
    this.getCakes();
  }
  // passed into addComment
  add(id: any, comment: any){
    console.log('Your id', id);
    let observable = this._http.addComment(id, comment);
    observable.subscribe(data => {
      console.log('Edited post data', data);
    });
  }
  // get all cakes via get method in service
  getCakes(){
    let observable = this._http.allCakes();
    observable.subscribe(data => {
      console.log('Got our Cakes', data);
      this.cakes = data['cakes'];
    });
  }
  onImageClick(id: any){
    this.getOneCake(id);
  }
  getOneCake(id: any){
    let observable = this._http.getSingleCake(id);
    observable.subscribe(data => {
      this.oneCake = data['cakes'];
      console.log('OneCake var', this.oneCake)
      console.log('Got single Cake', data);
    });
  }
  // getAvg(){
  //   let sum = 0;
  //   for(var comment of this.oneCake['comments']){
  //     sum += comment.rating;
  //   }
  //   this.avg = sum / this.oneCake['comments'].length;
  // }

}
