import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraAritmetricaComponent } from './calculadora-aritmetrica/calculadora-aritmetrica.component';
import { CalculadoraGeometricaComponent } from './calculadora-geometrica/calculadora-geometrica.component';

const routes: Routes = [
  {path: 'aritmetrica', component: CalculadoraAritmetricaComponent},
  {path: 'geometrica', component: CalculadoraGeometricaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
