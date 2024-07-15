import { Component, OnInit } from '@angular/core';
import { OffertaLavoroService } from '../../services/offerta-lavoro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  offerte: any[] = [];
  maxOfferte: number = 100;

  constructor(private offertaLavoroService: OffertaLavoroService) { }

  ngOnInit(): void {
    this.fetchOfferte();
  }

  fetchOfferte() {
    this.offertaLavoroService.getOfferte(this.maxOfferte).subscribe((data: any[]) => {
      this.offerte = data;
    }, error => {
      console.error('Errore durante il recupero delle offerte di lavoro:', error);
    });
  }
}
