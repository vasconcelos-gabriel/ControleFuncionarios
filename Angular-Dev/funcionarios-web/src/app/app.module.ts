import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CadastroFuncionariosComponent } from './pages/cadastro-funcionarios/cadastro-funcionarios.component'
import { EdicaoFuncionariosComponent } from './pages/edicao-funcionarios/edicao-funcionarios.component';
import { ConsultaFuncionariosComponent } from './pages/consulta-funcionarios/consulta-funcionarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consulta-funcionarios'},
  { path: 'cadastro-funcionarios', component: CadastroFuncionariosComponent},
  { path: 'consulta-funcionarios', component: ConsultaFuncionariosComponent},
  { path: 'edicao-funcionarios/:idFuncionario', component: EdicaoFuncionariosComponent}
]

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroFuncionariosComponent,
    ConsultaFuncionariosComponent,
    EdicaoFuncionariosComponent,
    ConsultaFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
