import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vm-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vm-list.component.html',
  styleUrl: './vm-list.component.css',
})

export class VmListComponent {

  vms = [
    { displayName: "vm1", cpu: 2, memory: 1024, status: "RUNNING" },
    { displayName: "vm2", cpu: 1, memory: 512, status: "PAUSED" },
    { displayName: "vm3", cpu: 4, memory: 2048, status: "STOP" }
  ];

  constructor(private router: Router) {}

  goToCreateVM() {
    this.router.navigate(['/cadastrar-vm']);
  }

  goTodDashboard() {
    this.router.navigate(['/dashboard']);
  }

  updateStatus(vm: any, newStatus: string) {
    const validTransitions = {
      'RUNNING': ['PAUSED', 'STOP'],
      'PAUSED': ['STOP', 'RUNNING'],
      'STOP': ['RUNNING']
    };

    if (validTransitions[vm.status as keyof typeof validTransitions].includes(newStatus)) {
      vm.status = newStatus;
      alert(`Ação: Alterado para ${newStatus}`);
    } else {
      alert("Transição inválida.");
    }
  }

  ngOnInit() {
    const dados = localStorage.getItem('vms');
    this.vms = dados ? JSON.parse(dados) : [];
  }

  deleteVM(vm: any) {
    const confirmDelete = confirm(`Deseja excluir ${vm.displayName}?`);
    if (confirmDelete) {
      this.vms = this.vms.filter(v => v !== vm);
    }
  }
}

