import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLoginLogonComponent } from './pagina-login-logon.component';

describe('PaginaLoginLogonComponent', () => {
  let component: PaginaLoginLogonComponent;
  let fixture: ComponentFixture<PaginaLoginLogonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaLoginLogonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaLoginLogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
