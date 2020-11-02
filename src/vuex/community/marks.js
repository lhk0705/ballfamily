const state={
    markId:1,
    
}
const mutations={
    addMarkId:(state)=>{
        state.markId++
    },
    
}
const getters={
    getMarkId:state=>state.markId,
    
    
}
export default{
    state,mutations,getters
}