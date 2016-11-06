'use strict'

import errorLogExit from 'error-log-exit'

export default getAppDir()

function getAppDir () {
  if (typeof process.cwd !== 'function') {
    errorLogExit('function process.cmd not available', 1)
  }
  return process.cwd()
}
