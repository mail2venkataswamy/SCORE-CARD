import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: "et-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [80, 82], label: "DS Score Overtime" },
  ];
  public lineChartLabels: Label[] = ["Sep 23 12 AM", "Sep 27 12 AM"];
  public lineChartOptions: ChartOptions & { annotation?: any } = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: "white",
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = "line";
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit(): void {}
}
