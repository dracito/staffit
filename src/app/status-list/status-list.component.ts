import { Component } from '@angular/core';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent {
  private title = 'status'

  private gridApi;
  private gridColumnApi;
  private columnDefs = [
        {headerName: 'Status', field: 'status', sortable: true, filter: true },
        {headerName: 'Piste', field: 'piste', sortable: true, filter: true },
        {headerName: 'Nom', field: 'name', sortable: true, filter: true },
        {headerName: 'Prénom', field: 'firstname', sortable: true, filter: true },
        {headerName: 'Métiers', field: 'metiers', sortable: true, filter: true },
        {headerName: 'Exp.', field: 'xp', sortable: true, filter: true },
        {headerName: 'Dispo le', field: 'dispo', sortable: true, filter: true },
        {headerName: 'Action', field: 'action'}
    ];

    private rowData = [
        { status: 'Préqualifier', name: 'DOE', firstname: "John", metiers: "C++", xp: "1", dispo: "1/08/2019", piste: "Projet A", action: "" },
        { status: 'Faire PDC A', name: 'MARTIN', firstname: "Jean", metiers: "JEE", xp: "3", dispo: "1/09/2019", piste: "Projet B", action: "" },
        { status: 'Cloturer succès', name: 'DURAND', firstname: "Cécile", metiers: "SwARC", xp: "8", dispo: "1/10/2019", piste: "Projet A", action: "" },
    ];
  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.autoSizeAll();
  }
}