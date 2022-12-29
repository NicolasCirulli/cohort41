const mentores = [
    {
        nombre: 'Nicolás Catriel',
        edad : 28,
        apellido: 'Cirulli',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React'],
    },
    {
        nombre: 'Lucrecia',
        edad : 27,
        apellido: 'Gillone',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React'],
    },
    {
        nombre: 'Florencia',
        edad : 22,
        apellido: 'Puñales',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Vue']
    },
    {
        nombre: 'Camila',
        edad : 28,
        apellido: 'Domato',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Bootstrap']
    },
    {
        nombre: 'Kevin',
        edad : 30,
        apellido: 'Darnet',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'JavaScript']
    },
    {
        nombre: 'Guillermo',
        edad : 26,
        apellido: 'Bonutto',
        rol: 'Mentor/a',
        especialidad : ['Java', 'Vue']
    },
]

const nicolas = {
    nombres : 'Nicolas Catriel',
    apellido : 'Cirulli',
    edad : 28, 
    mascotas: [ 'Kugi', 'Nila'],
    mentor : true,
    saludar: function(){
        console.log( 'Hola soy ' + this.nombres )
        console.log( this )
    }
}


// funciones flecha
const suma = (num1, num2) => num1 + num2

const resta = (num1, num2) => num1 - num2

const saludar = nombre => console.log( `Hola ${nombre}` )

const multiplicar = function(num1, num2 ){
    return num1 * num2
}
/* console.log( suma(5,5) ) */

// this
/* nicolas.saludar() */

// funciones orden superior

function calculadora( operacion, valor1, valor2 ){
    console.log(  operacion( valor1, valor2 )  )
}

/* calculadora( (num1, num2) => num1 + num2 , 10, 20 )

calculadora( resta, 20, 10 )

calculadora( multiplicar, 20, 10 )

calculadora( function(num1, num2){
    return num1 / num2
} , 10 , 2  ) */






// metodos de array 

// forEach



/* mentores.forEach(  mentor  => {
    console.log( mentor.nombre )
} ) */





// map
let nombresMentores = mentores.map( mentor => {
    return `${mentor.nombre} ${mentor.apellido}`
} )

let numeros = [1,2,3,4,5,6,7,8,9,10]

const tablaDel7 = numeros.map( numero => numero * 7 )




// filter

const nombresQueTenganN = nombresMentores.filter( nombre => nombre.toLowerCase().includes( "n" ) )

/* console.log( nombresQueTenganN ) */

const nombresConN = mentores.filter( mentor => mentor.nombre.startsWith("N") )
    .map( mentor => mentor.nombre.toUpperCase() )

/* console.log( nombresConN ) */

const mentoresMayoresA25 = mentores.filter( mentor => mentor.edad >= 27 )
/* console.log( mentoresMayoresA25 ) */


// some && every

let sonTodosNumeros = numeros.every( numero => typeof numero == 'number' )
/* console.log( sonTodosNumeros ) */


// reduce

console.log( nombresMentores )
console.log( mentores )
const resultadoReduce = mentores.reduce( (acumulador, valorActual) => {
    let aux = Object.assign({}, acumulador)
    if( aux.mentores ){
        aux.mentores +=  ", " + valorActual.nombre 
        valorActual.especialidad.forEach( especialidad => {
            if( !aux.tecnologias.includes( especialidad ) ){
                aux.tecnologias.push( especialidad )
            }
        } )
    }else{
        aux.mentores = valorActual.nombre
        aux.tecnologias = valorActual.especialidad
    }
    return aux
},{})
console.log( resultadoReduce )


/* 
Exercise 1: Write a JavaScript function that reverses a number. For example, 
if x = 32443 then the output should be 34423.
Save your JavaScript file and reload the page. 
Make sure you see the correct output.  If not, investigate and fix.
 
Exercise 2: Write a JavaScript function that returns a string in alphabetical order. 
For example, if x = 'webmaster' then the output should be 'abeemrstw'.  
Punctuation and numbers aren't passed in the string.
Save your JavaScript file and reload the page. 
Make sure you see the correct output.  If not, investigate and fix.
 
Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. 
For example, if x = "prince of persia" then the output should be "Prince Of Persia".
Save your JavaScript file and reload the page. 
Make sure you see the correct output.  If not, investigate and fix.
 
Exercise 4: Write a JavaScript function that finds the longest word in a phrase. 
For example, if x = "Web Development Tutorial", then the output should be "Development".
Save your JavaScript file and reload the page. Make sure you see the correct output.  
If not, investigate and fix.
*/
/* 
const reverse = numero  => numero.toString().split('').reverse().join('')
console.log( reverse(500) )

const ordenar = cadena => cadena.split('').sort().join('')
console.log( ordenar('hola') )

const pasarAMayus = ( cadena ) => cadena.split(' ').reduce( (acc, act) =>acc + act[0].toUpperCase() + act.substring(1)+" ", '' ).trim() 

console.log( pasarAMayus("prince of persia"))

const buscarPalabra = ( frase ) => {
    return frase.split( ' ' ).reduce( (acc, act) => {
        if( acc.length > act.length ){
            return acc
        }else{
            return act
        }
    } )
}
console.log( buscarPalabra( "Web Development Tutorial" ) ) */
