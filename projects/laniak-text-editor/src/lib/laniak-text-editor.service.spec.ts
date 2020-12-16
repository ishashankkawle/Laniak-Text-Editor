import { TestBed } from '@angular/core/testing';

import { LaniakTextEditorService } from './laniak-text-editor.service';

describe('LaniakTextEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaniakTextEditorService = TestBed.get(LaniakTextEditorService);
    expect(service).toBeTruthy();
  });
});
