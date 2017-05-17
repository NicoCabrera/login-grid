import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AppService {

  constructor(private http: Http) {

  }

  getAllData() {
    return this.http.get("http://localhost:80/slim3/table/persona")
      .toPromise()
      .then(this.getJSONResponseData)
      .catch(this.printErrorMessage);
  }

  validateUser(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/slim3/table/persona/user", data, options).toPromise()
      .then((response:Response)=>{
        return response.text();
      })
      .catch(this.printErrorMessage);
  }

  printErrorMessage(error) {
    return error;
  }
  getJSONResponseData(response: Response) {
    return response.json();
  }

  insert(newItem) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post("http://localhost:80/slim3/table/persona/insert", newItem, options)
      .toPromise()
      .then(() => console.log("Usuario fué dado de alta"))
      .catch((error) => console.log(error));
  }

  update(itemToUpdate) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put("http://localhost:80/slim3/table/persona/update", itemToUpdate, options).toPromise()
      .then(() => console.log("Item actualizado"))
      .catch((error) => console.log(error));
  }

  delete(itemId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete("http://localhost:80/slim3/table/persona/delete/" + itemId, options).toPromise()
      .then(() => console.log("Item eliminado"))
      .catch((error) => console.log(error));
  }



}