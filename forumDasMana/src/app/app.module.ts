import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common'; /* scroll da tela */

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './editar/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './deletar/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './editar/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './deletar/postagem-delete/postagem-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy, 
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
