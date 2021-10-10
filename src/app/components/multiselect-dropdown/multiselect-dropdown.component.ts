import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "et-multiselect-dropdown",
  templateUrl: "./multiselect-dropdown.component.html",

  styleUrls: ["./multiselect-dropdown.component.css"],
})
export class MultiselectDropdownComponent implements OnInit {
  @Input() dropdownList: Array<any> = [];
  @Input() selectedItems: Array<any> = [];
  dropdownSettings: IDropdownSettings = {};
  @Input() onItemSelect: (args: any) => void;
  ngOnInit() {
    console.log("from child", this.selectedItems);
    /*     this.dropdownList = [
      { item_id: 1, item_text: "Accounts" },
      { item_id: 2, item_text: "Cards" },
      { item_id: 3, item_text: "CDM" },
      { item_id: 4, item_text: "Claims" },
      { item_id: 5, item_text: "COODS" },
      { item_id: 4, item_text: "Inventory" },
      { item_id: 5, item_text: "Policy" },
    ]; */
    //this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  constructor() {}
  /*   onItemSelect(item: any) {
    console.log(item);
    this.selectedItems.push(item);
    console.log(this.selectedItems);
  } */
  onSelectAll(items: any) {
    console.log(this.selectedItems);
  }
}
