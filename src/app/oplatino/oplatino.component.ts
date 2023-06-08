import { Component } from '@angular/core';

@Component({
  selector: 'app-oplatino',
  templateUrl: './oplatino.component.html',
  styleUrls: ['./oplatino.component.css']
})
export class OplatinoComponent {

  R!: number;
  C!: number;
  matriz!: number[][];
  resultadosRenglones!: number[];
  resultadosColumnas!: number[];

  verificarRectanguloLatino() {
    // Verificar cada renglón
    this.resultadosRenglones = [];
    for (const renglon of this.matriz) {
      if (
        new Set(renglon).size === this.C &&
        renglon.every(num => num >= 1 && num <= this.R + this.C)
      ) {
        this.resultadosRenglones.push(1);
      } else {
        this.resultadosRenglones.push(0);
      }
    }

    // Verificar cada columna
    this.resultadosColumnas = [];
    for (let columna = 0; columna < this.C; columna++) {
      const columnaElementos = [];
      for (let renglon = 0; renglon < this.R; renglon++) {
        columnaElementos.push(this.matriz[renglon][columna]);
      }
      if (
        new Set(columnaElementos).size === this.R &&
        columnaElementos.every(num => num >= 1 && num <= this.R + this.C)
      ) {
        this.resultadosColumnas.push(1);
      } else {
        this.resultadosColumnas.push(0);
      }
    }
  }

}
