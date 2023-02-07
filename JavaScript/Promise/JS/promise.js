//自定义Promise函数




function Promise(executor){

    //自定义属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性 异步执行时保存属性
    //this.callback = {}; //指定单个回调
    this.callbacks = []; //指定多个回调
    //保存实例对象的 this 的值
    const _this = this;

    //resolve函数
    function resolve(data){
        //由于PromiseState的值只能修改一次所以需要判断是否已经修改
        if(_this.PromiseState !== 'pending') return;
        //修改对象状态
        _this.PromiseState = 'fulfilled'; //resolved
        //修改对象值
        _this.PromiseResult = data;
        //执行时对象中有onResolved需要 调用成功的回调函数
        _this.callbacks.forEach(element => {
             element.onResolved(data);
        });
           
    };

    //reject函数
    function reject(data){
        //由于PromiseState的值只能修改一次所以需要判断是否已经修改
        if(_this.PromiseState !== 'pending') return;
        //修改对象状态
        _this.PromiseState = 'rejected'; 
        //修改对象值
        _this.PromiseResult = data;
        // 有onReject 调用失败的回调函数
        // if(_this.callback.onReject){
        //     _this.callback.onReject(data);
        // }
        _this.callbacks.forEach(element => {
            element.onRejected(data);
       });
    };

    try{
        //同步调用执行器函数
        executor(resolve, reject);
        
    }catch(e){
        reject(e);
    }
};


// then 方法
Promise.prototype.then = function(onResolved, onRejected){

    const _this = this;
    //判断回调函数参数
    if(typeof onRejected !== 'function'){
       onRejected = reason =>{
           throw reason;
       }
    }

    if(typeof onResolved !== 'function'){
        onResolved = value => value;
    }
    return new Promise((resolve, reject)=>{

        // 封装函数
        function callback(type){
            try {
                let result = type(_this.PromiseResult);
                if(result instanceof Promise){
                    //如果是 Promise 类型的对象， 根据类型返回相对应的状态值
                    result.then(r=>{
                        resolve(r);
                    }, v=>{
                        reject(v);
                    })
                }else{
                    //如果 不是 Promise 类型的对象，这返回成功
                    resolve(result);
                }
            } catch (e) {
                // 如果是 throw 'error' 则 catch 并 reject 返回失败值
                reject(e);
            }
        }
        
        //调用回调函数 PromiseState决定状态
        if(this.PromiseState === 'fulfilled'){
            callback(onResolved);
            //try {
            //    let result = onResolved(this.PromiseResult);
            //    if(result instanceof Promise){
            //        //如果是 Promise 类型的对象， 根据类型返回相对应的状态值
            //        result.then(r=>{
            //            resolve(r);
            //        }, v=>{
            //            reject(v);
            //        })
            //    }else{
            //        //如果 不是 Promise 类型的对象，这返回成功
            //        resolve(result);
            //    }
            //} catch (e) {
            //    // 如果是 throw 'error' 则 catch 并 reject 返回失败值
            //    reject(e);
            //}
        }
        if (this.PromiseState === 'rejected') {
            callback(onRejected);
            //try {
            //    let result = onRejected(this.PromiseResult);
            //    if(result instanceof Promise){
            //        result.then(v=>{
            //            resolve(v);
            //        }, r=>{
            //            reject(r);
            //        })
            //    }else{
            //        reject(result);
            //    }
            //} catch (error) {
            //    reject(error)
            //}

        }
        // promiseState 为 pending 时 需要保存onResolved和onReject
        if(this.PromiseState === 'pending'){
            
            this.callbacks.push({
                onResolved: function(){
                    callback(onResolved);
                    //try {
                    //    let result = onResolved(_this.PromiseResult);
                    //    if(result instanceof Promise){
                    //        //判断是否是Promise对象 是的话resolve， 不是就reject
                    //        result.then(r=>{
                    //            resolve(r);
                    //        }, v=>{
                    //            reject(v);
                    //        });
                    //    }else{
                    //        //非 Promise对象 返回成功
                    //        resolve(result);
                    //    }
                    //} catch (error) {
                    //    reject(error);
                    //}
                },
                onRejected: function(){
                    callback(onRejected)
                    //try {
                    //    // onRejected(_this.PromiseResult);
                    //    let result = onReject(_this.PromiseResult);
                    //    if(result instanceof Promise){
                    //        //判断是否是Promise对象 是的话resolve， 不是就reject
                    //        result.then(r=>{
                    //            resolve(r);
                    //        }, v=>{
                    //            reject(v);
                    //        });
                    //    }else{
                    //        //非 Promise对象 返回成功
                    //        resolve(result);
                    //    }
                    //} catch (e) {
                    //    reject(e);
                    //}   
                }
            })
        }
    });
    
}

// catch方法
Promise.prototype.catch = function(onRejected){
    return this.then(undefined, onRejected);
}

//添加 resolve 方法
Promise.resolve = function(value){
    return new Promise((resolve,reject)=>{
        if(value instanceof Promise){
            value.then(v=>{
                resolve(v);
            }, r=>{
                reject(r)
            })
        }else{
            //状态设置成功
            resolve(value);
        }
    })
    
}

//添加 reject 方法  Promise.reject()不管传入什么都是rejected
Promise.reject = function(reason){
    return new Promise((resolve,reject)=>{
        reject(reason);
    })
    
}

// Promise.all 方法

Promise.all = function (promises) {
    //返回结果为Promise对象
    return new Promise((resolve, reject)=>{
        //声明变量
        let count = 0;
        let arr = [];
        //遍历
        for(let i=0; i<promises.length; i++){
            
            promises[i].then(v=>{
                // 走这里 得知对象的状态时成功
                //每个Promise对象 都成功 count+1
                count++;
                // 返回的成功的值加入数组
                arr[i] = v;
                //判断成功的对象是否跟数组长度一样
                if(count === promises.length){
                    //修改状态
                    resolve(arr);
                }
            }, r=>{
                reject(r);
            })
        }

    })
}

// Promise.race() 方法

Promise.race = function(promises){
    return new Promise((resolve, reject)=>{
        for(let i=0; i<promises.length; i++){
            promises[i].then(v=>{
                //修改返回对象成功的状态的对象为成功，谁先执行就改变为相应的状态
                resolve(v);
            }, r=>{
                //修改返回对象失败的状态为失败
                reject(r);
            })
        }
    })
}
