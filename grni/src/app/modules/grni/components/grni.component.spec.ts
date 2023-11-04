import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrniComponent } from './grni.component';

describe('GrniComponent', () => {
  let component: GrniComponent;
  let fixture: ComponentFixture<GrniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrniComponent]
    });
    fixture = TestBed.createComponent(GrniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
