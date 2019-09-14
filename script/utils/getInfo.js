const api =require("./api")
const fetch = require('node-fetch')
const getUserInfo=async(id,callback)=>{
    fetch(api.userInfo+id)
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            return false
        }

    })
    .then(res=>{callback(res,id)})

}
const getHotInfo =async(callback)=>{
    fetch(api.hot)
    .then(res=>res.json())
    .then(res=>{callback(res)})
}
const getPostInfo =async(id,callback,otherCallBack)=>{
    fetch(api.topic+id)
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            return false
        }

    })
    .then(res=>{callback(res,id);return res})
    .then(res=>{otherCallBack(res.replyCount)})
}
const getPostReply=async(id,callback,floor,otherCallBack)=>{
    fetch(api.topic+id+`/post?from=${floor}&size=1`)
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            return false
        }

    })
    .then(res=>{callback(res,id)})
    .then(res=>{otherCallBack()})
}
const tools={
    getUserInfo,
    getHotInfo,
    getPostInfo,
    getPostReply
}
module.exports =tools