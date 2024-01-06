import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMeusCursosComponent } from './pagina-meus-cursos.component';

describe('PaginaMeusCursosComponent', () => {
  let component: PaginaMeusCursosComponent;
  let fixture: ComponentFixture<PaginaMeusCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMeusCursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaMeusCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
