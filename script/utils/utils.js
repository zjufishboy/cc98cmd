const tools =require("./getInfo")
const deal =require("./deal")
const outputUserInfo=(id)=>{
    tools.getUserInfo(id,deal.dealWithUserInfo)
}
const outputHot =()=>{
    tools.getHotInfo(deal.dealWithHot)
}
const MyOutPut={
    outputUserInfo,
    outputHot
}
module.exports =MyOutPut