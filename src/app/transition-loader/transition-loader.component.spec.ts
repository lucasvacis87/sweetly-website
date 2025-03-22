import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionLoaderComponent } from './transition-loader.component';

describe('TransitionLoaderComponent', () => {
  let component: TransitionLoaderComponent;
  let fixture: ComponentFixture<TransitionLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
