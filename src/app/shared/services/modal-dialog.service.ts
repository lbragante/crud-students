import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {

  constructor(private modalService: BsModalService) { }

  openConfirmModal(name: string, id: number): BsModalRef {
    const initialState = {
      name: name,
      id: id
    };
    return this.modalService.show(ModalDialogComponent, { initialState });
  }
}
