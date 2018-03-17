import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  isItemSelected: boolean;

  constructor() {}

  ngOnInit() {}
  selectItem(event: any) {
    this.isItemSelected = !this.isItemSelected;
  }
}
