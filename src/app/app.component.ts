import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AgGridNg2 } from "ag-grid-angular";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild("agGrid") agGrid: AgGridNg2;

  title = "my-ag-grid-table-demo";

  // new agGrid.Grid(gridDiv, gridOptions);

  //   columnDefs = [
  //     {headerName: "Athlete", field: "athlete", width: 150, filterParams:{newRowsAction: 'keep'},
  //         checkboxSelection: function (params) {
  //             // we put checkbox on the name if we are not doing grouping
  //             return params.columnApi.getRowGroupColumns().length === 0;
  //         },
  //         headerCheckboxSelection: function (params) {
  //             // we put checkbox on the name if we are not doing grouping
  //             return params.columnApi.getRowGroupColumns().length === 0;
  //         }
  //     },
  //     {headerName: "Age", field: "age", width: 90, filterParams:{newRowsAction: 'keep'}},
  //     {headerName: "Country", field: "country", width: 120, filterParams:{newRowsAction: 'keep'}},
  //     {headerName: "Year", field: "year", width: 90, filterParams:{newRowsAction: 'keep'}},
  //     {headerName: "Date", field: "date", width: 110, filterParams:{newRowsAction: 'keep'}},
  //     {headerName: "Sport", field: "sport", width: 110, filterParams:{newRowsAction: 'keep'}},
  //     {headerName: "Gold", field: "gold", width: 100, filterParams:{newRowsAction: 'keep'}},
  //     {headerName: "Silver", field: "silver", width: 100, filterParams:{newRowsAction: 'keep'}},
  //     {headerName: "Bronze", field: "bronze", width: 100, filterParams:{newRowsAction: 'keep'}},
  //     {headerName: "Total", field: "total", width: 100, filterParams:{newRowsAction: 'keep'}}
  // ];
  //   autoGroupColumnDef = {
  //     headerName: "Group",
  //     width: 10,
  //     field: 'athlete',
  //     valueGetter: function(params) {
  //         if (params.node.group) {
  //             return params.node.key;
  //         } else {
  //             return params.data[params.colDef.field];
  //         }
  //     },
  //     headerCheckboxSelection: true,
  //     // headerCheckboxSelectionFilteredOnly: true,
  //     cellRenderer:'agGroupCellRenderer',
  //     cellRendererParams: {
  //         checkbox: true
  //     }
  // };

  //   gridOptions = {
  //     defaultColDef:{
  //         editable: true,
  //         enableRowGroup:true,
  //         enablePivot:true,
  //         enableValue:true,
  //         sortable:true,
  //         resizable: true,
  //         filter: true
  //     },
  //     suppressRowClickSelection: true,
  //     groupSelectsChildren: true,
  //     debug: true,
  //     rowSelection: 'multiple',
  //     rowGroupPanelShow: 'always',
  //     pivotPanelShow: 'always',
  //     enableRangeSelection: true,
  //     columnDefs: this.columnDefs,
  //     pagination: true,
  //     autoGroupColumnDef: this.autoGroupColumnDef
  // };

  ////////////////////////////////////////
  columnDefs = [
    {
      headerName: "Athlete",
      field: "athlete",
      sortable: true,
      filter: true,
      checkboxSelection: true,
      pagination: true
    },
    { headerName: "Age", field: "age", sortable: true, filter: true },
    { headerName: "Country", field: "country", sortable: true, filter: true },
    { headerName: "Sport", field: "sport", sortable: true, filter: true },
    { headerName: "Year", field: "year", sortable: true, filter: true },
    { headerName: "Date", field: "date", sortable: true, filter: true },
    { headerName: "Gold", field: "gold", sortable: true, filter: true },
    { headerName: "Silver", field: "silver", sortable: true, filter: true },
    { headerName: "Bronze", field: "bronze", sortable: true, filter: true },
    { headerName: "Total", field: "total", sortable: true, filter: true }
  ];

  rowData: any;
  constructor(private http: HttpClient) {}

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

  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
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
