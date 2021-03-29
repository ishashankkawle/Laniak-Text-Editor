import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaniakTextEditorService 
{
  private EditorId: string = "";
  constructor() 
  {}

  setReference(id: string)
  {
    this.EditorId = id;
  }

  getRawText()
  {
    console.log("EDITORID = " + this.EditorId);
    let element = <HTMLElement>document.getElementById(this.EditorId)?.querySelector('#lan-notepad');
    return element.innerText;
  }

  getFormattedText()
  {
    console.log("EDITORID = " + this.EditorId);
    let element = <HTMLElement>document.getElementById(this.EditorId)?.querySelector('#lan-notepad');
    return element.innerHTML;
  }
}
