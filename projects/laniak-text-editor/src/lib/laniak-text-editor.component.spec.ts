import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaniakTextEditorComponent } from './laniak-text-editor.component';

describe('LaniakTextEditorComponent', () => {
  let component: LaniakTextEditorComponent;
  let fixture: ComponentFixture<LaniakTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaniakTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaniakTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
