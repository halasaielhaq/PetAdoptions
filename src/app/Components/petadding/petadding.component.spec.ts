import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaddingComponent } from './petadding.component';

describe('PetaddingComponent', () => {
  let component: PetaddingComponent;
  let fixture: ComponentFixture<PetaddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetaddingComponent]
    });
    fixture = TestBed.createComponent(PetaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
