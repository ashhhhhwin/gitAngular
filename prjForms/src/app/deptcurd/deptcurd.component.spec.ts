import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptcurdComponent } from './deptcurd.component';

describe('DeptcurdComponent', () => {
  let component: DeptcurdComponent;
  let fixture: ComponentFixture<DeptcurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptcurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptcurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
