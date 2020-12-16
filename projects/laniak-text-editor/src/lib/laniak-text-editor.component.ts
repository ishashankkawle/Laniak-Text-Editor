import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lan-text-editor',
  templateUrl: './laniak-text-editor.component.html',
  styleUrls: ['./laniak-text-editor.component.css']
})
export class LaniakTextEditorComponent implements OnInit {

  notepad: any;
  fontColor = '#008800';
  highlightColor = '#ffffff';

  constructor() { }

  ngOnInit() {
    this.notepad = document.getElementById('notepad');
  }

  makeBold() {
    document.execCommand('bold', false);
  }

  makeItalic() {
    document.execCommand('italic', false);
  }

  makeUnderLine() {
    document.execCommand('underline', false);
  }

  makeStrikeThrough() {
    document.execCommand('strikeThrough', false);
  }

  alignLeft() {
    document.execCommand('justifyLeft', false);
  }

  alignCenter() {
    document.execCommand('justifyCenter', false);
  }

  alignRight() {
    document.execCommand('justifyRight', false);
  }

  copy() {
    document.execCommand('copy');
  }

  cut() {
    document.execCommand('cut');
  }

  setFontColor() {
    document.execCommand('foreColor', false);
  }

  setHighLightColor() {
    document.execCommand('hiliteColor', false, this.highlightColor);
  }

  subScript() {
    document.execCommand('subscript', false);
  }

  superScript() {
    document.execCommand('superscript', false);
  }

  increaseSize() {
    document.execCommand('increaseFontSize', false);
  }

  clearData()
  {
    this.notepad.innerText = ""
  }
}
