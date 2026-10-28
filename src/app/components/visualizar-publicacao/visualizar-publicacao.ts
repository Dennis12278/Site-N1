import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SessaoService } from '../../services/sessao.service';

@Component({
  selector: 'app-visualizar-publicacao',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './visualizar-publicacao.html',
  styleUrl: './visualizar-publicacao.css'
})
export class VisualizarPublicacao implements OnInit {

  publicacao: any = null;

  carregando = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.carregando = false;
      return;
    }

    this.apiService.obterDocumento(id).subscribe({

      next: publicacao => {

        this.publicacao = publicacao;
        this.carregando = false;

        // registra a leitura no histórico do usuário logado
        const usuario = SessaoService.usuario();

        if (usuario) {
          this.apiService.registrarLeitura(usuario.id, publicacao.id).subscribe({
            error: erro => console.error('Erro ao registrar leitura:', erro)
          });
        }

        this.changeDetectorRef.detectChanges();

      },

      error: erro => {

        console.error('Erro ao buscar publicação:', erro);

        this.carregando = false;

        this.changeDetectorRef.detectChanges();

      }

    });

  }

  urlCapa(capa: string | null): string {
    return this.apiService.urlCapa(capa);
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

}
