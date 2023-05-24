import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaRealizadaComponent } from './reserva-realizada.component';

describe('ReservaRealizadaComponent', () => {
  let component: ReservaRealizadaComponent;
  let fixture: ComponentFixture<ReservaRealizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaRealizadaComponent]
    });
    fixture = TestBed.createComponent(ReservaRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
