import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDoctaComponent } from './login-docta.component';

describe('LoginDoctaComponent', () => {
  let component: LoginDoctaComponent;
  let fixture: ComponentFixture<LoginDoctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDoctaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDoctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
