import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  title = 'status'

  columnDefs = [
        {
          headerName: 'Profil', field: 'name', sortable: true, filter: true,
          valueGetter: function(params) {
            return params.data.name + " " + params.data.firstname;
          },
          cellRenderer: function(params) {
            var id = params.data.personId; //TODO
            return '<a href="/people/' + id + '">' + params.value+'</a>'
          }
        },
        {headerName: 'Métiers', field: 'skills', sortable: true, filter: true },
        {headerName: 'Piste', field: 'piste', sortable: true, filter: true },        
        {headerName: 'Status', field: 'status', sortable: true, filter: true },
        {headerName: 'Priorité', field: 'priority', sortable: true, filter: true },        
        {headerName: 'Exp.', field: 'xp', sortable: true, filter: true },
        {headerName: 'Disponible le', field: 'availability', sortable: true, filter: true },
        {headerName: 'Action', field: 'action'}
        
    ];
  
  rowData: any;

  constructor(private http: HttpClient)
  {   
  }

  ngOnInit() {
      this.rowData = this.http.get('/assets/status.json');
  }
  
}