import test from 'ava';
import sinon from 'sinon';

import m from './';

let sandbox;

test.beforeEach(() => {
  sandbox = sinon.sandbox.create();
});

test.afterEach.always(() => {
  sandbox.restore();
});

test.serial('should resolve promise with stargazers count', async t => {
  const starsCount = 26021;

  sandbox.stub(m, 'forGithub').returns(Promise.resolve(starsCount));

  const result = await m.forGithub('gulp');
  t.is(result, starsCount);
});

test.serial('should reject promise with an appropriate message', async t => {
  sandbox.stub(m, 'forGithub').returns(Promise.reject(new Error('Repo not found')));

  const error = await t.throws(m.forGithub('not-existing-package'));
  t.is(error.message, 'Repo not found');
});
