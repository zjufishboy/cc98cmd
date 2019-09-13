const myprint = require("./colorOutput")
const dealWithUserInfo =(userInfo,id)=>{
    if(!userInfo){
        myprint("red","账户为["+id+"]的用户不存在","\t错误:","\n")
        return
    }
    myprint("green",userInfo.name,"\t用户cc98昵称：",'\n')
    myprint("green",userInfo.postCount,"\t用户发帖数:","\n")
    myprint("green",userInfo.introduction.replace(new RegExp('\n','g'),"\n\t\t"),"\t用户简介:\n\t\t","\n")
    myprint("green","https://www.cc98.org/user/id/"+id,"\tCC98个人主页:","\n")
//    myprint("green",userInfo.fanCount,"\t用户粉丝数量:","\n")
//    myprint("green",userInfo.followCount,"\t"+(userInfo.gender===0?"她":"他")+'关注的数量：',"\n")
}
dealWithSinglePost =(item)=>{
    myprint("green",item.title,"\t["+item.boardName+"]\t","\n")
}
const dealWithHot=(HotData)=>{
    HotData.map(dealWithSinglePost)
}
const deal={
    dealWithUserInfo,
    dealWithHot
}
module.exports =deal