import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcertFeatureComponent } from './concert-feature.component';

describe('ConcertFeatureComponent', () => {
  let component: ConcertFeatureComponent;
  let fixture: ComponentFixture<ConcertFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertFeatureComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
