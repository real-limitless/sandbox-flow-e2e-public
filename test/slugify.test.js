import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('slugifies basic text', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
  assert.equal(slugify('FooBar'), 'foobar');
});

test('slugifies input with spaces', () => {
  assert.equal(slugify('  Multiple   Spaces  Here '), 'multiple-spaces-here');
});

test('slugifies punctuation into a single hyphen', () => {
  assert.equal(slugify('Hello, World! -- Test'), 'hello-world-test');
  assert.equal(slugify('a/b/c'), 'a-b-c');
});

test('returns empty string for empty input', () => {
  assert.equal(slugify(''), '');
  assert.equal(slugify('   '), '');
  assert.equal(slugify(null), '');
});
