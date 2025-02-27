import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDefaultComponent } from './product-default.component';

describe('ProductDefaultComponent', () => {
  let component: ProductDefaultComponent;
  let fixture: ComponentFixture<ProductDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
