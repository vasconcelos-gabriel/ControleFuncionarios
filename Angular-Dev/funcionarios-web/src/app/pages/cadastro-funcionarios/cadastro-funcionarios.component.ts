import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
selector: 'app-cadastro-funcionarios',
templateUrl: './cadastro-funcionarios.component.html',
styleUrls: ['./cadastro-funcionarios.component.css']
})
export class CadastroFuncionariosComponent implements OnInit {

  mensagem_cadastro: string= '';

constructor(
  private httpClient: HttpClient

) { }

ngOnInit():  void {
  }

  formCadastro = new FormGroup({ //formulário
    //campo
    nome: new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(150)
    ]),
    //campo
    cpf: new FormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(11)
    ]),
    //campo
    matricula: new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(10)
    ]),
    //campo
    dataAdmissao: new FormControl('', [
    Validators.required
    ])
    });
    //função utilizada para exibir os erros de validação
    //dos campos na página HTML
    get form(): any {
    return this.formCadastro.controls;
    }
    //chamar a api p cadstrar funcionaario
    onSubmit() : void{

      this.httpClient.post(environment.API_URL + "api/Funcionarios", this.formCadastro.value)
          .subscribe(
            (data: any) => {
                this.mensagem_cadastro = data.mensagem;
                this.formCadastro.reset()
            }
          )

    }
    }

