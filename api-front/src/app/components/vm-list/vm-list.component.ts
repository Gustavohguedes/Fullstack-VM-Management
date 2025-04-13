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
    this.router.navigate(['/cadastrar-vm']);
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
      vm.status = newStatus;
      alert(`Ação: Alterado para ${newStatus}`);
    } else {
      alert("Transição inválida.");
    }
  }

  deleteVM(vm: Vm) {
    const confirmDelete = confirm(`Deseja excluir ${vm.displayName}?`);
    if (confirmDelete) {
      this.vms = this.vms.filter(v => v !== vm);
    }
  }
}
