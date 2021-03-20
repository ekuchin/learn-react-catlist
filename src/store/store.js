import {createStore} from "redux"

const initialStore = [
        {id:1, name:"Мурзик", breed: "Манул", weight:10, isAngry:true},
        {id:2, name:"Рамзес", breed: "Сфинкс", weight:2, isAngry:true},
        {id:3, name:"Эдуард", breed: "Британец", weight:5, isAngry:false}
    ]

export function add(cat) {
    return {
        type: "ADD_CAT",
        payload:cat
    }
}

export function remove(id) {
    return {
        type: "REMOVE_CAT",
        payload:id
    }
}

function reducer(state = initialStore, action) {
    switch(action.type) {
        case "ADD_CAT":
            const newId=state[state.length-1].id+1
            const idCat = {...action.payload, id:newId}
            return [...state, idCat]
        case "REMOVE_CAT":
            return state.filter(cat => cat.id !==action.payload)  
        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store