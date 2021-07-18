/**
 * Implementing Promise
 * @state: PENDING, FULFILLED or REJECTED
 * @handlers: stores callbacks of then, catch and finally method
 * Note: Handles will only be executed when a promise  is settled
 * @values: resolve or rejected value
*/

const STATE = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};
class MyPromise {
  constructor(callback) { 
    // Initial state or Pormise is empty
    this.state = STATE.PENDING;
    this.value = undefined;
    this.handlers = [];

    // Invoke callback by passing the _resolve and the _reject function of our class
    try {
      callback(this._resolve, this._reject);
    } catch(err) {
      this._reject(err);
    }
  }

  _resolve = (value) => {
    this.updateResult(value, STATE.FULFILLED);
  };

  _reject = (error) => {
    this.updateResult(error, STATE.REJECTED);
  };

  updateResult(value, state) {
    // This is to make the processing async
    setTimeout(() => {
      /*
        Process the prmise if it is still in a pending state.
        An already rejected or resolved promise is not processed
      */
      if (this.state !== STATE.PENDING) {
        return;
      }

      // Check if value is also a promise
      if (isThenable(value)) {
        
      }
    })
  }

  then(onSuccess, onFail) {};

  catch(onFail){};

  finally(callback){};
}