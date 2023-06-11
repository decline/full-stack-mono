import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcertUtilityComponent } from './concert-utility.component';

describe('ConcertUtilityComponent', () => {
  let component: ConcertUtilityComponent;
  let fixture: ComponentFixture<ConcertUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertUtilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
