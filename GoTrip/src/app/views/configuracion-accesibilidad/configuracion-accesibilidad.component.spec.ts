import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAccesibilidadComponent } from './configuracion-accesibilidad.component';

describe('ConfiguracionAccesibilidadComponent', () => {
  let component: ConfiguracionAccesibilidadComponent;
  let fixture: ComponentFixture<ConfiguracionAccesibilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionAccesibilidadComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionAccesibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
