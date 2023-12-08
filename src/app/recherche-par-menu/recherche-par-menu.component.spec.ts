import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParMenuComponent } from './recherche-par-menu.component';

describe('RechercheParMenuComponent', () => {
  let component: RechercheParMenuComponent;
  let fixture: ComponentFixture<RechercheParMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParMenuComponent]
    });
    fixture = TestBed.createComponent(RechercheParMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
