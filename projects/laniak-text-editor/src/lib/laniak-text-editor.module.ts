import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LaniakTextEditorComponent } from './laniak-text-editor.component';



@NgModule({
  declarations: [LaniakTextEditorComponent],
  imports: [FormsModule],
  exports: [LaniakTextEditorComponent]
})
export class LaniakTextEditorModule { }
