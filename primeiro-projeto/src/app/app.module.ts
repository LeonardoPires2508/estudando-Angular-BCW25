import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  /**
   * declarations, serve para registrar:
   *  - componentes, pipes, diretivas e outras estruturas.
   */
  declarations: [
    AppComponent,
    ProdutoComponent,
    NavbarComponent
  ],
  /**
   * imports serve para registrar outros modulos dentro de outro modulo.
   * 
   * serve exclusivamente para outros modulos
   */
  imports: [
    BrowserModule
  ],
  /**
   * providers, serve para registrar servioços e interceptadores
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
