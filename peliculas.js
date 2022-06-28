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
console.log(defineStage(movies[0].year))
