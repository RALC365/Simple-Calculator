import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraGeometricaComponent } from './calculadora-geometrica.component';

describe('CalculadoraGeometricaComponent', () => {
  let component: CalculadoraGeometricaComponent;
  let fixture: ComponentFixture<CalculadoraGeometricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraGeometricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraGeometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
