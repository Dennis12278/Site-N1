import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5031';

  constructor(private http: HttpClient) {
  }

  listarDocumentos(publicado?: boolean) {
    const filtro = publicado === undefined ? '' : '?publicado=' + publicado;
    return this.http.get<any[]>(this.apiUrl + '/Documento' + filtro);
  }

    cadastrar(dados: { nome: string; email: string; senha: string }) {
    return this.http.post<any>(this.apiUrl + '/Auth/Cadastrar', dados);
  }

  login(dados: { email: string; senha: string }) {
    return this.http.post<any>(this.apiUrl + '/Auth/Login', dados);
  }

  criarDocumento(documento: FormData) {
    return this.http.post(this.apiUrl + '/Documento', documento);
  }

  editarDocumento(id: number, documento: FormData) {
    return this.http.put(this.apiUrl + '/Documento/' + id, documento);
  }

  obterDocumento(id: number) {
    return this.http.get<any>(this.apiUrl + '/Documento/' + id);
  }

  listarDocumentosDoUsuario(idUsuario: number) {
    return this.http.get<any[]>(this.apiUrl + '/Documento?idUsuario=' + idUsuario);
  }

  excluirDocumento(id: number) {
    return this.http.delete(this.apiUrl + '/Documento/' + id);
  }

  urlCapa(capa: string | null): string {
    if (!capa) {
      return '';
    }

    if (capa.startsWith('data:')) {
      return capa;
    }

    return this.apiUrl + capa;
  }

  listarNotificacoes() {
    return this.http.get<any[]>(this.apiUrl + '/Notificacao');
  }

  lerNotificacao(id: number) {
    return this.http.put(
      this.apiUrl + '/Notificacao/Ler/' + id,
      {}
    );
  }

  listarColecoes() {
    return this.http.get<any[]>(
      this.apiUrl + '/Colecao'
    );
  }

  criarColecao(colecao: any) {
    return this.http.post(
      this.apiUrl + '/Colecao',
      colecao
    );
  }

  editarColecao(colecao: any) {
    return this.http.put(
      this.apiUrl + '/Colecao',
      colecao
    );
  }

  excluirColecao(id: number) {
    return this.http.delete(
      this.apiUrl + '/Colecao/' + id
    );
  }
}
