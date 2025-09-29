// MyPromise.js

// 先定义三个常量表示状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// 新建MyPromise类
class MyPromise {
	constructor(executor) {
		// executor 是一个执行器，进入会立即执行
		// 并传入resolve和reject方法
		executor(this.resolve, this.reject);
	}

	// 储存状态的变量，初始值是 pending
	status = PENDING;
	// 成功之后的值
	value = null;
	// 失败之后的原因
	reason = null;
	// 存储成功回调函数
	// onFulfilledCallback = null;
	onFulfilledCallbacks = [];
	// 存储失败回调函数
	// onRejectedCallback = null;
	onRejectedCallbacks = [];
	// 更改成功后的状态 用箭头函数就可以让this指向当前实例对象
	resolve = value => {
		// 只有状态是等待，才执行状态修改
		if (this.status === PENDING) {
			// 状态修改为成功
			this.status = FULFILLED;
			// 保存成功之后的值
			this.value = value;
			// 将所有成功的回调全部拿出来执行
			while (this.onFulfilledCallbacks.length) {
				this.onFulfilledCallbacks.shift()(value);
			}
		}
	};

	// 更改失败后的状态
	reject = reason => {
		// 只有状态是等待，才执行状态修改
		if (this.status === PENDING) {
			// 状态成功为失败
			this.status = REJECTED;
			// 保存失败后的原因
			this.reason = reason;
			// resolve里面将所有失败的回调拿出来执行
			while (this.onRejectedCallbacks.length) {
				this.onRejectedCallbacks.shift()(reason);
			}
		}
	};

	then(onFulfilled, onRejected) {
		// 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
		const promise = new MyPromise((resolve, reject) => {
			// 判断状态
			if (this.status === FULFILLED) {
				// 调用成功回调,并把值返回
				const x = onFulfilled(this.value);
				// 传入 resolvePromise 集中处理
				resolvePromise(x, resolve, reject);
			} else if (this.status === REJECTED) {
				// 调用失败回调，并把原因返回
				onRejected(this.reason);
			} else if (this.status === PENDING) {
				// 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
				// 等到执行成功失败函数的时候再传递
				this.onFulfilledCallbacks.push(onFulfilled);
				this.onRejectedCallbacks.push(onRejected);
			}
		});

		return promise;
	}
}

function resolvePromise(x, resolve, reject) {
	if (x instanceof MyPromise) {
		// 执行 x，调用 then 方法，目的是将其状态变为 fulfilled 或者 rejected
		x.then(
			value => resolve(value),
			reason => reject(reason)
		);
	} else {
		resolve(x);
	}
}
