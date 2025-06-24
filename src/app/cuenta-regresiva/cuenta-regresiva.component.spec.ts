import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaRegresivaComponent } from './cuenta-regresiva.component';

describe('CuentaRegresivaComponent', () => {
  let component: CuentaRegresivaComponent;
  let fixture: ComponentFixture<CuentaRegresivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentaRegresivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaRegresivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
