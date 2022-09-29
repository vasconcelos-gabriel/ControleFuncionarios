import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-edicao-funcionarios',
  templateUrl: './edicao-funcionarios.component.html',
  styleUrls: ['./edicao-funcionarios.component.css']
})
export class EdicaoFuncionariosComponent implements OnInit {

  mensagem_sucesso: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    var idFuncionario = this.activatedRoute.snapshot.paramMap.get('idFuncionario') as string
    this.httpClient.get(environment.API_URL + "api/Funcionarios/" + idFuncionario )
    .subscribe(
      (data: any) => {
        this.formEdicao.patchValue(data)

        this.formEdicao.controls['dataAdmissao'].setValue(
          formatDate(data.dataAdmissao as Date, 'yyyy-MM-dd', 'en')
        )
      }
    )
  }
  formEdicao = new FormGroup({ //formulário
    //campo
    idFuncionario: new FormControl(),

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
    get form(): any {
      return this.formEdicao.controls;
      }

    onSubmit(): void {
        this.httpClient.put(environment.API_URL + "api/Funcionarios", this.formEdicao.value)
        .subscribe(
          (data: any) => {
            this.mensagem_sucesso = data.mensagem;
          }
        )
    }

}
