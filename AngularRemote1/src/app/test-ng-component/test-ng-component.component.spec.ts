import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNGComponentComponent } from './test-ng-component.component';

describe('TestNGComponentComponent', () => {
  let component: TestNGComponentComponent;
  let fixture: ComponentFixture<TestNGComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestNGComponentComponent]
    });
    fixture = TestBed.createComponent(TestNGComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
