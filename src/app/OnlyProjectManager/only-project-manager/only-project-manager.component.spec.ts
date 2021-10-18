import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyProjectManagerComponent } from './only-project-manager.component';

describe('OnlyProjectManagerComponent', () => {
  let component: OnlyProjectManagerComponent;
  let fixture: ComponentFixture<OnlyProjectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyProjectManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
