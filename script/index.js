#! node
const info = require('./info/info')
const MyPrint =require("./utils/colorOutput") 
const MyOutPut = require("./utils/utils")
console.log("欢迎使用cc98命令行工具")

switch(process.argv[2]){
    case '-d':{
        console.log('开发者信息:')
        MyOutPut.outputUserInfo(582581)
        break;
    }
    case '-u':{
        console.log('您搜索的用户为:')
        MyOutPut.outputUserInfo(parseInt(process.argv[3]))
        break;
    }
    case '-h':{
        console.log('十大头条:')
        MyOutPut.outputHot()
        break;
    }
}
//MyOutPut.outputUserInfo(582581)
//MyOutPut.outputHot()