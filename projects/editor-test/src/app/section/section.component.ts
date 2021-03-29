import { Component, OnInit } from '@angular/core';
import { LaniakTextEditorService } from 'laniak-text-editor';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers:[LaniakTextEditorService]
})
export class SectionComponent implements OnInit {

  constructor( private lanservice1: LaniakTextEditorService , private lanservice2: LaniakTextEditorService) 
  { 
    this.lanservice1.setReference('editor1');
    this.lanservice2.setReference('editor2');
  }

  ngOnInit(): void {
  }

  Display1()
  {
    console.log(this.lanservice1.getFormattedText());
  }
  
  Display2()
  {
    console.log(this.lanservice2.getFormattedText());
  }
}
