const myprint = require("./colorOutput")
const dealWithUserInfo =(userInfo,id)=>{
    if(!userInfo){
        myprint("red","账户为["+id+"]的用户不存在","\t错误:","\n")
        return
    }
    myprint("green",userInfo.name,"\t用户cc98昵称：",'\n')
    myprint("green",userInfo.postCount,"\t用户发帖数:","\n")
    myprint("green",
    (userInfo.introduction ? 
        userInfo.introduction.replace(new RegExp('\n','g'),"\n\t\t")
        : 
        "[*]该用户未设置个人签名"),
        "\t用户简介:\n\t\t","\n")
    myprint("green","https://www.cc98.org/user/id/"+id,"\tCC98个人主页:","\n")
//    myprint("green",userInfo.fanCount,"\t用户粉丝数量:","\n")
//    myprint("green",userInfo.followCount,"\t"+(userInfo.gender===0?"她":"他")+'关注的数量：',"\n")
}
dealWithSinglePost =(item,num)=>{
    myprint("blue",item.id,'\t[',']')
    myprint("green",item.title,"["+num+"]["+item.boardName+"]\t","\n")
}
dealWithSinglePostFloor =(item,num)=>{
    console.log("\t--------------------------------------------------")
    myprint("green",item.content.replace(new RegExp('\n','g'),"/"),"\t["+item.floor+"]\t","\n")
    myprint("green",item.userName+`${item.isLZ?"(楼主)":""}`,"\t[用户]\t","\n")
    myprint("yellow",item.likeCount,"\t[赞]","")
    myprint("red",item.dislikeCount,"\t[踩]","\n")
    myprint("blue",item.id,"\t[帖子id(用于操作)]","\n")
    console.log("\t--------------------------------------------------")
}
const dealWithPostFloor=(floorData)=>{
    floorData.map(dealWithSinglePostFloor)
}
const dealWithHot=(HotData)=>{
    HotData.map(dealWithSinglePost)
}
const dealWithPostDetail=(PostData,id)=>{
    myprint("green",PostData.title,   "\t[标题  ]\t","\n")
    myprint("green",PostData.userName,"\t[发帖人]\t","("+PostData.userId+")\n")
    myprint("yellow",PostData.likeCount,  "\t[赞]","")
    myprint("red",PostData.dislikeCount,     "\t[踩]","\n")
}
const dealWithHelp=()=>{
    myprint("green","查看开发者信息",   "\t[-d]\t","\n")
    myprint("green","获取当前十大信息","\t[-h]\t","\n")
    myprint("green","搜索当前用户id的账户信息",   "\t[-u]\t","\n")
    myprint("green","获取当前id的帖子信息","\t[-t]\t","\n")
    myprint("green","获取当前id的帖子的详细信息",   "\t[-T]\t","\n")
    myprint("green","功能帮助","\t[-help]\t","\n")    
}
const dealWithGoodBye=()=>{
    let GoodBye =[
        "GoodBye!",
        "My CC98 , My Home!",
        "祝前辈科研顺利",
        "今天也要元气满满！",
        "欢迎来我的博客留言呀"
    ]
    let hour = new Date().getHours();
    if(parseInt(hour)>20){
        GoodBye.push("晚上好")
    }
    else if(parseInt(hour)>23){
        GoodBye.push("别刷了，快睡吧")
    }
    else if(parseInt(hour)<6){
        GoodBye.push("起的太早了，再睡会吧")
    }
    let time = new Date().getTime();
    let x =parseInt(time)%GoodBye.length
    myprint("green",GoodBye[x],"*再见*\t","\n")    
}
const deal={
    dealWithUserInfo,
    dealWithHot,
    dealWithPostDetail,
    dealWithPostFloor,
    dealWithHelp,
    dealWithGoodBye
}
module.exports =deal