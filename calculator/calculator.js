angular.module('angular-spa.calculator', [])

.controller('CalculatorController', function ($scope) {

  $scope.formula=''
  $scope.result = function() {
        //transformaremos √ -> sqrt()
        var splitA = $scope.formula.split('√')
        let equationT = splitA[0]
        for(let j = 1; j < splitA.length; j++){
            var temp = splitA[j]
            if(temp.substring(0,1) === '('){
                var ban = 0
                var pos = 0
                for(let i = 0; i < temp.length; i++){
                    if(temp.charAt(i) === '('){
                        ban++
                    }else if(temp.charAt(i) === ')'){
                        ban--
                        if(ban === 0){
                            pos = i
                            break
                        }
                    }
                }
                temp = 'sqrt(' + temp.substring(0,pos) + ')' + temp.substring(pos, temp.length)
            }else{
                var pos = 0
                for(let i = 0; i < temp.length; i++){
                    if(temp.charAt(i) === '+' || temp.charAt(i) === '-' || temp.charAt(i) === '*' ||
                    temp.charAt(i) === '/' || temp.charAt(i) === ')' || temp.charAt(i) === '^' ){
                        pos = i
                        break
                    }
                }
                //√ es la última operación de la ecuación
                if(pos === 0){
                    temp = 'sqrt(' + temp + ')'
                }else{
                    temp = 'sqrt(' + temp.substring(0,pos) + ')' + temp.substring(pos, temp.length)
                }
            }
            equationT += temp
        }
        
        console.log("Final")
        console.log(equationT)
        try {
            $scope.formula = math.evaluate(equationT)
        } catch (error) {
            $scope.formula = "Sintax Error"
        }
       };
       $scope.name = 'HomeController';
   });
