import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fsm-concert-ui',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './concert-ui.component.html',
  styleUrls: ['./concert-ui.component.scss'],
})
export class ConcertUiComponent {
  @Input() title?: string;
  @Input() location?: string;
  @Input() date!: string;
}
