import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffertaLavoroService } from '../../services/offerta-lavoro.service';

@Component({
  selector: 'app-update-offerta',
  templateUrl: './update-offerta.component.html',
  styleUrls: ['./update-offerta.component.css']
})
export class UpdateOffertaComponent implements OnInit {
  offertaForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private offertaLavoroService: OffertaLavoroService
  ) {
    this.offertaForm = this.fb.group({
      offertaLavoroID: ['', Validators.required],
      titolo: ['', Validators.required],
      descrizioneBreve: ['', Validators.required],
      retribuzioneLorda: ['', [Validators.required, Validators.min(0)]],
      dataInserimento: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.offertaForm.valid) {
      const offertaLavoroID = this.offertaForm.get('offertaLavoroID')?.value;
      const updatedOfferta = this.offertaForm.value;

      // Rimuovere l'ora dalla data di inserimento
      if (!updatedOfferta.dataInserimento) {
        updatedOfferta.dataInserimento = new Date().toISOString().split('T')[0];
      } else {
        updatedOfferta.dataInserimento = new Date(updatedOfferta.dataInserimento).toISOString().split('T')[0];
      }

      this.offertaLavoroService.updateOfferta(offertaLavoroID, updatedOfferta).subscribe(response => {
        this.successMessage = 'Offerta aggiornata con successo';
        this.errorMessage = null;
        this.offertaForm.reset();
      }, error => {
        this.errorMessage = 'Errore durante l\'aggiornamento dell\'offerta';
        this.successMessage = null;
        console.error('Errore durante l\'aggiornamento dell\'offerta:', error);
      });
    }
  }
}
