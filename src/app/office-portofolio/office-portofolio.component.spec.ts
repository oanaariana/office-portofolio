import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePortofolioComponent } from './office-portofolio.component';

describe('OfficePortofolioComponent', () => {
  let component: OfficePortofolioComponent;
  let fixture: ComponentFixture<OfficePortofolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficePortofolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePortofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
