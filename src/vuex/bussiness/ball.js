const state={
    ballId:1
}
const mutations={
    addBall:(state)=>{
        state.ballId++
    }
}
const getters={
    getBallId:state=>state.ballId
    
}
export default{
    state,mutations,getters
}