'use strict'

import errLogExit from 'error-log-exit'
import { resolve } from 'path'

export default getAppDir()

function getAppDir () {
  if (typeof process !== 'object' || typeof process.cwd !== 'function') {
    errLogExit('function process.cmd not available', 1)
  }
  return resolve(process.cwd())
}

