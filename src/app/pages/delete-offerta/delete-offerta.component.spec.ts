import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOffertaComponent } from './delete-offerta.component';

describe('DeleteOffertaComponent', () => {
  let component: DeleteOffertaComponent;
  let fixture: ComponentFixture<DeleteOffertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteOffertaComponent]
    });
    fixture = TestBed.createComponent(DeleteOffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
