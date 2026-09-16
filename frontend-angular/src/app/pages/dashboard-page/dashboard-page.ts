import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({ selector: 'app-dashboard-page', imports: [RouterLink, CommonModule], templateUrl: './dashboard-page.html', styleUrl: './dashboard-page.css' })
export class DashboardPageComponent {
  modules = [
    { icon: '??', title: 'Acervo', text: 'Cadastre e organize títulos, itens, classes, atores e diretores.', links: [{label:'Títulos', path:'/titulos'}, {label:'Itens', path:'/itens'}] },
    { icon: '??', title: 'Atendimento', text: 'Gerencie clientes, locações, devoluções e consultas.', links: [{label:'Clientes', path:'/clientes'}, {label:'Nova locação', path:'/locacoes'}] },
  ];
}

