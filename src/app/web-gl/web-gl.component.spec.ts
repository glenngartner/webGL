import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGLComponent } from './web-gl.component';

describe('WebGLComponent', () => {
  let component: WebGLComponent;
  let fixture: ComponentFixture<WebGLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebGLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
