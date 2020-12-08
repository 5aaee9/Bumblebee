
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { parseCidr } from './ip'


test('IPCidr', () => {
    assert.equal(parseCidr('127.0.0.0', 8), {
        begin: '127.0.0.0',
        end: '127.255.255.255',
    })

    assert.equal(parseCidr('127.0.0.1', 8), {
        begin: '127.0.0.0',
        end: '127.255.255.255',
    })
})

test.run();
