import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcertDataAccessComponent } from './concert-data-access.component';

describe('ConcertDataAccessComponent', () => {
  let component: ConcertDataAccessComponent;
  let fixture: ComponentFixture<ConcertDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
