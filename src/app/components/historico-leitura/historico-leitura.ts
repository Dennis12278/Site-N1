import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';

interface Leitura {

  titulo: string;

  capa: string;

  lidoHa: string;

  progresso: number;

}

@Component({

  selector: 'app-historico-leitura',

  standalone: true,

  imports: [

    CommonModule,

    SidebarComponent

  ],

  templateUrl: './historico-leitura.html',

  styleUrl: './historico-leitura.css'

})

export class HistoricoLeitura {

  leituras: Leitura[] = [];

  paginaAtual: number = 0;


  constructor(

    private router: Router

  ) {}


  /* =========================================
     MENU LATERAL
  ========================================= */

  irParaMeuPerfil(): void {

    this.router.navigate(['/meu-perfil']);

  }


  irParaTitulosSeguidos(): void {

    this.router.navigate(['/titulos-seguidos']);

  }


  irParaUsuariosSeguidos(): void {

    this.router.navigate(['/usuarios-seguidos']);

  }


  irParaGruposSeguidos(): void {

    this.router.navigate(['/grupos-seguidos']);

  }


  irParaHistorico(): void {

    this.router.navigate(['/historico-leitura']);

  }


  irParaColecoes(): void {

    this.router.navigate(['/colecoes']);

  }


  irParaNotificacoes(): void {

    this.router.navigate(['/notificacoes']);

  }


  irParaMinhasPublicacoes(): void {

    this.router.navigate(['/minhas-publicacoes']);

  }


  irParaConfiguracoes(): void {

    this.router.navigate(['/configuracoes']);

  }


  /* =========================================
     NAVEGAÇÃO DO HISTÓRICO
  ========================================= */

  paginaAnterior(): void {

    if (this.paginaAtual > 0) {

      this.paginaAtual--;

    }

  }


  proximaPagina(): void {

    this.paginaAtual++;

  }


  abrirMenu(): void {

    console.log('Menu do histórico');

  }


  /* =========================================
     ABRIR LEITURA
  ========================================= */

  abrirLeitura(leitura: Leitura): void {

    console.log('Abrindo leitura:', leitura.titulo);

  }

}
