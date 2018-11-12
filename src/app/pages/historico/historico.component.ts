import { AdminService } from './../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  public historicos;

  constructor(
    private _adminService: AdminService
  ) { }

  ngOnInit() {
    this._adminService.getHistorico('historico.json')
      .subscribe(response => {
        this.historicos = response;
        console.log(response);
      });
  }

}
