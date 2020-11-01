const state={
    joinId:1
}
const mutations={
    addJoin:(state)=>{
        state.joinId++
    }
}
const getters={
    getJoinId:state=>state.joinId
    
}
export default{
    state,mutations,getters
}