/* jslint node: true */
/* eslint-env mocha */
'use strict';

const should = require('should');

let match = require('../');

describe('amqp-match', () => {

	// Constant
	it('should match this.key to this.key (direct equality)', () => {

		match('this.key', 'this.key').should.eql(true);

	});
	it('should not match key to this.key (direct inequality)', () => {

		match('key', 'this.key').should.eql(false);

	});

	// Single word wildcard
	it('should match this.new.key to this.*.key (single word wildcard)', () => {

		match('this.new.key', 'this.*.key').should.eql(true);

	});

	it('should match this.new.key to *.new.key (beginning single word wildcard)', () => {

		match('this.new.key', '*.new.key').should.eql(true);

	});

	it('should match this.new.key to this.new.* (end single word wildcard)', () => {

		match('this.new.key', 'this.new.*').should.eql(true);

	});

	it('should not match this-new.key to this.*.key (single word wildcard)', () => {

		match('this-new.key', 'this.*.key').should.eql(false);

	});

	it('should not match some.new.kinda.key to this.*.key (single word wildcard)', () => {

		match('some.new.kinda.key', 'this.*.key').should.eql(false);

	});

	it('should not match this.new.key.end to this.new.* (end single word wildcard)', () => {

		match('this.new.key.end', 'this.new.*').should.eql(false);

	});

	it('should not match start.this.new.key to *.new.key (beginning single word wildcard)', () => {

		match('start.this.new.key', '*.new.key').should.eql(false);

	});

	// Multi word wildcard

	it('should match this.new.kinda.key to this.#.key (multi word wildcard)', () => {

		match('this.new.kinda.key', 'this.#.key').should.eql(true);

	});

	it('should match this.key to this.#.key (multi word wildcard with empty matching)', () => {

		match('this.key', 'this.#.key').should.eql(true);

	});

	it('should match this.kind.of.key.end to this.kind.of.# (end of key wildcard)', () => {

		match('this.kind.of.key.end', 'this.kind.of.#').should.eql(true);
	});

	it('should match this.kind.of to this.kind.of.# (end of key wildcard without end)', () => {

		match('this.kind.of', 'this.kind.of.#').should.eql(true);
	});

	it('should match this.kind.of.key.end to this.#.key.# (multi wildcard with end of key wildcard)', () => {

		match('this.kind.of.key.end', 'this.#.key.#').should.eql(true);
	});

	it('should match this.kind.of.key.end to this.#.key.# (multi wildcard with end of key wildcard and no end of key)', () => {

		match('this.kind.of.key', 'this.#.key.#').should.eql(true);
	});

	it('should not match wildcard with bad constant parts', () => {

		match('this.kind.of.notkey', 'this.#.key.#').should.eql(false);
	});

	it('should match multi word wildcard at beginning of string', () => {

		match('this.kind.of.key', '#.key').should.eql(true);
	});

	it('should not match multi word wildcard at beginning of string with bad constant part', () => {

		match('this.kind.of.notkey', '#.key').should.eql(false);
	});

	// Mixed

	it('should work on mixed keys', () => {

		match('this.key1.of.key2', '#.key1.*.key2').should.eql(true);
	});
});
