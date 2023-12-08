import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMenuComponent } from './liste-menu.component';

describe('ListeMenuComponent', () => {
  let component: ListeMenuComponent;
  let fixture: ComponentFixture<ListeMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeMenuComponent]
    });
    fixture = TestBed.createComponent(ListeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
