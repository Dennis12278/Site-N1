import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css'
})
export class UserMenuComponent {

  @Output() fecharMenu = new EventEmitter<void>();

  constructor(private router: Router) {}

  // ==============================
  // FECHAR MENU
  // ==============================
  fechar(): void {
    this.fecharMenu.emit();
  }

  // ==============================
  // MEU PERFIL
  // ==============================
  irParaMeuPerfil(): void {
    this.fecharMenu.emit();
    this.router.navigate(['/meu-perfil']);
  }

  // ==============================
  // TÍTULOS SEGUIDOS
  // ==============================
  irParaTitulosSeguidos(): void {
    this.fecharMenu.emit();
    this.router.navigate(['/titulos-seguidos']);
  }

  // ==============================
  // MINHAS PUBLICAÇÕES
  // ==============================
  irParaMinhasPublicacoes(): void {
    this.fecharMenu.emit();
    this.router.navigate(['/minhas-publicacoes']);
  }

  // ==============================
  // CONFIGURAÇÕES
  // ==============================
  irParaConfiguracoes(): void {
    this.fecharMenu.emit();
    this.router.navigate(['/configuracoes']);
  }

  // ==============================
  // PERFIL PÚBLICO
  // ==============================
  irParaPerfilPublico(): void {
    this.fecharMenu.emit();
    this.router.navigate(['/perfil-publico']);
  }
}