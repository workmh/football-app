import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGrillaComponent } from './navbar-grilla.component';

describe('NavbarGrillaComponent', () => {
  let component: NavbarGrillaComponent;
  let fixture: ComponentFixture<NavbarGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarGrillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
