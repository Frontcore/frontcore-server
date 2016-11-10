import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Validation from '../validation';

describe('Validation utility module', () => {

  let _validation = {};

  beforeEach(() => {
    _validation = new Validation();
  });

  afterEach(() => {
    _validation = {};
  });

  describe('class & instance', () => {
    it('check that an object is an instance of Validation class', () => {
      expect(_validation).toBeInstanceOf(Validation);
    });
  });

  describe('method to check value is empty', () => {
    it('check for single space', () => {
      expect(_validation.isEmpty('')).toBe(true);
    });

    it('check for multiple spaces', () => {
      expect(_validation.isEmpty('  ')).toBe(true);
    });

    it('check that non-empty', () => {
      expect(_validation.isEmpty('Ashwin')).toBe(false);
    });
  });

  describe('method to check email is correct', () => {
    let _emailFormatConstraints = {};
    let _emailEl = {};

    beforeEach(() => {
      _emailFormatConstraints = {
        email: {
          email: true
        }
      };
    });

    afterEach(() => {
      _emailFormatConstraints = {};
      _emailEl = {};
    });

    it('check that email "ashwin"', () => {
      _emailEl = {
        email: "ashwin"
      };

      expect(_validation.isEmail(_emailEl, _emailFormatConstraints)).toBe(false);
    });

    it('check that email "ashwin.hegde"', () => {
      _emailEl = {
        email: "ashwin.hegde"
      };

      expect(_validation.isEmail(_emailEl, _emailFormatConstraints)).toBe(false);
    });

    it('check that email "ashwin.hegde3@"', () => {
      _emailEl = {
        email: "ashwin.hegde3@"
      };

      expect(_validation.isEmail(_emailEl, _emailFormatConstraints)).toBe(false);
    });

    it('check that email "ashwin.hegde3@gmail"', () => {
      _emailEl = {
        email: "ashwin.hegde3@gmail"
      };

      expect(_validation.isEmail(_emailEl, _emailFormatConstraints)).toBe(false);
    });

    it('check that email "ashwin.hegde3@gmail.com"', () => {
      _emailEl = {
        email: "ashwin.hegde3@gmail.com"
      };

      expect(_validation.isEmail(_emailEl, _emailFormatConstraints)).toBe(true);
    });
  });
});
