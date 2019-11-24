import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  private rowData: any;
  private gridApi;
  private gridColumnApi;
  private columnDefs = [
        {
          headerName: 'Personne', field: 'name', sortable: true, filter: true,
          valueGetter: function(params) {
            return params.data.name + " " + params.data.firstname;
          },
          cellRenderer: function(params) {
            var key = params.data.key;
            return '<a href="/people/' + key + '">' + params.value +'</a>'
          }
        },
        {headerName: 'Métiers', field: 'skills', sortable: true, filter: true },
        {headerName: 'Piste', field: 'piste', sortable: true, filter: true },
        {headerName: 'Status', field: 'status', sortable: true, filter: true },
        {headerName: 'Exp.', field: 'xp', sortable: true, filter: true },
        {headerName: 'Disponible le', field: 'availability', sortable: true, filter: true },
  ];

  constructor(private personService: PersonService){ }

  ngOnInit() {
      this.rowData = this.getPeople();
  }
  
  getPeople() {
    return this.personService.getPeopleList();
  }

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