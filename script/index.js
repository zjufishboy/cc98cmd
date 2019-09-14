#! node
const keypress = require('keypress');
const MyOutPut = require("./utils/utils")
console.log("欢迎使用cc98命令行工具（ctrl+c退出）")
MyOutPut.outputHelp()
keypress(process.stdin);
process.stdin.on('keypress', function (ch, key) {
  //console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    MyOutPut.outputGoodBye()
    process.stdin.pause();
  }
  if(key && key.name == 'down'){
    MyOutPut.outputNextFloor()
  }
  if(key && key.name == 't'){
    console.log("按键t用于测试一些功能")
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();
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
        if(!process.argv[4]){
            console.log('十大头条:')
            MyOutPut.outputHot()
            break;
        }
        else{
            console.log('十大头条:')
            MyOutPut.outputHot()
            break;
        }
    }
    case '-t':{
        console.log('您搜索的帖子为:')
        MyOutPut.outputPost(parseInt(process.argv[3]))
        break;
    }
    case '-T':{
        console.log('您搜索的帖子为:')
        MyOutPut.outputPost(parseInt(process.argv[3]))
        MyOutPut.outputPostFloor(parseInt(process.argv[3]))
        break;
    }
    case '-help':{
        console.log('功能帮助:')
        MyOutPut.outputHelp()
    }
}
//MyOutPut.outputUserInfo(582581)
//MyOutPut.outputHot()