function range_vision(num){
    let arrayNum = []
    
    for (const i of num.toString()) {
        arrayNum.push(Number(i))
    }
    
    let tieneUno = false

    arrayNum.forEach((e)=>{
        if(e==1){
            tieneUno = true
        }
    })

    if(tieneUno){
        /*let ubicacionUnos = []
        for(let i = 0; i > arrayNum.length; i++){
            if(arrayNum[i]==1){
                ubicacionUnos.push(i)
            }
        }*/

        let objNum = []

        function veNumIzq(e,u, num){
            let objNumizq= []
            for (let index = u-1; index > u-num-1 ; index--) {
                if(e[index] != undefined){
                    objNumizq.push(e[index])
                }
            }
            return objNumizq
        }

        function veNumDer(e,u, num){
            let objNumder= []
            for (let index = u+1; index < u+num+1 ; index++) {
                if(e[index] != undefined){
                    objNumder.push(e[index])
                }
            }
            return objNumder
        }

        

        for (let index = 0; index < arrayNum.length; index++) {
            const element = arrayNum[index];
            let vVision = 0
            veNumIzq(arrayNum,index,element).forEach((e)=> vVision= vVision+e)
            veNumDer(arrayNum,index,element).forEach((e)=> vVision= vVision+e)
            /*se que las propiedades ve_num_izq y ve_num_der no eran necesarias pero las ise para orientarme en la consola y saber con que numeros estaba trabajando, 
            y lo dejo para que vea que los metodos que use*/
            objNum.push({
                numero: element,
                ubicacion: index,
                ve_num_izq: veNumIzq(arrayNum,index,element),
                ve_num_der: veNumDer(arrayNum,index,element),
                valor_vision: vVision
            })
            
        }
        let menorNum = []
        for (const iterator of objNum) {
            if(menorNum.length == 0){
                menorNum.push(iterator)
            }else if(iterator.valor_vision < menorNum[0].valor_vision){
                menorNum = []
                menorNum.push(iterator)
            }else if(iterator.valor_vision == menorNum[0].valor_vision){
                menorNum.push(iterator)
            }
        }
        let resultadoFinal = false
        menorNum.forEach((e)=>{
            if(e.numero == 1){
                resultadoFinal = true
            }
        })
        //console.log(menorNum)

        //console.log(objNum)
        
        
        //console.log(arrayNum)

        return resultadoFinal


    }else{
        return false
    }



    //console.log(tieneUno)
}

