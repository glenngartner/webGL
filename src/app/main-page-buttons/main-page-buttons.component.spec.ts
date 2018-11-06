import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageButtonsComponent } from './main-page-buttons.component';

describe('MainPageButtonsComponent', () => {
  let component: MainPageButtonsComponent;
  let fixture: ComponentFixture<MainPageButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
