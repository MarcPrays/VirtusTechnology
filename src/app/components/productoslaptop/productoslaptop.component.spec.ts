import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoslaptopComponent } from './productoslaptop.component';

describe('ProductoslaptopComponent', () => {
  let component: ProductoslaptopComponent;
  let fixture: ComponentFixture<ProductoslaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoslaptopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoslaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
