import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LaniakTextEditorModule} from 'laniak-text-editor'
import {LaniakTextEditorService} from 'laniak-text-editor'
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    LaniakTextEditorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
