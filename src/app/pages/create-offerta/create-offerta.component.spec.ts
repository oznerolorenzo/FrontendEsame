import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOffertaComponent } from './create-offerta.component';

describe('CreateOffertaComponent', () => {
  let component: CreateOffertaComponent;
  let fixture: ComponentFixture<CreateOffertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOffertaComponent]
    });
    fixture = TestBed.createComponent(CreateOffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
