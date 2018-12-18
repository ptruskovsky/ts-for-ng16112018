import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetItemComponent } from './widget-item.component';

describe('WidgetItemComponent', () => {
  let component: WidgetItemComponent;
  let fixture: ComponentFixture<WidgetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
