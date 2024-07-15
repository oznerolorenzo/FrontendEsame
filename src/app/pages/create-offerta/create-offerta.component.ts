import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffertaLavoroService } from '../../services/offerta-lavoro.service';

@Component({
  selector: 'app-create-offerta',
  templateUrl: './create-offerta.component.html',
  styleUrls: ['./create-offerta.component.css']
})
export class CreateOffertaComponent implements OnInit {
  offertaForm: FormGroup;
  successMessage: string;
  errorMessage: string;

  constructor(private fb: FormBuilder, private offertaLavoroService: OffertaLavoroService) {
    this.offertaForm = this.fb.group({
      titolo: ['', Validators.required],
      descrizioneBreve: ['', Validators.required],
      retribuzioneLorda: ['', [Validators.required, Validators.min(0)]],
      dataInserimento: ['']
    });
    this.successMessage = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.offertaForm.valid) {
      const offerta = this.offertaForm.value;
      // Imposta solo la data corrente senza l'ora se non specificata
      if (!offerta.dataInserimento) {
        offerta.dataInserimento = new Date().toISOString().split('T')[0];
      }
      this.offertaLavoroService.createOfferta(offerta).subscribe(
        (response) => {
          this.successMessage = 'Offerta di lavoro creata con successo';
          this.errorMessage = '';
          this.offertaForm.reset();
        },
        (error) => {
          this.successMessage = '';
          this.errorMessage = 'Errore nella creazione dell\'offerta di lavoro';
        }
      );
    }
  }
}