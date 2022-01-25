import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EonrealityComponent } from './eonreality.component';

describe('EonrealityComponent', () => {
  let component: EonrealityComponent;
  let fixture: ComponentFixture<EonrealityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EonrealityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EonrealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
