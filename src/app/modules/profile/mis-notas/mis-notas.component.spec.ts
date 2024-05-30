import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisNotasComponent } from './mis-notas.component';

describe('MisNotasComponent', () => {
  let component: MisNotasComponent;
  let fixture: ComponentFixture<MisNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisNotasComponent]
    });
    fixture = TestBed.createComponent(MisNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
