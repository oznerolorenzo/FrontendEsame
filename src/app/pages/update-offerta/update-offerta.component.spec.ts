import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOffertaComponent } from './update-offerta.component';

describe('UpdateOffertaComponent', () => {
  let component: UpdateOffertaComponent;
  let fixture: ComponentFixture<UpdateOffertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOffertaComponent]
    });
    fixture = TestBed.createComponent(UpdateOffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
