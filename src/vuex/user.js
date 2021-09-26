const state={
    userName:'',
    token:''
}
const mutations={
    // addJoin:(state)=>{
    //     state.joinId++
    // }
    setUser:(state,data)=>{
        state.userName=data
        sessionStorage.setItem('userName',data)
        localStorage.setItem('userName',data)
    },
    autoUser:(state,data)=>{
        state.userName=data;
        localStorage.setItem('userName',JSON.stringify({
            value:data,time:Date.now()+1*1000*60*60*48
        }))
        
    },
    setToken:(state,data)=>{
        state.token=data
        sessionStorage.setItem('token',data)
    }
}
const getters={
    getUser:state=>{
        if(state.userName){return state.userName}
        else if(sessionStorage.getItem('userName')){return sessionStorage.getItem('userName')}
        else if(localStorage.getItem('userName')){
            let data=JSON.parse(localStorage.getItem('userName'))                     
            if(Date.now()>data.time){
            localStorage.removeItem('userName');
            return null;
            }
            return data.value
        }
    },
    getToken:(state)=>{
        if(state.token){
            return state.token
        }else{
            return sessionStorage.getItem('token')
        }
    }
    
}
export default{
    state,mutations,getters
}