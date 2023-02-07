//1.向module.exports 对象上挂载 name
module.exports.name = 'hewei'
//2.向module.exports对象上挂载方法 sayHi()
module.exports.sayHi = function(name) {
    console.log('你好'+name);
}

//3.让module.exports指向一个全新的对象
module.exports = {
    nickname:'xiaohe',
    sayHi(){
        console.log('Hi');
    }
}

// module.exports 等价于 exports

//使用require方法导入模块时，导入的结果，永远以module.exports指向的对象为准

// 谨记，最终以module.exports为准