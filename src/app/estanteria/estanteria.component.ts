import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-estanteria',
  templateUrl: './estanteria.component.html',
  styleUrls: ['./estanteria.component.css']
})
export class EstanteriaComponent {
  rotated1: boolean = true;
  rotated2: boolean = true;
  rotated3: boolean = false;
  rotated5: boolean = true;

  term: string = ''; // Variable para almacenar el término de búsqueda
  estanteria1: string[][] = [
    ['EUROPHARMA', 'EUROPHARMA', 'EUROPHARMA', 'PHARMALAT', 'PHARMALAT', 'VITABIOTIC', 'BIOCLEAN - BMA PHARMA - GOOD BRANDS', 'FARMAVANZA - FORESTAR - FORESTAR P. - HEPAVAN', 'BELSA - VITAMINA E - ZINC - SUEÑABIEN'],
    ['GENOMALAB', 'GENOMALAB', 'PROCTER', 'NATURAS GARDEN', 'VIZCAINO', 'VIDA', 'FARMEX', 'KRAL', 'KURANTIS'],
    ['FARMAMEDICA', 'FARMAMEDICA', 'FARMAVANZA', 'FARMAVANZA', 'FARMAVANZA', 'BAGO', 'DOGMA', 'GRUPO PHENIEL', 'GRUPO PHENIEL - NORD PHARMA - SANTE'],
    ['DONOVAN W.', 'DONOVAN W.', 'DONOVAN W.', 'DONOVAN W.', 'CHEMINTER', 'CHEMINTER', 'CHEMINTER', 'FERRER', 'JOHNSON - PROCAPS - VITALCARE'],
    ['UNIPHARMA', 'UNIPHARMA', 'UNIPHARMA', 'PAIL', 'PHARMADEL', 'FARKOT', 'MIDI PHARMA', 'PROCAPS - JANSEN', 'NIELSEN - VIDES'],
    ['ASTRA ZENECA', 'DALT PHARMA - ALTIAN PHARMA - ASTA MEDICA','BIOSIDUS - DALT PHARMA - ASTA MEDICA','FARNET', 'FARMECO - PHARA', 'LUVECK', 'ARSAL', 'GENERIX', 'ARKO PHARMA - LEMONG - GRUPO FARMA'],
    ['MEDI PRODUCTOS', 'MEDI PRODUCTOS', 'PHARLAND', 'PHARLAND', 'TOPFARMA', 'BRIJAN', 'HETERO', 'PHARMAMEDIC', 'SANTA FE']
  ];
  estanteria2: string[][] = [
    ['REWARD', 'PROMOCION', 'PROMOCION', 'PROMOCION', 'PROCAPS', 'PROCAPS', 'INFASA', 'INFASA', 'INFASA'],
    ['REWARD', 'PROMOCION', 'PROMOCION', 'PROMOCION', 'MEGALABS (ROWE) - ROWA', 'MEGALABS (ROWE)', 'LANCASCO', 'LANCASCO', 'LANCASCO'],
    ['REWARD', 'WINZZER', 'MK', 'MK', 'MK', 'MED PHARMA', 'MED PHARMA', 'MED PHARMA', 'MED PHARMA'],
    ['REWARD', 'GLAXO POPULAR', 'BAYER POPULAR', 'BAYER POPULAR.', 'BAYER POPULAR', 'PONDS - NIVEA - BABE - TEATRICAL - CUMLAUDE - BATAB HEALTH - DIADERM LAB - IMEXA', 'EUCERIN - DERMIX - AVENE - CUMLAUDE - GALDERMA', 'DERMIX - SEBA MED - CATALYSIS', 'MEGALABS (MEDIHEALTH)'],
    ['REWARD', 'RUIPHARMA', 'GUTIS', 'MEFASAFARMA', 'GLOBAL PHARMA - CARNOT LAB -DEUTSCH PHARMA', 'GLOBAL PHARMA', 'MERK', 'MERK', 'MERK'],
    ['REWARD', 'ALDO','KERVISION','HEIDELG PHARMA', 'HEIDELG PHARMA', 'LAFAGE', 'LAFAGE', 'BONIN', 'BONIN'],
    ['GAMMA - ADVANTAFARMA', 'BUSSIE - SILANES', 'CHALVER - LAXMI PHARMA.', 'SERVIER', 'SAVAL', 'VIJOSA', 'VIJOSA', 'PIERSAN', 'PIERSAN']
  ];
  estanteria3: string[][] = [
    ['ALIFARMAT','MSN', 'PFIZER', 'BECTON DICKINSON', 'CANEHAM', 'MOBA', 'ASOFARMA', 'ASOFARMA','ASOFARMA'],
    ['MELGAR - ROHAPHARMA - NATURAL HEALTH - BERNA - LACER', 'PIERRE FABRE - ASPEN FARMA COHEN - ASOFARMA C', 'MEGALABS (ALMIRALL) - WINDSOR PHARMAC - CORE PHARMA', 'BALIARDA', 'MERZ', 'PABLO CASSARA', 'PROCAPS VITALCARE - DIFPER', 'TRINOMED', 'MALLEN LABORATORIOS'],
    ['MORE PHARMA - VANQUIMICA - VASSAUX - SANOFI FP - EUROED', 'CORE PHARMA - LIOMONT - ANA MARIA LAJUSTICIA', 'ROCHE-CENDIS - CONAMEP - SANDOZ - GRUNENTHAL', 'LUIGCO - ATRAL CIPAN', 'ACINO - SUED', 'STEIN-OTC - FARDEL', 'SANTA ANA - LAFAR -OFTISOL- OTOPHARM - LANSIER - KLEIN - OPHTHA ', 'SOPHIA - MEGALABS (POEN) - ', 'DERMAPHARM - ALLERGAN - ALCON C - ALFER - BAUSCH YAMP; LOMB ABSON'],
    ['RUBIO - LUNDBECK - BIOHERAPY - FARMAVIC - LABORATORIOS SIERRA - AB-BOTICS - QUIMIFAR', 'MALTES - LION PHARMA - GOLD FOREST - INFARMA - SNC PHARMA - EUROMED ', 'ITALBIOTIC - ETIK PROACUA, CALOX', 'PHARMACROSS - SAN LUIS', 'BOEHRINGER - TERAMED ', 'NOVEMED - ONSITE', 'GLAXO SMITH KLINE ', 'SANOFI', 'SANOFI'],
    ['MED EQ - CENTRO DE HISTOTERAPIA PLACENTARIA - MONERAUX - ELEA - TROIKAA - BIOMED ', 'PHARMATOR - TRB PHARMA - NEWPORT - KENLY ROCHA - BEXIMCO PHARMA', 'ROLAND LOUIS - ANDIFAR', 'SPLENDA - FAES - BIAL - DEUS PHARMA', 'EISAI - SALVAT - LAFCO', 'VIFOR - INC GROSSMAN', 'ANCALMO', 'FRYCIA - COOPERACION LISTO', 'MERCK SHARP DOHME'],
    ['VACIO', 'LACER - GRUNER MEDIKA - FARMAYA - NATURLIDER', 'PSICOFARMA - ROTTA', 'PRISM', 'LACOFA - PHARBEST', 'DROGUERIA BRULAB - GALENIKA', 'NOVARTIS C - NOVARTIS EXELTIS', 'NOVARTIS', 'NOVARTIS'],
    ['SUEROS', 'SUEROS', 'SUEROS', 'SUEROS', 'SUEROS', 'SUEROS', 'SUEROS', 'SUEROS', 'SUEROS'],
  ];
  estanteria5: string[][] = [
    ['MEGALABS (PANALAB)', 'MEGALABS (ROEMERS)','MEGALABS (ROEMERS)','MEGALABS (ROEMERS)','MEGALABS (ROEMERS)','INTECFA'],
    ['ABBOT LAFRANCOL COIDE', 'MENARINI','MENARINI','MENARINI','MENARINI','CHINOIN'],
    ['HIMALAYA HERBAL HEALTCARE','GALOMEDIKAL','GALOMEDIKAL','GALOMEDIKAL','GALOMEDIKAL','LEVEN',],
    ['KIN LABORATORIOS','BELSA','BELSA','BELSA','BELSA','PHARMOZ - FARMANDINA'],
    ['CAPLIN','CAPLIN','CAPLIN','CAPLIN','CAPLIN','CAPLIN'],
    ['WELLCO','QUALIPHARM','QUALIPHARM','QUALIPHARM','QUALIPHARM','NOVALAB'],
    ['SUEROS','SUEROS','SUEROS','SUEROS','SUEROS','SUEROS'],
  ];
  laboratoriosMarcados1: boolean[][] = []; // Matriz para almacenar el estado de marcado de los laboratorios de la estantería 1
  laboratoriosMarcados2: boolean[][] = []; // Matriz para almacenar el estado de marcado de los laboratorios de la estantería 2
  laboratoriosMarcados3: boolean[][] = []; // Matriz para almacenar el estado de marcado de los laboratorios de la estantería 3
  laboratoriosMarcados5: boolean[][] = []; 
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
    this.laboratoriosMarcados3 = this.estanteria3.map(() =>
      Array(this.estanteria3[0].length).fill(false)
    );
    this.laboratoriosMarcados5 = this.estanteria5.map(() =>
      Array(this.estanteria5[0].length).fill(false)
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
    // Buscar en la estantería 3
    this.estanteria3.forEach((fila, filaIndex) =>
      fila.forEach((laboratorio, colIndex) => {
        if (laboratorio.toLowerCase().includes(this.term.toLowerCase())) {
          this.laboratoriosMarcados3[filaIndex][colIndex] = true;
          this.scrollToEstanteria(3);
        } else {
          this.laboratoriosMarcados3[filaIndex][colIndex] = false;
        }
      })
    );
        // Buscar en la estantería 5
        this.estanteria5.forEach((fila, filaIndex) =>
          fila.forEach((laboratorio, colIndex) => {
            if (laboratorio.toLowerCase().includes(this.term.toLowerCase())) {
              this.laboratoriosMarcados5[filaIndex][colIndex] = true;
              this.scrollToEstanteria(5);
            } else {
              this.laboratoriosMarcados5[filaIndex][colIndex] = false;
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


  
  

  rotarDiv1() {
    this.rotated1 = !this.rotated1;
  }
  rotarDiv2() {
    this.rotated2 = !this.rotated2;
  }
  rotarDiv3() {
    this.rotated3 = !this.rotated3;
  }
  rotarDiv5() {
    this.rotated5 = !this.rotated5;
  }
}
  

