import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiquesDeConfidentialiteComponent } from './politiques-de-confidentialite.component';

describe('PolitiquesDeConfidentialiteComponent', () => {
  let component: PolitiquesDeConfidentialiteComponent;
  let fixture: ComponentFixture<PolitiquesDeConfidentialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitiquesDeConfidentialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitiquesDeConfidentialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
