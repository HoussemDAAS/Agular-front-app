import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlatComponent } from './add-plat.component';

describe('AddPlatComponent', () => {
  let component: AddPlatComponent;
  let fixture: ComponentFixture<AddPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlatComponent]
    });
    fixture = TestBed.createComponent(AddPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
