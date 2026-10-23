import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SessaoService } from '../../services/sessao.service';

@Component({
  selector: 'app-nova-colecao',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './nova-colecao.html',
  styleUrl: './nova-colecao.css'
})
export class NovaColecao {

  nome = '';
  descricao = '';
  visibilidade = 'publica';
  pesquisa = '';

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {
  }

  criarColecao(): void {

    if (this.nome.trim() === '') {
      alert('Digite o nome da coleção.');
      return;
    }

    const colecao = {
      idUsuario: SessaoService.idUsuario(),
      titulo: this.nome.trim(),
      descricao: this.descricao.trim(),
      visibilidade: this.visibilidade,
      dataCriacao: new Date().toISOString()
    };

    this.apiService.criarColecao(colecao).subscribe({
      next: () => {
        alert('Coleção criada com sucesso!');
        this.router.navigate(['/colecoes']);
      },

      error: erro => {
        console.error('Erro ao criar coleção:', erro);
        alert('Não foi possível criar a coleção.');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/colecoes']);
  }

  voltar(): void {
    this.router.navigate(['/colecoes']);
  }

}