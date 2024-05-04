import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanteriaComponent } from './estanteria.component';

describe('EstanteriaComponent', () => {
  let component: EstanteriaComponent;
  let fixture: ComponentFixture<EstanteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstanteriaComponent]
    });
    fixture = TestBed.createComponent(EstanteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
