import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraAritmetricaComponent } from './calculadora-aritmetrica/calculadora-aritmetrica.component';
import { CalculadoraGeometricaComponent } from './calculadora-geometrica/calculadora-geometrica.component';
import {NotFoundComponentComponent} from './not-found-component/not-found-component.component'

const routes: Routes = [
  {path: '', component: CalculadoraAritmetricaComponent},
  {path: 'geometrica', component: CalculadoraGeometricaComponent},
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
