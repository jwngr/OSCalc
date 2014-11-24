"use strict";

/**
 * Creates an OSCalc instance.
 *
 * @constructor
 * @this {OSCalc}
 */
/* jshint -W098 */
var OSCalc = function() {
/* jshint +W098 */
  /********************/
  /*  PUBLIC METHODS  */
  /********************/
  /**
   * Returns the sum of two numbers.
   * @param {number} a The first number to add.
   * @param {number} b The second number to add.
   * @return {number} The sum of a and b.
   */
  this.add = function(a, b) {
    return a + b;
  };

  /**
   * Returns the difference between two numbers.
   * @param {number} a The number to subtract from.
   * @param {number} b The number to subtract.
   * @return {number} The difference between a and b.
   */
  this.subtract = function(a, b) {
    return a - b;
  };

  /**
   * Returns the product of two numbers.
   * @param {number} a The first number to multiply.
   * @param {number} b The second number to multiply.
   * @return {number} The product of a and b.
   */
  this.multiply = function(a, b) {
    return a * b;
  };

  /**
   * Returns the quotient of two numbers.
   * @param {number} a The dividend.
   * @param {number} b The divisor.
   * @return {number} The quotient of a and b.
   */
  this.divide = function(a, b) {
    return a / b;
  };
};
