import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCursosMarketplaceComponent } from './card-cursos-marketplace.component';

describe('CardCursosMarketplaceComponent', () => {
  let component: CardCursosMarketplaceComponent;
  let fixture: ComponentFixture<CardCursosMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCursosMarketplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCursosMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
