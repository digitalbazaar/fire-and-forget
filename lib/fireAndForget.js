/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
import noopLogger from './noopLogger.js';

export function fireAndForget({
  errorMessage = 'An error occured.',
  logger = noopLogger,
  promise
}) {
  promise.catch(error => logger.error(
    errorMessage, {error}
  ));
}
