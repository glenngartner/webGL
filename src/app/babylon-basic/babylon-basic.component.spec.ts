import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabylonBasicComponent } from './babylon-basic.component';

describe('BabylonBasicComponent', () => {
  let component: BabylonBasicComponent;
  let fixture: ComponentFixture<BabylonBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabylonBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabylonBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
