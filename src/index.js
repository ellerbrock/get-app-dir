'use strict'

import errorLogExit from 'error-log-exit'

export default getAppDir()

function getAppDir () {
  if (typeof process !== 'object' || typeof process.cwd !== 'function') {
    console.log(typeof process)
    errorLogExit('function process.cmd not available', 1)
  }
  return process.cwd()
}
