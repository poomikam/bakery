import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttComponent } from './aboutt.component';

describe('AbouttComponent', () => {
  let component: AbouttComponent;
  let fixture: ComponentFixture<AbouttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouttComponent]
    });
    fixture = TestBed.createComponent(AbouttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
