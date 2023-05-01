import { Component } from '@angular/core';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) { }

}
