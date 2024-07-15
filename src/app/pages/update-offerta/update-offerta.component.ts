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
  offerte: any[] = [];

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

  ngOnInit(): void {
    this.loadOfferte();
  }

  loadOfferte() {
    this.offertaLavoroService.getOfferte(10).subscribe(offerte => {
      this.offerte = offerte;
    });
  }

  onSubmit() {
    if (this.offertaForm.valid) {
      const offertaLavoroID = this.offertaForm.get('offertaLavoroID')?.value;
      const updatedOfferta = this.offertaForm.value;


      if (!updatedOfferta.dataInserimento) {
        updatedOfferta.dataInserimento = new Date().toISOString().split('T')[0];
      }

      this.offertaLavoroService.updateOfferta(offertaLavoroID, updatedOfferta).subscribe(response => {
        this.successMessage = 'Offerta aggiornata con successo';
        this.errorMessage = null;
        this.offertaForm.reset();
        this.loadOfferte();
      }, error => {
        this.errorMessage = 'Errore durante l\'aggiornamento dell\'offerta';
        this.successMessage = null;
        console.error('Errore durante l\'aggiornamento dell\'offerta:', error);
      });
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.offertaForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}
