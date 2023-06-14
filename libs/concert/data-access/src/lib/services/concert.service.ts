import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Concert } from '@full-stack-mono/concert/shared';
import { sortDates } from '@full-stack-mono/concert/utility';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConcertService {
  concerts$ = new BehaviorSubject<Concert[]>([]);

  private readonly http = inject(HttpClient);

  loadConcerts() {
    this.http
      .get<Concert[]>('/api/concert/all')
      .pipe(
        tap(concerts => {
          concerts = concerts.sort(sortDates);
          this.concerts$.next(concerts);
        }),
      )
      .subscribe();
  }
}
