/*jslint node: true */
'use strict';

const should = require('should');

let match = require('../');

describe('amqp-match', () => {

  it('should match this.key to this.key (direct equality)', () => {

    match('this.key', 'this.key').should.eql(true);

  });

  it('should match this.new.key to this.*.key (single word wildcard)', () => {

    match('this.new.key', 'this.*.key').should.eql(true);

  });

  it('should not match this.new.other.key to this.*.key (single word wildcard)', () => {

    match('this.new.other.key', 'this.*.key').should.not.eql(true);

  });

  it('should match this.new.kinda.key to this.#.key (multi word wildcard)', () => {

    match('this.new.kinda.key', 'this.#.key').should.eql(true);

  });

  it('should not match some.new.kinda.key to this.#.key (single word wildcard)', () => {

    match('some.new.kinda.key', 'this.#.key').should.not.eql(true);

  });

});