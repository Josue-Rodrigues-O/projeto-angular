import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetalhesDoCursoComponent } from './pagina-detalhes-do-curso.component';

describe('PaginaDetalhesDoCursoComponent', () => {
  let component: PaginaDetalhesDoCursoComponent;
  let fixture: ComponentFixture<PaginaDetalhesDoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDetalhesDoCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaDetalhesDoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
