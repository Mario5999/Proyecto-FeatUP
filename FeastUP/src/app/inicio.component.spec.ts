import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
  declarations: [InicioComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login when onLogin is called', () => {
    const router = TestBed.inject(RouterTestingModule);
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.onLogin();
    expect(navigateSpy).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should navigate to register when onRegister is called', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.onRegister();
    expect(navigateSpy).toHaveBeenCalledWith(['/auth/register']);
  });
});