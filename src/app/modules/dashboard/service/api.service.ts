import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {
    this.getDetails();
  }

  getDetails() {
    return this._http.get(
      "http://www.json-generator.com/api/json/get/ceyUZEgdHC"
    );
  }
}
