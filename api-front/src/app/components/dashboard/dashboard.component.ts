import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  totalVMs = 6;
  limiteVMs = 10;

  ngAfterViewInit(): void {
    this.renderBarChart();
    this.renderPieChart();
  }

  renderBarChart(): void {
    const barCanvas = document.getElementById('barChart') as HTMLCanvasElement;

    new Chart(barCanvas, {
      type: 'bar',
      data: {
        labels: ['RUNNING', 'PAUSED', 'STOP'],
        datasets: [{
          label: 'Quantidade de VMs',
          data: [3, 2, 1], // você pode passar os dados reais dinamicamente depois
          backgroundColor: ['#4CAF50', '#FFC107', '#F44336']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }

  renderPieChart(): void {
    const pieCanvas = document.getElementById('pieChart') as HTMLCanvasElement;

    new Chart(pieCanvas, {
      type: 'pie',
      data: {
        labels: ['Máquinas Criadas', 'Espaço Disponível'],
        datasets: [{
          data: [this.totalVMs, this.limiteVMs - this.totalVMs],
          backgroundColor: ['#2196F3', '#9E9E9E']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}
