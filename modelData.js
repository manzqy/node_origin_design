//引入模块
const fs = require('fs')
const path = require('path')


//数据处理方法  //暴露处理方法
//因为处理数据的方法很多，我们都需要对外暴露，所以我们使用一个对象来处理
module.exports = {
    //获取所有的英雄数据
    getAllHero(callback) {
        fs.readFile(path.join(__dirname, './heros.json'), 'utf8', (err, data) =>{
            if(err) return callback(err)
            callback(null,data)
        })
    },
    getOneHero(id,callback) {
        this.getAllHero((err,data)=>{
            if(err) return callback(err)
            //因为读取的数据是一个字符串形式的数组，转换成一个真正的数组
            let heroArr = JSON.parse(data)
            let obj;
            heroArr.some(item=>{   //item表示数组中的每一个项
                if(id == item.id) {
                    obj = item
                }
            }) 
            callback(null,obj)
        })
    }
}




