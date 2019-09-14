const tools =require("./getInfo")
const deal =require("./deal")
const outputUserInfo=(id)=>{
    tools.getUserInfo(id,deal.dealWithUserInfo)
}
const outputHot =()=>{
    tools.getHotInfo(deal.dealWithHot)
}
const outputPost =(id)=>{
    tools.getPostInfo(id,deal.dealWithPostDetail,dealwithState)
}
let state={
    floor:0,
    id:0,
    finish:0
}
const dealwithState=(i)=>{
    state.finish=i
}
const dealWithFinish=()=>{
    if(state.floor==state.finish){
        process.stdout.write("\t楼层已经浏览完，请按ctrl+c退出进程\n")
        console.log("\t--------------------------------------------------")
    }
    else{
        process.stdout.write("\tdown:浏览下一层/ctrl+c退出进程\n")
        console.log("\t--------------------------------------------------")
    }
}
const outputPostFloor =(id)=>{
    state.floor=0
    state.id=id
    tools.getPostReply(id,deal.dealWithPostFloor,state.floor,dealWithFinish)
}
const outputNextFloor =()=>{
    if(state.id==0){
        return
    }
    state.floor=state.floor+1
    process.stdout.write("\033[1A\033[K\033[1A\033[K"); //先回到上一行
    tools.getPostReply(state.id,deal.dealWithPostFloor,state.floor,dealWithFinish)
    
}
const outputLastFloor =()=>{
    state.floor=state.floor-1
    tools.getPostReply(state.id,deal.dealWithPostFloor,state.floor)
}
const outputHelp =()=>{
    deal.dealWithHelp()
}
const outputGoodBye=()=>{
    deal.dealWithGoodBye()
}
const MyOutPut={
    outputUserInfo,
    outputHot,
    outputPost,
    outputPostFloor,
    outputNextFloor,
    outputHelp,
    outputGoodBye
}
module.exports =MyOutPut