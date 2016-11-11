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

  describe('method to check minimum length is correct', () => {
    let _unameConstraints = {};
    let _unameEl = {};

    beforeEach(() => {
      _unameConstraints = {
        username: { length: { minimum: 5 } }
      };
    });

    afterEach(() => {
      _unameConstraints = {};
      _unameEl = {};
    });

    it('check that username "" is satisfying minimum 5', () => {
      _unameEl = {
        username: ""
      };

      expect(_validation.isMinLenExpected(_unameEl, _unameConstraints)).toBe(true);
    });

    it('check that username "ashwin" is satisfying minimum 5', () => {
      _unameEl = {
        username: "ashwin"
      };

      expect(_validation.isMinLenExpected(_unameEl, _unameConstraints)).toBe(true);
    });

    it('check that username "ash" is satisfying minimum 5', () => {
      _unameEl = {
        username: "ash"
      };

      expect(_validation.isMinLenExpected(_unameEl, _unameConstraints)).toBe(false);
    });
  });

	describe('method to check maximum length is correct', () => {
    let _unameConstraints = {};
    let _unameEl = {};

    beforeEach(() => {
      _unameConstraints = {
        username: { length: { maximum: 20 } }
      };
    });

    afterEach(() => {
      _unameConstraints = {};
      _unameEl = {};
    });

    it('check that username "the text is more than 19 characters" is satisfying maximum 20', () => {
      _unameEl = {
        username: "the text is more than 19 characters"
      };

      expect(_validation.isMaxLenExpected(_unameEl, _unameConstraints)).toBe(false);
    });

    it('check that username "some short text" is satisfying maximum 20', () => {
      _unameEl = {
        username: "some short text"
      };

      expect(_validation.isMaxLenExpected(_unameEl, _unameConstraints)).toBe(true);
    });
  });

});
