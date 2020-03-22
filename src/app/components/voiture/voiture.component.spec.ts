import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureComponent } from './voiture.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { from } from 'rxjs';

describe('VoitureComponent', () => {
  let component: VoitureComponent;
  let fixture: ComponentFixture<VoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureComponent ],
      imports: [
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
