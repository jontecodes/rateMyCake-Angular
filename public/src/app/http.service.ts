import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  // function that makes post with object received from class file
  addCake(cake){
    console.log('Added new cake', cake);
    return this._http.post('/create', cake);
  }

  // function to get all cakes
  allCakes(){
    return this._http.get('/cakes');
  }
  // add comment post method
  addComment(id, comment){
    console.log('Whats an id?', id);
    console.log('Add new comment', comment);
    return this._http.post(`/create-comment/${id}`, comment);
  }
  // edit given cake
  editCake(cake: any){
    console.log('Edit Cake', cake);
    return this._http.put(`/cakes/edit/${cake._id}`, cake);
  }
  // get single cake
  getSingleCake(id){
    return this._http.get(`/cakes/${id}`);
  }

}
