import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-funcionarios',
  templateUrl: './consulta-funcionarios.component.html',
  styleUrls: ['./consulta-funcionarios.component.css']
})
export class ConsultaFuncionariosComponent implements OnInit {

  funcionarios: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get(environment.API_URL + "api/Funcionarios" )
      .subscribe(
        (data) =>{
            this.funcionarios = data as any[]
        }
      )
  }

  onDelete(idFuncionario: string): void{
      if(window.confirm('Deseja Realmente excluir o funcionario?')){
        this.httpClient.delete(environment.API_URL + "api/Funcionarios/" + idFuncionario )
        .subscribe(
          (data: any) => {
            alert(data.mensagem)
            this.ngOnInit()
          }
        )

      }
  }


}
