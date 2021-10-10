import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import metricGraphData from "src/assets/json/summary-page/dq-metric-graph.json";
@Component({
  selector: "et-error-details-metric-grid",
  templateUrl: "./error-details-metric-grid.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./error-details-metric-grid.component.css"],
  //template: '<div [innerHTML]="someHtmlCode"></div>',
})
export class ErrorDetailsMetricGridComponent implements OnInit {
  @Input() showSection3: boolean = false;
  @Input() element1: string = "";
  @Input() metricGraphData = metricGraphData;

  constructor() {}

  ngOnInit(): void {}
  stringToHTML = (str: string) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body;
  };

  createElementFromHTML = (htmlString: string) => {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
  };

  removeSection3() {
    var sec3 = document.createElement("div");
    sec3.id = "section3";
    sec3.innerHTML = `<div class="age">
    <div class="ageLabel">Age</div>
    <div
      class="ageValue"
      [ngStyle]="{
        width: ${metricGraphData.cdeScore.age} - 25 + '%',
        background: ${metricGraphData.cdeScore.age} < 100 ? 'red' : 'green'
      }"
    >
      ${metricGraphData.cdeScore.age}%
    </div>
  </div>
  <div class="creditScore">
    <div class="creditScoreLabel">CreditScore</div>

    <div
      class="creditScoreValue"
      [ngStyle]="{
        width: ${metricGraphData.cdeScore.creditScore} - 25 + '%',
        background:
        ${metricGraphData.cdeScore.creditScore} < 100 ? 'red' : 'green'
      }"
    >
      ${metricGraphData.cdeScore.creditScore}%
    </div>
  </div>
  <div class="rowNumber">
    <div class="rowNumberLabel">RowNumber</div>
    <div
      class="rowNumberValue"
      [ngStyle]="{
        width: ${metricGraphData.cdeScore.rowNumber} - 25 + '%',
        background:
        ${metricGraphData.cdeScore.rowNumber} < 100 ? 'red' : 'green'
      }"
    >
      ${metricGraphData.cdeScore.rowNumber}%
    </div>
  </div>
  <div class="customerId">
    <div class="customerIdLabel">CustomerId</div>
    <div
      class="customerIdValue"
      [ngStyle]="{
        width: ${metricGraphData.cdeScore.customerId} - 25 + '%',
        background:
        ${metricGraphData.cdeScore.customerId} < 100 ? 'red' : 'green'
      }"
    >
      ${metricGraphData.cdeScore.customerId}%
    </div>
  </div>
  <div class="isActiveMember">
    <div class="isActiveMemberLabel">IsActiveMember</div>
    <div
      class="isActiveMemberValue"
      [ngStyle]="{
        width: ${metricGraphData.cdeScore.isActiveMember} - 25 + '%',
        background:
          ${metricGraphData.cdeScore.isActiveMember} < 100
            ? 'red'
            : 'green'
      }"
    >
      ${metricGraphData.cdeScore.isActiveMember}%
    </div>
  </div>`;

    /*  sec3.innerHTML = `<div class="section3Label"></div>
      <div class="section3Metric">
        <div class="age">
          <div class="label">Age</div>
          <div class="value">${metricGraphData.cdeScore.age}</div>
        </div>
        <div class="creditScore">
          <div class="label">CreditScore</div>

          <div class="value">
            ${metricGraphData.cdeScore.creditScore}
          </div>
        </div>
        <div class="rowNumber">
          <div class="label">RowNumber</div>
          <div class="value">${metricGraphData.cdeScore.rowNumber}</div>
        </div>
        <div class="customerId">
          <div class="label">CustomerId</div>
          <div class="value">${metricGraphData.cdeScore.customerId}</div>
        </div>
        <div class="isActiveMember">
          <div class="label">IsActiveMember</div>
          <div class="value">
            ${metricGraphData.cdeScore.isActiveMember}
          </div>
        </div>
      </div>`; */

    this.showSection3 = !this.showSection3;
    if (this.showSection3) {
      let ele = document.getElementById("section3");
      ele?.parentNode?.removeChild(ele);
      let section1 = document.getElementById("section1");
      let section2 = document.getElementById("section2");
      section1?.setAttribute("style", "width:50%");
      section2?.setAttribute("style", "width:50%");
    } else {
      let div = document.getElementById("section2");
      //let div = document.getElementsByClassName("section2")[0];
      div?.insertAdjacentElement("afterend", sec3);
    }
  }
}
