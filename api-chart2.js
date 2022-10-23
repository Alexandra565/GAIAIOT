var a_o = [];
var camas_adultos=[];


// Consumo de la API
fetch('https://www.datos.gov.co/resource/fa2g-cdft.json')

    // Then necesita una promesa, y esa promesa se resuelve con una respuesta 
    .then(datos_obtenidos => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {

        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (datos_obtenidos.a_o != undefined && datos_obtenidos.camas_adultos) {
                a_o.push(datos_obtenidos.a_o);
                camas_adultos.push(datos_obtenidos.camas_adultos);
            }
        });

        var trace1 = {
            x: [2017,2018,2019,2020],
            y: camas_adultos,
            type: 'scatter'
          };
                // Estilos de la gráfica
        var layout =
        {
            title: 'TEMPERATURA',
            font: {
                family: 'Times New Roman'
            },
            xaxis:
            {
                title: 'FECHA'
            },
            yaxis:
            {
               title: 'TEMPERATURA'
            }
        };
          
          var data = [trace1];
          
        Plotly.newPlot('div2', data,layout);
    });