import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ConcertService } from '@full-stack-mono/concert/data-access';
import { ConcertUiComponent } from '@full-stack-mono/concert/ui';

@Component({
  selector: 'fsm-concert-feature',
  standalone: true,
  imports: [AsyncPipe, NgFor, ConcertUiComponent],
  templateUrl: './concert-feature.component.html',
  styleUrls: ['./concert-feature.component.scss'],
})
export class ConcertFeatureComponent {
  private readonly concertService = inject(ConcertService);

  foo = [];
  concerts$ = this.concertService.concerts$;

  loadConcerts() {
    this.concertService.loadConcerts();
  }
}
