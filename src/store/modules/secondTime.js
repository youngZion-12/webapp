const secondTime = {
    namespaced: true,
    state:{
        newSalary:'33000',
        bonus:{
            yearMiddle:'200000',
            yearEnd:"660000"
        }
    },
    mutations:{
        improveSalary(state,payload){
            state.newSalary = payload
        },
        improveBone(state,payload){
            state.bonus.yearEnd = payload
        }
    },
    actions:{
        improveBonus(store){
           store.commit('improveBone',1000000)
        }
    }
}


export default secondTime
