import { Component, OnInit } from '@angular/core';
declare var math:any


@Component({
  selector: 'app-calculadora-aritmetrica',
  templateUrl: './calculadora-aritmetrica.component.html',
  styleUrls: ['./calculadora-aritmetrica.component.css']
})
export class CalculadoraAritmetricaComponent implements OnInit {
  public formula: string = ''
  public showAlert: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  changeFormula() {
    this.showAlert = false
    console.log("cambio")
  }

  addFormula(simbol:string) {
    this.formula = this.formula + simbol
    console.log(this.formula)
    this.showAlert = false
  }

  result() {
    //transformaremos √ -> sqrt()
    var splitA = this.formula.split('√')
    let equationT = splitA[0]
    for (let j = 1; j < splitA.length; j++) {
      var temp = splitA[j]
      if (temp.substring(0, 1) === '(') {
        var ban = 0
        var pos = 0
        for (let i = 0; i < temp.length; i++) {
          if (temp.charAt(i) === '(') {
            ban++
          } else if (temp.charAt(i) === ')') {
            ban--
            if (ban === 0) {
              pos = i
              break
            }
          }
        }
        temp = 'sqrt(' + temp.substring(0, pos) + ')' + temp.substring(pos, temp.length)
      } else {
        var pos = 0
        for (let i = 0; i < temp.length; i++) {
          if (temp.charAt(i) === '+' || temp.charAt(i) === '-' || temp.charAt(i) === '*' ||
            temp.charAt(i) === '/' || temp.charAt(i) === ')' || temp.charAt(i) === '^') {
            pos = i
            break
          }
        }
        //√ es la última operación de la ecuación
        if (pos === 0) {
          temp = 'sqrt(' + temp + ')'
        } else {
          temp = 'sqrt(' + temp.substring(0, pos) + ')' + temp.substring(pos, temp.length)
        }
      }
      equationT += temp
    }

    console.log("Final")
    console.log(equationT)
    try {
      this.formula = math.evaluate(equationT)
      this.showAlert = false
    } catch (error) {
      this.showAlert = true
    }
  }
}
