import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVmComponent } from './cadastro-vm.component';

describe('CadastroVmComponent', () => {
  let component: CadastroVmComponent;
  let fixture: ComponentFixture<CadastroVmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroVmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
