/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
import {fireAndForget} from '../lib/main.js';

describe('Export Tests', () => {
  it(`should properly export function from main.js`, async () => {
    (typeof fireAndForget === 'function').should.be.true;
  });
});
