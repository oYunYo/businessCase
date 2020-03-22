import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoitureComponent } from './add-voiture.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('AddVoitureComponent', () => {
  let component: AddVoitureComponent;
  let fixture: ComponentFixture<AddVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVoitureComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
