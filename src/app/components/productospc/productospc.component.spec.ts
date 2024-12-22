import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductospcComponent } from './productospc.component';

describe('ProductospcComponent', () => {
  let component: ProductospcComponent;
  let fixture: ComponentFixture<ProductospcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductospcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductospcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
