const state={
    userName:''
}
const mutations={
    // addJoin:(state)=>{
    //     state.joinId++
    // }
    setUser:(state,data)=>{
        state.userName=data
        sessionStorage.setItem('userName',data)
    },
    autoUser:(state,data,expire)=>{
        state.userName=data;
        let exp=Date.now()+expire*1000*60
        localStorage.setItem('userName',JSON.stringify({
            value:data,time:exp
        }))
        
    }
}
const getters={
    getUser:state=>{
        if(state.userName){return state.userName}
        else if(sessionStorage.getItem('userName')){return sessionStorage.getItem('userName')}
        // else{
        //     let data=JSON.parse(localStorage.getItem('userName'))
            
        //     if(Date.now()>data.time){
        //     localStorage.removeItem('userName');
        //     return null;
        //     }
        //     return data.value
        // }
    }
    
}
export default{
    state,mutations,getters
}