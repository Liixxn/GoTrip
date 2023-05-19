import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPrivacidadComponent } from './configuracion-privacidad.component';

describe('ConfiguracionPrivacidadComponent', () => {
  let component: ConfiguracionPrivacidadComponent;
  let fixture: ComponentFixture<ConfiguracionPrivacidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionPrivacidadComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionPrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
