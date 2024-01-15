import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLogonComponent } from './pagina-logon.component';

describe('PaginaLogonComponent', () => {
  let component: PaginaLogonComponent;
  let fixture: ComponentFixture<PaginaLogonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaLogonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaLogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
