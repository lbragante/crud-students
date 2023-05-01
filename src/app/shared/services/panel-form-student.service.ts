import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface PanelState {
  isOpen: boolean;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PanelFormStudentService {

  private panelState = new BehaviorSubject<PanelState>({ isOpen: false });

  constructor() { }

  openPanel(id?: number): void {
    this.panelState.next({ isOpen: true, id });
  }

  closePanel(): void {
    this.panelState.next({ isOpen: false });
  }

  getPanelState(): Observable<PanelState> {
    return this.panelState.asObservable();
  }
  
}
