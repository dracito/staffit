import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { formatDate } from "@angular/common";
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  private people;
  rowData;
  private gridApi;
  private gridColumnApi;
  columnDefs = [
        {headerName: 'Personne', field: 'name', sortable: true, filter: true,
          valueGetter: function(params) {
            return params.data.name + " " + params.data.firstname + " " + params.data.$key;
          },
          cellRenderer: function(params) {
            return '<a href="/people/' + params.data.$key + '">' + params.value +'</a>'
          }
        },
        {headerName: 'Compétences', field: 'skills', sortable: true, filter: true },
        {headerName: 'XP (années)', field: 'xp', sortable: true, filter: true },
        {headerName: 'Disponible le', field: 'availability', sortable: true, filter: true,
          cellRenderer: function(params){
            return formatDate(params.data.availability.toDate(), 'dd/MM/yy', 'en-US');
          }
        },
        {headerName: 'Piste', field: 'piste', sortable: true, filter: true },
        {headerName: 'Status', field: 'status', sortable: true, filter: true },
  ];

  constructor(private personService: PersonService){ }

  ngOnInit() {
      this.rowData = this.getPeople();
  }
  
  getPeople() {
    this.personService.getPeopleList().subscribe(data => {
      this.people = data.map(e => {
        return {
          /*key: e.payload.doc.id,
          ...e.payload.doc.data()
          */
        } as Person;
      })
    });
    //return this.personService.getPeopleList();
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