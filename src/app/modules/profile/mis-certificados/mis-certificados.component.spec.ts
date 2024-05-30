import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCertificadosComponent } from './mis-certificados.component';

describe('MisCertificadosComponent', () => {
  let component: MisCertificadosComponent;
  let fixture: ComponentFixture<MisCertificadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisCertificadosComponent]
    });
    fixture = TestBed.createComponent(MisCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
