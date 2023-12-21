import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreTechComponent } from './sobre-tech.component';

describe('SobreTechComponent', () => {
  let component: SobreTechComponent;
  let fixture: ComponentFixture<SobreTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreTechComponent]
    });
    fixture = TestBed.createComponent(SobreTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
