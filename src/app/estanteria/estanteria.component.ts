import { Component } from '@angular/core';

@Component({
  selector: 'app-estanteria',
  templateUrl: './estanteria.component.html',
  styleUrls: ['./estanteria.component.css']
})
export class EstanteriaComponent {
  term: string = ''; // Variable para almacenar el término de búsqueda
  estanteria1: string[][] = [
    ['EUROPHARMA', 'EUROPHARMA', 'EUROPHARMA', 'PHARMALAT', 'PHARMALAT', 'VITABIOTIC', 'BIOCLEAN - BMA PHARMA', 'FARMAVANZA - FORESTAR - FORESTAR P. - HEPAVAN', 'BELSA - VITAMINA E - ZINC - SUEÑABIEN N'],
    ['GENOMALAB', 'GENOMALAB', 'PROCTER', 'NATURAS GARDEN', 'VIZCAINO', 'VIDA', 'FARMEX', 'KRAL', 'KURANTIS'],
    ['FARMAMEDICA', 'FARMAMEDICA', 'FARMAVANZA', 'FARMAVANZA', 'FARMAVANZA', 'BAGO', 'DOGMA', 'GRUPO PHENIEL', 'GRUPO PHENIEL'],
    ['DONOVAN W.', 'DONOVAN W.', 'DONOVAN W.', 'DONOVAN W.', 'CHEMINTER', 'CHEMINTER', 'CHEMINTER', 'FERRER', 'JOHNSON'],
    ['UNIPHARMA', 'UNIPHARMA', 'UNIPHARMA', 'PAIL', 'PHARMADEL', 'FARKOT', 'MIDI PHARMA', 'PROCAPS - JANSEN', 'NIELSEN'],
    ['ASTRA ZENECA', 'DALT PHARMA - ALTIAN PHARMA - ASTA MEDICA','BIOSIDUS - DALT PHARMA - ASTA MEDICA','FARNET', 'FARMECO - PHARA', 'LUVECK', 'ARSAL', 'GENERIX', 'ARKO PHARMA'],
    ['MEDI PRODUCTOS', 'MEDI PRODUCTOS', 'PHARLAND', 'PHARLAND', 'TOPFARMA', 'BRIJAN', 'HETERO', 'PHARMAMEDIC', 'SANTA FE']
  ];
  estanteria2: string[][] = [
    ['REWARD', 'DONOVAN W. - BELSA - ROWE', 'DONOVAN W - BELSA - FARMANDINA', 'DONOVAN W - UNIPHARMA - DOGMA - FARMAMEDI - CA', 'PROCAPS', 'PROCAPS', 'INFASA', 'INFASA', 'INFASA'],
    ['REWARD', 'KIN - DONOVAN W - GALOMEDIKAL - DOLO GALONERVON N', 'DOLO NEUROBION - DOLO GALONERVON - LANCASCO - MED PHARMA', 'KIN - DOLO GALONERVON - MED PHARMA', 'ROWA', 'ROWA', 'LANCASCO', 'LANCASCO', 'LANCASCO'],
    ['REWARD', 'WINZZER', 'MK', 'MK', 'MK', 'MED PHARMA', 'MED PHARMA', 'MED PHARMA', 'MED PHARMA'],
    ['REWARD', 'GLAXO POPULAR', 'BAYER POPULAR', 'BAYER POPULAR.', 'BAYER POPULAR', 'PONDS - NIVEA - BABE - TEATRICAL', 'EUCERIN - DERMIX - AVENE', 'DERMIX - SEBA MED', 'MEDIHEALT'],
    ['REWARD', 'RUIPHARMA', 'GUTIS', 'MEFASAFARMA', 'GLOBAL PHARMA', 'GLOBAL PHARMA', 'MERK', 'MERK', 'MERK'],
    ['REWARD', 'ALDO','KERVISION','HEILDEG PHARMA', 'HEILDEG PHARMA', 'LAFAGE', 'LAFAGE', 'BONIN', 'BONIN'],
    ['GAMMA - AADVANTAFAR - MA', 'BUSSIE', 'CHALVER', 'SERVIER', 'SAVAL', 'VIJOSA', 'VIJOSA', 'PIERSAN', 'PIERSAN']
  ];

  laboratoriosMarcados1: boolean[][] = []; // Matriz para almacenar el estado de marcado de los laboratorios de la estantería 1
  laboratoriosMarcados2: boolean[][] = []; // Matriz para almacenar el estado de marcado de los laboratorios de la estantería 2

  constructor() {
    this.inicializarMarcados();
  }

  inicializarMarcados(): void {
    this.laboratoriosMarcados1 = this.estanteria1.map(() =>
      Array(this.estanteria1[0].length).fill(false)
    );
    this.laboratoriosMarcados2 = this.estanteria2.map(() =>
      Array(this.estanteria2[0].length).fill(false)
    );
  }

  realizarBusqueda(): void {
    // Buscar en la estantería 1
    this.estanteria1.forEach((fila, filaIndex) =>
      fila.forEach((laboratorio, colIndex) => {
        if (laboratorio.toLowerCase().includes(this.term.toLowerCase())) {
          this.laboratoriosMarcados1[filaIndex][colIndex] = true;
          this.scrollToEstanteria(1);
        } else {
          this.laboratoriosMarcados1[filaIndex][colIndex] = false;
        }
      })
    );
  
    // Buscar en la estantería 2
    this.estanteria2.forEach((fila, filaIndex) =>
      fila.forEach((laboratorio, colIndex) => {
        if (laboratorio.toLowerCase().includes(this.term.toLowerCase())) {
          this.laboratoriosMarcados2[filaIndex][colIndex] = true;
          this.scrollToEstanteria(2);
        } else {
          this.laboratoriosMarcados2[filaIndex][colIndex] = false;
        }
      })
    );
  }
  
  scrollToEstanteria(estanteria: number): void {
    const el = document.getElementById(`estanteria${estanteria}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
