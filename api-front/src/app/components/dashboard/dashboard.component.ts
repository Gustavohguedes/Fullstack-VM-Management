import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Dados simulados — em breve vamos conectar com o back-end
    const vms = [
      { displayName: "vm1", cpu: 2, memory: 1024, status: "RUNNING" },
      { displayName: "vm2", cpu: 1, memory: 512, status: "PAUSED" },
      { displayName: "vm3", cpu: 4, memory: 2048, status: "STOP" },
      { displayName: "vm4", cpu: 2, memory: 1024, status: "RUNNING" },
    ];

    const running = vms.filter(vm => vm.status === 'RUNNING').length;
    const paused = vms.filter(vm => vm.status === 'PAUSED').length;
    const stopped = vms.filter(vm => vm.status === 'STOP').length;

    // Gráfico de Barras
    
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
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#000' // muda a cor dos textos do eixo X
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#000'
            }
          }
        }
      }
    });
    
    

    // Gráfico de Pizza
    const total = vms.length;
    const limite = 5;
    new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['VMs Cadastradas', 'Vagas Restantes'],
        datasets: [{
          data: [total, limite - total],
          backgroundColor: ['#2196F3', '#9E9E9E']
        }]
      }
    });
  }
}
