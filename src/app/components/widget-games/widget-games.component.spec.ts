import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGamesComponent } from './widget-games.component';

describe('WidgetGamesComponent', () => {
  let component: WidgetGamesComponent;
  let fixture: ComponentFixture<WidgetGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
