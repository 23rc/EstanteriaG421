import { Component } from '@angular/core';

@Component({
  selector: 'app-estanteria',
  templateUrl: './estanteria.component.html',
  styleUrls: ['./estanteria.component.css']
})
export class EstanteriaComponent {
  term: string = ''; // Variable para almacenar el término de búsqueda
  filas: string[][] = [
    ['EUROPHARMA', 'EUROPHARMA', 'EUROPHARMA', 'PHARMALAT', 'PHARMALAT', 'VITABIOTIC', 'BIOCLEAN - BMA PHARMA', 'FARMAVANZA - FORESTAR - FORESTAR P. - HEPAVAN', 'BELSA - VITAMINA E - ZINC - SUEÑABIEN N'],
    ['GENOMALAB', 'GENOMALAB', 'PROCTER', 'NATURAS GARDEN', 'VIZCAINO', 'VIDA', 'FARMEX', 'KRAL', 'KURANTIS'],
    ['FARMAMEDICA', 'FARMAMEDICA', 'FARMAVANZA', 'FARMAVANZA', 'FARMAVANZA', 'BAGO', 'DOGMA', 'GRUPO PHENIEL', 'GRUPO PHENIEL'],
    ['DONOVAN W.', 'DONOVAN W.', 'DONOVAN W.', 'DONOVAN W.', 'CHEMINTER', 'CHEMINTER', 'CHEMINTER', 'FERRER', 'JOHNSON'],
    ['UNIPHARMA', 'UNIPHARMA', 'UNIPHARMA', 'PAIL', 'PHARMADEL', 'FARKOT', 'MIDI PHARMA', 'PROCAPS - JANSEN', 'NIELSEN'],
    ['ASTRA ZENECA', 'DALT PHARMA - ALTIAN PHARMA - ASTA MEDICA','BIOSIDUS - DALT PHARMA - ASTA MEDICA','FARNET', 'FARMECO - PHARA', 'LUVECK', 'ARSAL', 'GENERIX', 'ARKO PHARMA'],
    ['MEDI PRODUCTOS', 'MEDI PRODUCTOS', 'PHARLAND', 'PHARLAND', 'TOPFARMA', 'BRIJAN', 'HETERO', 'PHARMAMEDIC', 'SANTA FE']
  ];

  laboratoriosMarcados: boolean[][] = []; // Matriz para almacenar el estado de marcado de los laboratorios

  constructor() {
    this.inicializarMarcados();
  }

  inicializarMarcados(): void {
    this.laboratoriosMarcados = this.filas.map(() =>
      Array(this.filas[0].length).fill(false)
    );
  }

  realizarBusqueda(): void {
    this.filas.forEach((fila, filaIndex) =>
      fila.forEach((laboratorio, colIndex) =>
        this.laboratoriosMarcados[filaIndex][colIndex] = laboratorio.toLowerCase().includes(this.term.toLowerCase())
      )
    );
  }
}
