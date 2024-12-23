import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasDescuentosComponent } from './ofertas-descuentos.component';

describe('OfertasDescuentosComponent', () => {
  let component: OfertasDescuentosComponent;
  let fixture: ComponentFixture<OfertasDescuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfertasDescuentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
