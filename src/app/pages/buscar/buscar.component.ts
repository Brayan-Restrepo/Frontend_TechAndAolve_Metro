import { InvitadoService } from './../../services/invitado/invitado.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public estaciones;
  public formRutas: FormGroup;

  constructor(
    private _invitadoService: InvitadoService
    ) { }

  ngOnInit() {

    this._invitadoService.getEstasiones('underGroundStations')
      .subscribe(responce => {
        this.estaciones = responce;
      });

    this.formRutas = new FormGroup({
      'estacionOrigen': new FormControl('', Validators.required),
      'estacionDestino': new FormControl('', Validators.required)
    });

  }

  public buscarRuta(): void {
    if (!this.formRutas.valid) {
      swal({
        type: 'warning',
        title: 'Error',
        text: 'Ingrese las estaciones para continuar',
        confirmButtonText: 'ACEPTAR',
      });
    } else if (this.formRutas.value.estacionOrigen === this.formRutas.value.estacionDestino) {
      swal({
        type: 'warning',
        title: 'Error',
        text: 'La estación origen debe de ser distinta a la estación destino',
        confirmButtonText: 'ACEPTAR',
      });
    } else {
      console.log(this.formRutas.valid);
      console.log(this.formRutas.value.estacionOrigen);
      console.log(this.formRutas.value.estacionDestino);
    }
  }
}
