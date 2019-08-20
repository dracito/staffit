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
        {headerName: 'Priorité', field: 'priority', sortable: true, filter: true },
        {headerName: 'Nom', field: 'name', sortable: true, filter: true },
        {headerName: 'Prénom', field: 'firstname', sortable: true, filter: true },
        {headerName: 'Métiers', field: 'skills', sortable: true, filter: true },
        {headerName: 'Exp.', field: 'xp', sortable: true, filter: true },
        {headerName: 'Disponible le', field: 'availability', sortable: true, filter: true },
        {headerName: 'Action', field: 'action'}
    ];

    private rowData = [
        { status: 'Préqualifier', name: 'DOE', firstname: "John", skills: "C++", xp: "1", availability: "1/08/2019", piste: "Projet A", priority:"P0", action: "" },
        { status: 'Faire PDC A', name: 'MARTIN', firstname: "Jean", skills: "JEE", xp: "3", availability: "1/09/2019", piste: "Projet B", action: "" },
        { status: 'Cloturer succès', name: 'DURAND', firstname: "Cécile", skills: "SwARC", xp: "8", availability: "1/10/2019", piste: "Projet A", priority:"P1", action: "" },
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