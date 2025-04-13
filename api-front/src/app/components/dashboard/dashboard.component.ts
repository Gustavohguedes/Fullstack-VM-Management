import { Component, AfterViewInit } from '@angular/core';
import { VmService, Vm } from '../../services/vm.service';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  vms: Vm[] = [];

  constructor(private router: Router, private vmService: VmService) {}

  ngAfterViewInit(): void {
    this.vmService.getAllVms().subscribe(data => {
      this.vms = data;
      this.renderCharts();
    });
  }

  //navegação
  goTodListVm() {
    this.router.navigate(['/list-vms']);
  }

  renderCharts() {
    const running = this.vms.filter(vm => vm.status === 'RUNNING').length;
    const paused = this.vms.filter(vm => vm.status === 'PAUSED').length;
    const stopped = this.vms.filter(vm => vm.status === 'STOP').length;

    new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['RUNNING', 'PAUSED', 'STOP'],
        datasets: [{
          label: 'Status das VMs',
          data: [running, paused, stopped],
          backgroundColor: ['#4CAF50', '#FFC107', '#F44336']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const labels = ['RUNNING', 'PAUSED', 'STOP'];
                const label = labels[context.dataIndex];
                const value = context.raw;
                return `${label}: ${value} máquinas`;
              }
            }
          },
          legend: { display: false }
        }
      }
    });

    new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['VMs Cadastradas', 'Vagas Restantes'],
        datasets: [{
          data: [this.vms.length, 5 - this.vms.length],
          backgroundColor: ['#2196F3', '#9E9E9E']
        }]
      }
    });
  }
}
