import { TestBed } from '@angular/core/testing';

import { OffertaLavoroService } from './offerta-lavoro.service';

describe('TodosService', () => {
  let service: OffertaLavoroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffertaLavoroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
