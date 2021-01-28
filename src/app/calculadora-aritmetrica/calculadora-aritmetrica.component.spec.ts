import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraAritmetricaComponent } from './calculadora-aritmetrica.component';

describe('CalculadoraAritmetricaComponent', () => {
  let component: CalculadoraAritmetricaComponent;
  let fixture: ComponentFixture<CalculadoraAritmetricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraAritmetricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraAritmetricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
