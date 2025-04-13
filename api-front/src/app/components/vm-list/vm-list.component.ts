import { Component, OnInit } from '@angular/core';
import { VmService, Vm } from '../../services/vm.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vm-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vm-list.component.html',
  styleUrl: './vm-list.component.css',
})
export class VmListComponent implements OnInit {

  vms: Vm[] = [];

  constructor(private router: Router, private vmService: VmService) {}

  ngOnInit() {
    this.vmService.getAllVms().subscribe(data => {
      this.vms = data;
    });
  }

  goToCreateVM() {
    this.router.navigate(['/register-vm']);
  }

  goTodDashboard() {
    this.router.navigate(['/dashboard']);
  }

  updateStatus(vm: Vm, newStatus: string) {
    const validTransitions = {
      'RUNNING': ['PAUSED', 'STOP'],
      'PAUSED': ['STOP', 'RUNNING'],
      'STOP': ['RUNNING']
    };    

    if (validTransitions[vm.status as keyof typeof validTransitions].includes(newStatus)) {
      const updatedVm = { ...vm, status: newStatus};

      this.vmService.updateVm(updatedVm).subscribe({
        next: () => {
          vm.status = newStatus;
          alert(`Máquina ${vm.displayName} atualizada para ${newStatus}`);
        },
        error: () => {
          alert("Erro ao atualizar a máquina virtual.");
        }
      });
    } else {
      alert("Transição inválida.");
    }
  }

  carregaVms() {
    this.vmService.getAllVms().subscribe(data => {
      this.vms = data;
    });
  }

  deleteVM(vm: Vm) {
    if (vm.codigo === undefined) {
      alert("Erro: VM sem código.");
      return;
    }
  
    if (confirm("Você tem certeza que deseja excluir esta máquina virtual?")) {
      this.vmService.deleteVm(vm.codigo).subscribe({
        next: (res) => {
          alert(res.mensagem); 
          this.carregaVms(); 
        },
        error: (err) => {
          console.error('Erro ao excluir VM:', err);
          alert(typeof err.error === 'string' ? err.error : 'Erro ao excluir a máquina virtual.');
        }
      });
    }
  }
  
  
}
