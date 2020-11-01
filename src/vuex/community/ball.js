const state={
    ballId:1,
    ballPeople:''
}
const mutations={
    addBall:(state)=>{
        state.ballId++
    },
    addPeople:(state)=>{
        state.ballPeople++
    },
    setPeople:(state,data)=>{
        state.ballPeople=data
    }
}
const getters={
    getBallId:state=>state.ballId,
    getPeople:state=>state.ballPeople,
    
}
export default{
    state,mutations,getters
}