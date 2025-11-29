import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.bienvenida')?.textContent).toContain('Bienvenido');
  });

  it('should have two main buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('.botones .btn');
    expect(buttons.length).toBe(2);
  });
});