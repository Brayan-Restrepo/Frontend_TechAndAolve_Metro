import { Component, OnInit } from '@angular/core';
import { InvitadoService } from '../../services/invitado/invitado.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(
    private _invitadoService: InvitadoService
  ) { }

  ngOnInit() {
    this._invitadoService.getEstasiones('.json')
      .subscribe(arg => console.log(arg));

  }

}
