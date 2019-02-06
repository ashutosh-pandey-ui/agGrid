import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AgGridNg2 } from "ag-grid-angular";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // export class AppComponent {
  @ViewChild("agGrid") agGrid: AgGridNg2;

  title = "my-ag-grid-table-demo";
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private autoGroupColumnDef;
  private defaultColDef;
  private rowSelection;
  private rowGroupPanelShow;
  private pivotPanelShow;
  private rowData: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        sortable: true,
        filter: true,
        checkboxSelection: function(params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: function(params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        resizable: true
      },
      {
        headerName: "Age",
        field: "age",
        sortable: true,
        filter: true
      },
      {
        headerName: "Country",
        field: "country",
        sortable: true,
        filter: true
      },
      {
        headerName: "Sport",
        field: "sport",
        sortable: true,
        filter: true
      },
      {
        headerName: "Year",
        field: "year",
        sortable: true,
        filter: true
      },
      {
        headerName: "Date",
        field: "date",
        sortable: true,
        filter: true
      },
      {
        headerName: "Gold",
        field: "gold",
        sortable: true,
        filter: true
      },
      {
        headerName: "Silver",
        field: "silver",
        sortable: true,
        filter: true
      },
      {
        headerName: "Bronze",
        field: "bronze",
        sortable: true,
        filter: true
      },
      {
        headerName: "Total",
        field: "total",
        sortable: true,
        filter: true
      }
    ];

    this.autoGroupColumnDef = {
      headerName: "Group",
      width: 200,
      field: "athlete",
      valueGetter: function(params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: { checkbox: true }
    };
    this.defaultColDef = {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true
    };
    this.rowSelection = "multiple";
    this.rowGroupPanelShow = "always";
    this.pivotPanelShow = "always";
  }

  ngOnInit() {
    // this.rowData = this.http.get("https://api.myjson.com/bins/15psn9");
    // this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
    this.rowData = this.http.get(
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
    );
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.athlete + " " + node.age)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}

// onclick(dataa){

// let obj={
//   name:dataa.name,
//   password:dataa.password
// }

// this.service.getData(obj).subscribe(respones=>{
//   console.log(response)
// })
// }
