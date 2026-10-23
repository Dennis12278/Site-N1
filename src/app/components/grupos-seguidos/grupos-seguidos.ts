import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';

interface GrupoSeguido {
  nome: string;
  iniciais: string;
  membros: number;
  publicacoes: number;
  titulos: number;
  seguidoHa: string;
}

@Component({
  selector: 'app-grupos-seguidos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent
  ],
  templateUrl: './grupos-seguidos.html',
  styleUrl: './grupos-seguidos.css'
})
export class GruposSeguidos {

  pesquisa: string = '';

  ordenacao: string = 'Recentes';


  /* =========================================
     GRUPOS SEGUIDOS
  ========================================= */

  grupos: GrupoSeguido[] = [

    {
      nome: 'Temple Scan',
      iniciais: 'TS',
      membros: 0,
      publicacoes: 10254,
      titulos: 282,
      seguidoHa: '4 segundos'
    }

  ];


  constructor(private router: Router) {}


  /* =========================================
     NAVEGAÇÃO
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
     ORDENAÇÃO
  ========================================= */

  selecionarOrdenacao(tipo: string): void {

    this.ordenacao = tipo;

  }


  /* =========================================
     GRUPOS FILTRADOS
  ========================================= */

  get gruposFiltrados(): GrupoSeguido[] {

    let resultado = [...this.grupos];


    /* PESQUISA */

    if (this.pesquisa.trim() !== '') {

      const texto =
        this.pesquisa.toLowerCase().trim();

      resultado = resultado.filter(grupo =>
        grupo.nome.toLowerCase().includes(texto)
      );

    }


    /* ORDEM ALFABÉTICA */

    if (this.ordenacao === 'A-Z') {

      resultado.sort((a, b) =>
        a.nome.localeCompare(b.nome)
      );

    }


    return resultado;

  }


  /* =========================================
     DEIXAR DE SEGUIR
  ========================================= */

  deixarDeSeguir(grupo: GrupoSeguido): void {

    const confirmar =
      confirm(
        `Deseja deixar de seguir o grupo ${grupo.nome}?`
      );

    if (!confirmar) {
      return;
    }


    this.grupos =
      this.grupos.filter(
        item => item !== grupo
      );

  }

}
