import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LaniakTextEditorModule} from 'laniak-text-editor'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LaniakTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
