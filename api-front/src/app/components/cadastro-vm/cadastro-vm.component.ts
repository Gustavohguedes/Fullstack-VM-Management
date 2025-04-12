import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-vm',
  templateUrl: './cadastro-vm.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./cadastro-vm.component.css']
})
export class CadastroVmComponent {
  novaVm = {
    displayName: '',
    memory: 0,
    cpu: 0,
    status: 'RUNNING' // sempre inicia como RUNNING
  };

  erro = '';

  constructor(private router: Router) {}

  cadastrarVm() {
    const vms = JSON.parse(localStorage.getItem('vms') || '[]');

    if (vms.length >= 10) {
      this.erro = 'Limite de 5 máquinas virtuais atingido!';
      return;
    }

    if (this.novaVm.displayName.length < 5) {
      this.erro = 'O nome precisa ter no mínimo 5 caracteres.';
      return;
    }

    vms.push(this.novaVm);
    localStorage.setItem('vms', JSON.stringify(vms));
    this.router.navigate(['/']);
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
