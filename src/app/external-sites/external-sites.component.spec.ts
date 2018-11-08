import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSitesComponent } from './external-sites.component';

describe('ExternalSitesComponent', () => {
  let component: ExternalSitesComponent;
  let fixture: ComponentFixture<ExternalSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
