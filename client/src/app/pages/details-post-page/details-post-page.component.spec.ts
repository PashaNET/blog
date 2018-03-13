import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostPageComponent } from './details-post-page.component';

describe('DetailsPostPageComponent', () => {
  let component: DetailsPostPageComponent;
  let fixture: ComponentFixture<DetailsPostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
