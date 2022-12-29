const mentores = [
    {
        nombre: 'Nicolás Catriel',
        edad : 28,
        apellido: 'Cirulli',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Lucrecia',
        edad : 27,
        apellido: 'Gillone',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
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
    "nombres" : 'Nicolas Catriel',
    "apellido" : 'Cirulli',
    "edad" : 28, 
    "mascotas": [ 'Kugi', 'Nila'],
    "mentor" : true
}
console.log( nicolas )
/* for( let indice = mentores.length - 1; indice >= 0 ; indice-- ){
        if( mentores[ indice ].nombre === 'Camila'){
            console.log( mentores[ indice ].nombre )
            break
        }
}

console.log( mentores )
for( let mentor of mentores ){
    if( mentor.nombre === 'Camila' ){
        console.log( mentor.nombre )
        break
    }
} */



// for in 


/* for(let llave in nicolas){
    console.log( `la llave ${llave} contiene el valor: ${nicolas[llave]}` )
} 


// while
console.log( mentores )
let mentoresHTML = []
let i = mentores.length - 1
while( i >= 0 && mentoresHTML.length < 2 ){

    if( mentores[i]['especialidad'].includes( 'HTML' ) ){
        mentoresHTML.push( mentores[i] )
    }
    console.log( i )

    i--
}
console.log( mentoresHTML )
console.log( mentoresHTML.length )

// do while
let j = 1
do{
    console.log( 'Do while' )
    j++
}while (j < 3);
 */




let template = ''

for( let mentor of mentores ){
    template += `
    <div class="row col-10 col-md-6 col-xl-3">
    <div class="card border-primary">
        <div class="card-body">
            <h4 class="card-title">${mentor.nombre}</h4>
            <p class="card-text">${mentor.especialidad.toString()}</p>
        </div>
    </div>
    </div>
`
}

let todosLosMentores = [].concat(mentores)
let mentoresReact = filtrarMentores( todosLosMentores, 'React' )
let mentoresJavaScript = filtrarMentores( todosLosMentores, 'JavaScript' )
let mentoresHTML = filtrarMentores( todosLosMentores, 'HTML' )

console.log( mentoresHTML )
console.log( mentoresReact )
console.log( mentoresJavaScript )

function filtrarMentores( mentores, tecnologia ){
    let temporal = []
    for( let mentor of mentores ){
        if( mentor.especialidad.includes( tecnologia ) ){
            temporal.push( mentor )
        }
    }
   return temporal
}
console.log( data )

console.log( template )





