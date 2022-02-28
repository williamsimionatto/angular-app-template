import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CondominoParams } from "../../../model/condomino.model";
import { ConfirmationDialogService } from "../../../service/confirmation-dialog/confirmation-dialog";
import { ModalDialogService } from "../../../service/modal/modal-dialog.service";
import { NotificationService } from "../../../service/notification/notification.service";
import { ModalCondominosComponent } from "../add/modal-condominos.component";

@Component({
  selector: "app-detail-condomino",
  templateUrl: "./detail-condomino.component.html",
  styleUrls: [
    '../../../../assets/css/default.scss',
    '../../../../assets/css/master-detail.scss',
  ]
})
export class DetailCondominosComponent implements OnInit {
  condominos: CondominoParams[] = [
    {
      id: 4,
      apartamento: 101,
      condominio: 4,
      name: "João da Silva",
      cpf: "123.456.789-00",
      sindico: 'S',
      tipo: "Apartamento",
      numeroquartos: 2,
    },
    {
      id: 14,
      apartamento: 201,
      condominio: 4,
      name: "Maria da Silva",
      cpf: "987.654.321-00",
      sindico: 'N',
      tipo: "Apartamento",
      numeroquartos: 3,
    }, 
    {
      id: 24,
      apartamento: 202,
      condominio: 4,
      name: "Pedro da Silva",
      cpf: "654.321.987-00",
      sindico: 'N',
      tipo: "Apartamento",
      numeroquartos: 3
    }
  ]

  condominosSelected: CondominoParams[] = [];

  constructor(
    private notificationService: NotificationService,
    private confirmationDialogService: ConfirmationDialogService,
    private modalDialogService: ModalDialogService
  ) { }


  ngOnInit() { 
    this.condominos.sort((a: CondominoParams, b: CondominoParams) => {
      return a.apartamento > b.apartamento ? 1 : -1;
    })

  }

  onSubmit() {
    console.log('submit detail')
    console.log(this.modalDialogService.getCondomino())
  }

  openEmptyModal() {
    let modal = this.modalDialogService.open('Condôminos')
    modal.componentInstance.condominoEmmiter.subscribe(condomino => {
      if (condomino !== null)
        this.condominos.push(condomino);
    })
  }

  hasCondominoSelected() {
    return this.condominosSelected.length > 0;
  }

  enableCountLabel() {
    return this.condominosSelected.length > 1;
  }

  enableAddButton() {
    return this.condominosSelected.length >= 0;
  }

  showCountingRegisters() {
    return `${this.condominosSelected.length} registros`;
  }

  selectCondomino(condomino: CondominoParams) {
    if (this.condominosSelected.find(c => c.id === condomino.id)) {
      this.condominosSelected.splice(this.condominosSelected.indexOf(condomino), 1);
    } else {
      this.condominosSelected.push(condomino);
    }
  }

  isCondominoSelected(condomino: CondominoParams) {
    return this.condominosSelected.find(c => c.id === condomino.id);
  }

  removeItem = (array, itemToRemove) =>  array.filter(v => v !== itemToRemove);

  removeCondomino() {
    this.confirmationDialogService.confirm('Remover Condômino(s)', 'Deseja realmente este(s) Condômino(s)? Esta ação não poderá ser desfeita.', 'Remover', 'Cancelar', "lg")
      .then((confirmed) => {
        if (!confirmed) {
          return
        }

        if (this.condominosSelected.length === this.condominos.length) {
          this.condominos = [];
          this.condominosSelected = [];
        } else {
          this.condominosSelected.forEach(condomino => {
            this.condominos = this.removeItem(this.condominos, condomino);
            this.condominosSelected = this.removeItem(this.condominosSelected, condomino);
          })
        }
      }).catch(() => {
      })
  }
}
