import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicLibComponent } from './magic-lib.component';

describe('MagicLibComponent', () => {
  let component: MagicLibComponent;
  let fixture: ComponentFixture<MagicLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
