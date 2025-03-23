import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSetDialogComponent } from './custom-set-dialog.component';

describe('CustomSetDialogComponent', () => {
  let component: CustomSetDialogComponent;
  let fixture: ComponentFixture<CustomSetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSetDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
