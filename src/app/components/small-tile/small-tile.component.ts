import { Component, OnInit, Inject, Input } from "@angular/core";

interface Tiles {
  name: string;
  count: number;
}

interface SmallTiles {
  smallTilesData: Array<Tiles>;
}
interface Execsummary {}

@Component({
  selector: "et-small-tile",
  templateUrl: "./small-tile.component.html",
  styleUrls: ["./small-tile.component.css"],
})
export class SmallTileComponent implements OnInit {
  application = "";
  @Input() title: string | undefined;
  @Input() smallTilesData: Array<any> = [];
  @Input() executiveSummaryObject: SmallTiles[] = [];

  constructor() {
    this.application = "swamy";
  }

  ngOnInit(): void {}
}
