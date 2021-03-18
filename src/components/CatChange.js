import React from 'react';
import "./cats.css"; 

class CatChange extends React.Component {
    constructor(){
        super()
        this.state={name:"Мурзик", breed: "Манул", weight:10, isAngry:true}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const target = event.target
        const value = target.type==="checkbox" ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        //console.log(this.state);
        this.props.addCat(this.state)
        event.preventDefault();
    }

    render(){
        return(
        <form className="catlist" onSubmit={this.handleSubmit}>
            <h3>Форма добавления кота</h3>
            <input
                type="text"
                placeholder="Имя котика"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
            />
            <br/>
            
            <label>
                <input
                    type="radio"
                    value="Манул"
                    checked={this.state.breed === "Манул"}
                    onChange={this.handleChange}
                    name="breed"
                />Манул
            </label>
            <label>
                <input
                    type="radio"
                    value="Сфинкс"
                    checked={this.state.breed === "Сфинкс"}
                    onChange={this.handleChange}
                    name="breed"
                />Сфинкс
            </label>
            <label>
                <input
                    type="radio"
                    value="Британец"
                    checked={this.state.breed === "Британец"}
                    onChange={this.handleChange}
                    name="breed"
                />Британец
            </label>

            <br/>
            <select 
                value={this.state.weight}
                onChange={this.handleChange}
                name="weight"
            >
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="10">10</option>
            </select>
            <br/>

            <label>
            <input
                type="checkbox"
                name="isAngry"
                checked={this.state.isAngry}
                onChange={this.handleChange}
            /> Кот сердит
            </label>
            <br/>

            <input className="btn btn-primary" type="submit" value="Добавить кота"/>
            
        </form>
        
        
        )
    }
}
export default CatChange;