const state={
    storeId:1,
    stores:[]
}
const mutations={
    addStore:(state)=>{
        state.storeId++
    },
    setStore:(state,data)=>{
        state.stores=data;
        sessionStorage.setItem('stores',data.join(''))
    }
    
}
const getters={
    getStore:state=>state.storeId,
    getStores:state=>{
        if(state.stores){
            return state.stores
        }else{
            return sessionStorage.getItem('stores').split('')
        }
    }
    
}
export default{
    state,mutations,getters
}