import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMarktplaceComponent } from './pagina-marktplace.component';

describe('PaginaMarktplaceComponent', () => {
  let component: PaginaMarktplaceComponent;
  let fixture: ComponentFixture<PaginaMarktplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMarktplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaMarktplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
