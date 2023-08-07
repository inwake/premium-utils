import assert from 'assert'
import {formatDate} from '../index.js'

assert.strictEqual(
  formatDate(new Date(2023, 7, 7),
    '◇', ['year', 'month', 'day']),
  '2023◇8◇7')
