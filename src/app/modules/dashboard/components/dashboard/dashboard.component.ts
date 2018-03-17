import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  itemsArray: Array<any>;
  isloading: boolean;
  rotateIcon: boolean; //just for showing icon rotation in name column for sorting

  constructor(private _apiService: ApiService) {
    this.itemsArray = [];
    this.isloading = true;
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.isloading = true;
    this._apiService.getDetails().subscribe((data: any) => {
      this.itemsArray = [];
      this.itemsArray = [...this.itemsArray, ...data];
      this.isloading = false;
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  loadMoreData() {
    this.getDetails();
  }

  sortItems(event: any) {
    this.rotateIcon = !this.rotateIcon;
    this.getDetails();
  }
}
