import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTestsComponent } from './material-tests.component';

describe('MaterialTestsComponent', () => {
  let component: MaterialTestsComponent;
  let fixture: ComponentFixture<MaterialTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
