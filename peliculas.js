let movies = [
    { name: 'Guardians of the Galaxy ',
         director: 'James Gunn',
         country: 'Estados Unidos - Reino Unido',
         year: 2014,
         motives: ['','','','',''],
        },
        { name: 'Despicable Me 3 ',
         director: 'Kyle Balda - Pierre Coffin - Eric Guillon',
         country: ' Estados Unidos - Francia - Japón',
        year: 2017,
        motives: ['','','','',''],},
    { name: 'Free Guy ',
         director: 'Shawn Levy',
         country: 'Estados Unidos',
         year: 2021,
         motives: ['','','','',''],}
];
function defineStage (year){
    if(year <= 1915){
        return "Atracciones Tempranas"
    }else if (year <= 1945){
        return "Modelo Clasico"
    }else if (year <= 1976){
        return "Emergencias Modernas"   
    }else if (year > 1976){
        return "Problemas Contemporaneos"
    }else{
        return "Error, no se pudo comprobar la etapa"
    }
}
function defineStage2(year){
    return year <= 1915 ? "Atracciones Tempranas" : year <= 1945 ? 'Modelo Clasico' : year <= 1976 ? 'Emergencias Modernas' : 'Problemas Contemporaneos' ;
}

function defineStage3(year){
    switch (true){
        case year <= 1915:
            return "Atracciones Tempranas";
        case year <= 1945:
            return 'Modelo Clasico'
        case year <= 1976:
            return 'Emergencias Modernas';
        case year >=  1977:
            return 'Problemas Contemporaneos'
        default :
            return "Error, no se pudo comprobar la etapa"
    }
}

function defineStage4(year){
    const AtraccionesTempranas = (year) => {return 'Atracciones Tempranas'}
    const ModeloClasico = (year) => {return 'Modelo Clasico'}
}

function defineStage5(year){

}
console.log(defineStage(movies[0].year))
console.log(defineStage2(movies[0].year))
console.log(defineStage2(1914))
console.log(defineStage2(1943))
console.log(defineStage2(1946))
console.log(defineStage2(1986))
console.log(defineStage2(2000))
console.log(defineStage3(1914))
console.log(defineStage3(1943))
console.log(defineStage3(1946))
console.log(defineStage3(2000))
console.log(defineStage3(1986))

//itera el array y los muestra en consola
movies.forEach(e=>console.log(e))
movies.forEach(e=>console.log(e.name))
movies.forEach(e=>e.motives.forEach(e=> console.log(e)))
console.log(movies.map(movies => movies.year))
console.log(movies.map(movies => defineStage(movies.year)))

//http://www.omdbapi.com/?i=tt3896198&apikey=9342cc80

function callApi(){
    async function getMovie(input){
    const res = await fetch(`http://www.omdbapi.com/${input}apikey=`)
    console.log(res.status)
    console.log(res)
}
console.log(getMovie('?i=tt3896198&'))
console.log(getMovie('?t=Game of Thrones&Season=1&Episode=1&'))
}
callApi()
