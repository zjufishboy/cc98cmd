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
const tools={
    getUserInfo,
    getHotInfo
}
module.exports =tools