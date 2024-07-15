import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffertaLavoroService } from '../../services/offerta-lavoro.service';

@Component({
  selector: 'app-delete-offerta',
  templateUrl: './delete-offerta.component.html',
  styleUrls: ['./delete-offerta.component.css']
})
export class DeleteOffertaComponent implements OnInit {
  deleteForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private offertaLavoroService: OffertaLavoroService
  ) {
    this.deleteForm = this.fb.group({
      offertaLavoroID: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onDelete() {
    if (this.deleteForm.valid) {
      const offertaLavoroID = this.deleteForm.get('offertaLavoroID')?.value;
      this.offertaLavoroService.deleteOfferta(offertaLavoroID).subscribe(response => {
        this.successMessage = 'Offerta eliminata con successo';
        this.errorMessage = null;
        this.deleteForm.reset();
      }, error => {
        this.errorMessage = 'Errore durante l\'eliminazione dell\'offerta';
        this.successMessage = null;
        console.error('Errore durante l\'eliminazione dell\'offerta:', error);
      });
    }
  }
}
