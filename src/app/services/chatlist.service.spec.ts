import { TestBed } from '@angular/core/testing';

import { ChatlistService } from './chatlist.service';

describe('ChatlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatlistService = TestBed.get(ChatlistService);
    expect(service).toBeTruthy();
  });
});
