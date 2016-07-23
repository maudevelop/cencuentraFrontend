/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LogsignComponent } from './logsign.component';

describe('Component: Logsign', () => {
  it('should create an instance', () => {
    let component = new LogsignComponent();
    expect(component).toBeTruthy();
  });
});
