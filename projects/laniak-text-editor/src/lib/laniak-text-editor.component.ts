import { Component, ElementRef, AfterViewInit , ViewChild, Renderer2  } from '@angular/core';

@Component({
  selector: 'lan-text-editor',
  templateUrl: './laniak-text-editor.component.html',
  styleUrls: ['./laniak-text-editor.component.css'],
})
export class LaniakTextEditorComponent implements AfterViewInit {

  notepad: any;
  fontColor = '#008800';
  highlightColor = '#ffffff';
  isLightTheme = true;
  @ViewChild('contentEditor')editorElementRef: any;
  themeLightSVG = '<svg width="12px" height="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 302.4 302.4" style="enable-background:new 0 0 302.4 302.4;" xml:space="preserve"><g><g><g><path d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z" /><path d="M151.2,51.6c5.6,0,10.4-4.8,10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4c-5.6,0-10.4,4.8-10.4,10.4v30.8C140.8,46.8,145.6,51.6,151.2,51.6z" /><path d="M236.4,80.8l22-22c4-4,4-10.4,0-14.4s-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4C225.6,84.8,232,84.8,236.4,80.8z" /><path d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4C302.4,145.6,297.6,140.8,292,140.8z" /><path d="M236,221.6c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0s4-10.4,0-14.4L236,221.6z" /><path d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8C161.6,255.6,156.8,250.8,151.2,250.8z" /><path d="M66,221.6l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22c4-4,4-10.4,0-14.4C76.8,217.6,70.4,217.6,66,221.6z" /><path d="M51.6,151.2c0-5.6-4.8-10.4-10.4-10.4H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.8,10.4,10.4,10.4h30.8C46.8,161.6,51.6,156.8,51.6,151.2z" /><path d="M66,80.8c4,4,10.4,4,14.4,0s4-10.4,0-14.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4L66,80.8z" /></g></g></g></svg>';
  themeDarkSVG = '<svg  width="12px" height="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 312.812 312.812" style="enable-background:new 0 0 312.812 312.812;" xml:space="preserve"><g><g><path d="M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z" /></g></g></svg>'

  constructor(private elementRef: ElementRef) 
  { 

  }

  ngAfterViewInit() 
  {
    this.notepad = this.editorElementRef.nativeElement;
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

  triggerFontColorPicker()
  {
    document.getElementById('lan-font-col-picker')?.click();
  }

  triggerHighlightColorPicker()
  {
    document.getElementById('lan-highlight-col-picker')?.click();
  }

  copy() {
    document.execCommand('copy');
  }

  cut() {
    document.execCommand('cut');
  }

  setFontColor() {
    document.execCommand('foreColor', false , this.fontColor);
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

  themeSwitch()
  {
    this.isLightTheme = !this.isLightTheme;
    console.log("isLightTheme = " + this.isLightTheme)
    if(this.isLightTheme)
    {
      console.log("LIGHT");
      this.elementRef.nativeElement.style.setProperty('--lan-background', '#FFF');
      this.elementRef.nativeElement.style.setProperty('--lan-border-color', '#d3d3d3');
      this.elementRef.nativeElement.style.setProperty('--lan-content-box-border', '#eeeeee');
      this.elementRef.nativeElement.style.setProperty('--lan-color', '#000');
      this.elementRef.nativeElement.style.setProperty('--lan-default-font', 'Arial');
      this.elementRef.nativeElement.style.setProperty('--lan-theme-color', 'blue');
      let element = document.getElementById('lan-theme-switch') as HTMLElement
      if(element) element.innerHTML = this.themeDarkSVG;
    }
    else
    {
      console.log("DARK");
      this.elementRef.nativeElement.style.setProperty('--lan-background', '#121212');
      this.elementRef.nativeElement.style.setProperty('--lan-border-color', '#646464');
      this.elementRef.nativeElement.style.setProperty('--lan-content-box-border', '#c9c1c1');
      this.elementRef.nativeElement.style.setProperty('--lan-color', '#d4d4d4');
      this.elementRef.nativeElement.style.setProperty('--lan-default-font', 'Arial');
      this.elementRef.nativeElement.style.setProperty('--lan-theme-color', 'orange');
      let element = document.getElementById('lan-theme-switch')
      if(element) element.innerHTML = this.themeLightSVG;

    }
  }

  clearData()
  {
    this.notepad.innerText = ""
  }
}
