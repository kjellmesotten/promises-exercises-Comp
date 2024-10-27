/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise
      .then((value) => {
        resolve(transformer(value));
      })
      .catch((error) => {
        reject(error);
      });

  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 * 
 * 
 * 1 test faalt??
 */
function squarePromise(numberPromise){
  return numberPromise
    .then((value) => {
      if (typeof value === 'number') {
        return value * value;
      }
      else if (typeof value === 'string') {
        const number = Number(value);
        if (isNaN(number)) {throw new Error(`Cannot convert '${value}' to a number!`);}
        else {return number * number;}
      }
      else {
        return `Cannot convert '${value}' to a number!`;
      }
    }).catch((error) => {
      throw error;
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(() => 0);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then((value) => Promise.reject(value), (error) => Promise.resolve(error));
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};