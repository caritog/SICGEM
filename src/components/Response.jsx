import React, { Component } from "react";





//IMPORTANDO LA GRÁFICA DE BARRAS
import { Bar } from 'react-chartjs-2';

//IMPORTANDO GRÁFICA DE PASTEL
import { Pie } from 'react-chartjs-2';



export default class Response extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {

      },
    };
  }


  render() {
  
      const data = {
        labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5', 'Pregunta 6', 'Pregunta 7', 'Pregunta 8', 'Pregunta 9', 'Pregunta 10'], //Aquí van los parámetros a comparar
        datasets: [{ //este es la personalización de nuestra gráfica
          label: 'Resultados', //parámetro
          backgroundColor: 'rgba(0,255,0,1)',
          borderColor: 'black',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0,255,0,0.2)',
          hoverBorderColor: '#FFF000',
          data: [<>{sessionStorage.getItem("pregunta1")}</>, //valor del parámetro

          <>{sessionStorage.getItem("pregunta2")}</>,

          <>{sessionStorage.getItem("pregunta3")}</>,

          <>{sessionStorage.getItem("pregunta4")}</>,

          <>{sessionStorage.getItem("pregunta5")}</>, 

          <>{sessionStorage.getItem("pregunta6")}</>,

          <>{sessionStorage.getItem("pregunta7")}</>,

          <>{sessionStorage.getItem("pregunta8")}</>,

          <>{sessionStorage.getItem("pregunta9")}</>,

          <>{sessionStorage.getItem("pregunta10")}</>
          ]
        }]
      };
      const opciones = { //aquí configuramos nuestra gráfica pero de manera externa
        maintainAspectRatio: false,//usamos este parámetro para indicarle que queremos hacer un cambio de tamaño
        responsive: true,
      }

      return (
        <div className="App1" style={{ width: '100%', height: '500px' }}>
          <h2>Resultado de la encuesta</h2>
          <Bar data={data} options={opciones} />
        </div>

      );
    
  }
}
//export default App1;




/*return (
  <div className="App1" style={{width: '100%', height: '500px'}}>
    <h2>Resultado de la encuesta</h2>
    <Bar data={data} options={opciones}/>
  </div>
)
}

*/

/*
render() {
  console.log(sessionStorage.getItem("pregunta1"))
  return (
    <div className="bg-dark text-white">
      <h2>{sessionStorage.getItem("pregunta1")}</h2>
      <br />
      <h2>{sessionStorage.getItem("pregunta2")}</h2>
      <br />
      <h2>{sessionStorage.getItem("pregunta3")}</h2>
      <br />
      <h2>{sessionStorage.getItem("pregunta4")}</h2>
    </div>


  );
}
}

*/


/*
function App1() {
  const data= {
    labels: ['Estados Unidos', 'México', 'Italia', 'Colombia', 'Italia'], //Aquí van los parámetros a comparar
    datasets:[{ //este es la personalización de nuestra gráfica
      label: 'Habitantes', //parámetro
      backgroundColor: 'rgba(0,255,0,1)',
      borderColor: 'black',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,255,0,0.2)',
      hoverBorderColor: '#FFF000',
      data: [327.16, 126.19, 60.43, 49.64, 46.72] //valor del parámetro
    }]
  };
  const opciones={ //aquí configuramos nuestra gráfica pero de manera externa
    maintainAspectRatio: false,//usamos este parámetro para indicarle que queremos hacer un cambio de tamaño
    responsive: true,
  }
  return (
    <div className="App1" style={{width: '100%', height: '500px'}}>
      <h2>Población de Millones de habitantes</h2>
      <Bar data={data} options={opciones}/>
    </div>
  )
}

export default App1;

*/



/*
function App2() {
  const data= {
    labels:['Google', 'Bing', 'Baidu', 'Otros'],
    datasets:[{
      data: [74.56, 10.54, 9.42, 5.42],
      backgroundColor: ['#FFF000', 'blue', 'green', '#FF0000']
    }]
  };

  const opciones= {
    responsive: true,
  }
  return (
      <div className="App2">
        <Pie data={data} options={opciones}/>
     </div>
  )
}

export default App2;

*/



/*
class Datos extends Component {
    state = {
        respuesta: []
    }

    async peticion(){ // para que se ejecute en segundo plano
        var peticion  = await fetch('http://localhost:5000/apiEstadisticas');
        var respuesta = await peticion.json(); //await es para que espere que se haga la petición
        console.log(respuesta);
    }

    async componentDidMount() {
        this.peticion();
    }


    render() {



        return (
            console.log("Hola datos")
        );
    }
}

export default Datos;
*/