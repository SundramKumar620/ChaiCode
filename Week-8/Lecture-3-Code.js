if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = cb(this[i], i);
      result.push(value);
    }

    return result;
  };
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initalValue = undefined) {
    let acc = initalValue || this[0]; // Nullish Col
    const startIndex = initalValue ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }

    return acc;
  };
}

const arr = [1, 2, 3, 4, 5];

arr.myForEach((value, index) =>
  console.log(`At Index: ${index} Value: ${value}`)
);

const trippedArray = arr.myMap((e) => e * 3);
console.log(trippedArray);

const res = arr.reduce(
  (abTakKiValue, currentValue) => abTakKiValue + currentValue
);

const myRes = arr.myReduce(
  (abTakKiValue, currentValue) => abTakKiValue + currentValue
);

console.log({ res, myRes });
----------------------------------------------------------------------------------------------------------------

  class MyPromise {
  constructor(executorFn) {
    this._state = 'pending';
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];

    this.value = undefined;

    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  then(cb) {
    if (this._state == 'fulfilled') {
      console.log(`Apka promise toh pehle hi pura hogya, Run hi kar deta hu`);
      cb(this.value);
      return this;
    }

    this._successCallbacks.push(cb);
    return this;
  }

  catch(cb) {
    if (this._state == 'rejected') {
      console.log(`Apka promise toh pehle hi reject hogya, Run hi kar deta hu`);
      cb();
      return this;
    }
    this._errorCallbacks.push(cb);
    return this;
  }

  finally(cb) {
    if (this._state !== 'pending') {
      cb();
      return this;
    }
    this._finallyCallbacks.push(cb);
    return this;
  }

  resolverFunction(value) {
    console.log(
      `Fullfilling Promise, Running ${this._successCallbacks.length} callbacks`
    );
    this.value = value;
    this._state = 'fulfilled';
    this._successCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb());
  }

  rejectorFunction(err) {
    this._state = 'rejected';
    this._errorCallbacks.forEach((cb) => cb(err));
    this._finallyCallbacks.forEach((cb) => cb());
  }
}

function wait(seconds) {
  return new MyPromise((resolve, reject) => {
    resolve('Hahaha');
  });
   
}



console.log('Registering Callbacks');

wait(5).then((e) => console.log(`V1 Promise Resolved After 5 sec`, e))
  .catch(() => console.log(` V1Rejected after 5 sec`))
  .finally(() => console.log(` V1 Mei toh harr baar chalunga`));

wait(5).then((e) => console.log(`V2 Promise Resolved After 5 sec`, e))
  .catch(() => console.log(`V2 Rejected after 5 sec`))
  .finally(() => console.log(`V2 Mei toh harr baar chalunga`));
