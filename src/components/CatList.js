import React from 'react';
import Cat from "./Cat.js"
//import catsData from "../data/catsData.js"
import CatChange from './CatChange.js';

import {connect} from "react-redux"
import {add, remove} from "../store/store.js"

class CatList extends React.Component {
    constructor(){
        super()
        this.state={
            //cats:catsData,
            isLoading:true
        }
        this.toggleAngry = this.toggleAngry.bind(this)
        //this.addCat = this.addCat.bind(this)
        //this.removeCat = this.removeCat.bind(this)
    }
    
    toggleAngry(id){
        //console.log(id)

        this.setState(prevState => {
            const updatedCats = prevState.cats.map(cat => {
                if (cat.id === id){
                    return {
                        ...cat,
                        isAngry: !cat.isAngry
                    }
                }
                else{
                    return cat
                }
            })
            //console.log(updatedCats)
            return {cats:updatedCats}
        })

    }

    componentDidMount(){
         setTimeout(()=>{
            this.setState(
                {isLoading:false}
            )
        }, 500)
    }
    
    shouldComponentUpdate(){       
        //console.log("CatList should update")
        //console.log(this.state)
        return true
    }

    componentDidUpdate(){
        //console.log("CatList did update")
        //console.log(this.state)
    }

    render() {
        if (this.state.isLoading){
            return <h1>Подождите, котики загружаются</h1>
        }
        const catArray = this.props.cats.map(cat =>
            <Cat
                key={cat.id}
                cat={cat}
                toggleAngry={this.toggleAngry}
                removeCat={this.props.remove}
            />)
        
        return(
            <div>
                <h1>Это список котов</h1>
                {catArray}
                <CatChange addCat={this.props.add}/>
            </div>
        )
    }
}

export default connect(state => ({cats: state}), {add,remove})(CatList)