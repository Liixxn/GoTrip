import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAyudaComponent } from './configuracion-ayuda.component';

describe('ConfiguracionAyudaComponent', () => {
  let component: ConfiguracionAyudaComponent;
  let fixture: ComponentFixture<ConfiguracionAyudaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionAyudaComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
