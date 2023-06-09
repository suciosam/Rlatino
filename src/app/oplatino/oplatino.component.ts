import { Component } from '@angular/core';

@Component({
  selector: 'app-oplatino',
  templateUrl: './oplatino.component.html',
  styleUrls: ['./oplatino.component.css']
})
export class OplatinoComponent {

  R!: number;
  C!: number;



  table!: HTMLTableElement;
  body!: HTMLBodyElement;

  resultadosRenglones!: number[];
  resultadosColumnas!: number[];
  rectangulo: number[][] =[];

  // verificarRectanguloLatino() {
  //   // Verificar cada renglón
  //   this.resultadosRenglones = [];
  //   for (const renglon of this.table) {
  //     if (

  //     ) {
  //       this.resultadosRenglones.push(1);
  //     } else {
  //       this.resultadosRenglones.push(0);
  //     }
  //   }

  //   // Verificar cada columna
  //   this.resultadosColumnas = [];
  //   for (let columna = 0; columna < this.C; columna++) {
  //     const columnaElementos = [];
  //     for (let renglon = 0; renglon < this.R; renglon++) {
  //       columnaElementos.push(this.matriz[renglon][columna]);
  //     }
  //     if (
  //       new Set(columnaElementos).size === this.R &&
  //       columnaElementos.every(num => num >= 1 && num <= this.R + this.C)
  //     ) {
  //       this.resultadosColumnas.push(1);
  //     } else {
  //       this.resultadosColumnas.push(0);
  //     }
  //   }
  // }

  // crearRectangulo() {
  //   // Obtener la referencia del elemento body

  // }
ngOnInit(){


}

botonazoMagico(){
console.log('R', this.R);
console.log('C', this.C)

  // for (let i = 0; i < this.R; i++) {
  //   const fila: number[] = [];
  //   this.rectangulo[i] = [];
  //   for (let j = 0; j < this.C; j++) {
  //     const valor: number = this.getRandomNumber(1, 1000);
  //     fila.push(valor);
  //     this.rectangulo[[i][j]];
  //   }
  // }

  for (let i = 0; i < this.R; i++) {
    const fila: number[] = [];
    for (let j = 0; j < this.C; j++) {
      const valor: number = this.getRandomNumber(1, 1000);
      fila.push(valor);
    }
    this.rectangulo.push(fila);
  }



  // const matriz = [
  //   [3, 1, 2, 3],
  //   [1, 5, 6, 5],
  //   [4, 9, 5, 8]
  // ];

  // this.rectangulo = matriz;

  console.log('rectangulo',this.rectangulo);

   this.validarRLatino(this.R, this.C, this.rectangulo);

  console.log("Validacion de Renglones: ", this.resultadosRenglones.join(" "));
  console.log("Validacion de Columnas: ", this.resultadosColumnas.join(" "));
}

 getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//   crearRectangulo() {

//     this.body = document.getElementsByTagName("body")[0];
//     console.log(this.body);
//     this.table = document.getElementsByTagName("table")[0];

//     // console.log(this.table);

//     if (this.table === undefined) {

//       this.body// this.createTable(this.body);
//     } else {
//       this.table.remove();
//       // this.createTable(body);
//       this.body
//     }

//     var tabla = document.createElement("table");
//     var tblBody = document.createElement("tbody");

//     for (var i = 0; i < this.R; i++) {
//       var renglon = document.createElement("tr");

//       for (var j = 0; j < this.C; j++) {

//         let min = Math.ceil(1);
//         let max = Math.floor(1000);
//         let res = Math.floor(Math.random() * (max - min + 1) + min);

//         var celda = document.createElement("td");
//         var textoCelda = document.createTextNode(" " + res);
//         celda.appendChild(textoCelda);
//         renglon.appendChild(celda);
//       }

//       tblBody.appendChild(renglon);
//     }

//     tabla.appendChild(tblBody);
//     this.body.appendChild(tabla);
//     tabla.setAttribute("border", "1");


//     console.log('rectangulo', tabla)
// // Obtener la tabla por su ID

//   // Verificar el tamaño del rectángulo
//   const numeroFilas = tabla.rows.length;
//   const numeroColumnas = tabla.rows[0].cells.length;

//     console.log('numeroFilas', numeroFilas)
//     console.log('numeroColumnas', numeroColumnas);

//     // const numerosSet = new Set<number>();
//     // for (let i = 0; i < numeroFilas; i++) {
//     //   const fila = tabla.rows[i];
//     //   for (let j = 0; j < numeroColumnas; j++) {
//     //     const celda = fila.cells[j];
//     //     const numero = parseInt(celda.innerText);

//     //     numerosSet.add(numero);

//     //     console.log('fila', fila)
//     //     console.log('celda', celda)

//     //   }}



//   }

  validarRLatino(R: number, C: number, matriz: number[][]) {
     this.resultadosRenglones=[];
     this.resultadosColumnas= [];

      // Verificar renglones
      for (let i = 0; i < R; i++) {
        const renglon = matriz[i];
        const numerosSet = new Set<number>();
        let esValido = 1;

        for (let j = 0; j < C; j++) {
          const numero = renglon[j];
          if (numero < 1 || numero > R + C || numerosSet.has(numero)) {
            esValido = 0;
            break;
          }
          numerosSet.add(numero);
        }

        this.resultadosRenglones.push(esValido);
      }

      // Verificar columnas
      for (let j = 0; j < C; j++) {
        const numerosSet = new Set<number>();
        let esValido = 1;

        for (let i = 0; i < R; i++) {
          const numero = matriz[i][j];
          if (numero < 1 || numero > R + C || numerosSet.has(numero)) {
            esValido = 0;
            break;
          }
          numerosSet.add(numero);
        }

        this.resultadosColumnas.push(esValido);
      }

      return [this.resultadosRenglones, this.resultadosColumnas];


    // Ejemplo de uso


  }
}



