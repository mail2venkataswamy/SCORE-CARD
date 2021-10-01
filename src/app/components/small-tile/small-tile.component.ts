import { Component, OnInit, Inject, Input } from "@angular/core";

@Component({
  selector: "et-small-tile",
  templateUrl: "./small-tile.component.html",
  styleUrls: ["./small-tile.component.css"],
})
export class SmallTileComponent implements OnInit {
  application = "";
  @Input() title: string | undefined;
  @Input() applicationTilesData: Array<any> = [];

  constructor() {
    this.application = "swamy";
  }

  ngOnInit(): void {}
}
