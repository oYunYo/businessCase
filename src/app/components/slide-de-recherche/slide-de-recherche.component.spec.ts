import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDeRechercheComponent } from './slide-de-recherche.component';

describe('SlideDeRechercheComponent', () => {
  let component: SlideDeRechercheComponent;
  let fixture: ComponentFixture<SlideDeRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideDeRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideDeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
