import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RichiesteService } from '../../services/richieste.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let richiesteService: jasmine.SpyObj<RichiesteService>;

  beforeEach(async () => {
    const richiesteSpy = jasmine.createSpyObj('RichiesteService', ['getRichieste']);

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: RichiesteService, useValue: richiesteSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    richiesteService = TestBed.inject(RichiesteService) as jasmine.SpyObj<RichiesteService>;
    richiesteService.getRichieste.and.returnValue(of([]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch richieste on init', () => {
    component.ngOnInit();
    expect(richiesteService.getRichieste).toHaveBeenCalled();
  });
});
