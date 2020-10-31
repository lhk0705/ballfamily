const state={
    siteId:1,
    commentQuantity:'',
    markQuantity:'',
    shareQuantity:''
}
const mutations={
    addSite:(state)=>{
        state.siteId++
    },
    addComment:(state)=>{
        state.commentQuantity++
    },
    addMark:(state)=>{
        state.markQuantity++
    },
    addShare:(state)=>{
        state.shareQuantity++
    },
    setComment:(state,data)=>{
        state.commentQuantity=data
    },
    setMark:(state,data)=>{
        state.markQuantity=data
    },
    setShare:(state,data)=>{
        state.shareQuantity=data
    },
    
}
const getters={
    getSiteId:state=>state.siteId,
    getComment:state=>state.commentQuantity,
    getMark:state=>state.markQuantity,
    getShare:state=>state.shareQuantity,
    
}
export default{
    state,mutations,getters
}