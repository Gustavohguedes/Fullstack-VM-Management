import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VmService, Vm } from '../../services/vm.service';

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
    ram: 0,
    cpu: 0,
    status: 'RUNNING' // sempre inicia como RUNNING
  };

  erro = '';

  constructor(private vmService: VmService, private router: Router) {}

  listVms() {
    this.router.navigate(['/list-vms']);
  }

  cadastrarVm() {
    this.vmService.createVm(this.novaVm).subscribe({
      next: () => {
        alert("Máquina virtual criada com sucesso!");
        this.router.navigate(['/list-vms']);
      },
      error: (err) => {        
        this.erro = err.error || 'Erro ao criar a máquina virtual.';
      }
    })
  }
 
}
