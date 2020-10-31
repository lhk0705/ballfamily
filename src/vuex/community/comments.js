const state={
    commentId:1
}
const mutations={
    addComment:(state)=>{
        state.commentId++
    }
}
const getters={
    getCommentId:state=>state.commentId
    
}
export default{
    state,mutations,getters
}