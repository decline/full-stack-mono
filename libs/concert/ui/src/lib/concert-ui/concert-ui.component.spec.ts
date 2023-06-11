import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcertUiComponent } from './concert-ui.component';

describe('ConcertUiComponent', () => {
  let component: ConcertUiComponent;
  let fixture: ComponentFixture<ConcertUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
