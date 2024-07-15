import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffertaLavoroService } from '../../services/offerta-lavoro.service';

@Component({
  selector: 'app-search-offerte',
  templateUrl: './search-offerte.component.html',
  styleUrls: ['./search-offerte.component.css']
})
export class SearchOfferteComponent implements OnInit {
  searchForm: FormGroup;
  results: any[] = [];

  constructor(
    private fb: FormBuilder,
    private offertaLavoroService: OffertaLavoroService
  ) {
    this.searchForm = this.fb.group({
      query: ['', Validators.required],
      max: [10, Validators.required]
    });
  }

  ngOnInit(): void { }

  onSearch() {
    if (this.searchForm.valid) {
      const query = this.searchForm.get('query')?.value;
      const max = this.searchForm.get('max')?.value;
      this.offertaLavoroService.searchOfferte(query, max).subscribe((data: any[]) => {
        this.results = data;
      }, error => {
        console.error('Errore durante la ricerca delle offerte di lavoro:', error);
      });
    }
  }
}
