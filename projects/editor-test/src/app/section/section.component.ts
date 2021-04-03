import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { publicApiObjct } from 'projects/laniak-text-editor/src/lib/I_laniak-public-api';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements  AfterViewInit

{

  @ViewChild('editor1') ed1: publicApiObjct | undefined
  @ViewChild('editor2') ed2: publicApiObjct | undefined

  constructor() 
  { 
  }

  ngAfterViewInit()
  {
    this.ed2?.setTheme("dark");
  }
  Display1()
  {
    console.log(this.ed1?.getRawText());
  }
  
  Display2()
  {
    console.log(this.ed2?.getFormattedText());
  }
}
