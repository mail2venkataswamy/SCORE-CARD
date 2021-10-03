import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "et-simpledropdown",
  templateUrl: "./simpledropdown.component.html",
  styleUrls: ["./simpledropdown.component.css"],
})
export class SimpledropdownComponent implements OnInit {
  @Input() options: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}
}
