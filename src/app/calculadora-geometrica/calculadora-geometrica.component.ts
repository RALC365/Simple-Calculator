import { Component, OnInit } from '@angular/core';
declare var math: any

@Component({
  selector: 'app-calculadora-geometrica',
  templateUrl: './calculadora-geometrica.component.html',
  styleUrls: ['./calculadora-geometrica.component.css']
})
export class CalculadoraGeometricaComponent implements OnInit {
  showAlert: boolean
  banFig: number
  errorMessage: string
  //Variables formulas
  base: number
  altura: number
  radio: number
  //triangulos equilatero - isoceles
  lado1: number
  lado2: number
  //variables resultados
  perimetro: number
  area: number

  constructor() {
    this.banFig = 0
    this.clean()
  }

  ngOnInit(): void {
  }

  setBanFig(ban: number) {
    if(parseInt(this.banFig+"") !== parseInt(ban+"")){
      this.clean()
    }else{
      this.area = null
      this.perimetro = null
    }
    this.banFig = ban
    console.log(ban)
  }

  result() {
    switch (this.banFig) {
      case 1:
        try {
          this.area = math.evaluate(`(${math.PI}) (${this.radio}^2)`)
          this.perimetro = math.evaluate(`${2 * math.PI * this.radio}`)
        } catch (error) {
          this.errorMessage = 'Error en el input del radio. Debe ser un número'
          this.showAlert = true
        }
        break
      case 2.1:
        try {
          this.area = this.base * this.base
          this.perimetro = this.base * 2
        } catch (error) {
          this.errorMessage = 'Error en el input de la base. Ingrese ser un número'
          this.showAlert = true
        }
        break
      case 2.2:
        try {
          this.area = this.base * this.altura
          this.perimetro = this.base + this.altura
        } catch (error) {
          this.errorMessage = 'Error en el input de la base. Ingrese ser un número'
          this.showAlert = true
        }
        break
      case 3.1:
        try {
          this.area = (this.base * this.altura)/2
          this.perimetro = this.base * 3
        } catch (error) {
          this.errorMessage = 'Error en el input de la base. Ingrese ser un número'
          this.showAlert = true
        }
        break
      case 3.2:
        try {
          this.area = (this.base * this.altura)/2
          this.perimetro = this.base + (this.lado1 * 2)
        } catch (error) {
          this.errorMessage = 'Error en el input de la base. Ingrese ser un número'
          this.showAlert = true
        }
        break
      case 3.3:
        try {
          this.area = (this.base * this.altura)/2
          this.perimetro = this.base + this.lado1 + this.lado2
        } catch (error) {
          this.errorMessage = 'Error en el input de la base. Ingrese ser un número'
          this.showAlert = true
        }
        break
      default:
        console.log("Happy Code!")
        break;
    }
    if(isNaN(this.area) || isNaN(this.perimetro)){
    this.area = 0
      this.perimetro = 0
    }
  }

  clean() {
    this.showAlert = false
    this.base = null
    this.altura = null
    this.radio = null
    this.lado1 = null
    this.lado2 = null
    this.perimetro = null
    this.area = null
    this.showAlert = false
    this.errorMessage = ''
  }

}
