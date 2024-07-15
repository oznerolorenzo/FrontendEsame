import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOfferteComponent } from './search-offerte.component';

describe('SearchOfferteComponent', () => {
  let component: SearchOfferteComponent;
  let fixture: ComponentFixture<SearchOfferteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchOfferteComponent]
    });
    fixture = TestBed.createComponent(SearchOfferteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
