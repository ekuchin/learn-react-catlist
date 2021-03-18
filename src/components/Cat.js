import React from 'react';
import "./cats.css"; 

class Cat extends React.Component {
    constructor(){
        super()
        this.state={likeCount:0}
        this.handleLike = this.handleLike.bind(this)
    }

    handleLike(){
        //console.log("Кот "+ this.props.cat.name + " поглажен.")
        this.setState(
            //{likeCount:14}
            prevState => ({
                likeCount: prevState.likeCount +1
            })
        )
    }

    componentDidMount(){
        //console.log("Cat mounted")
    }
    shouldComponentUpdate(){
        //console.log("Cat updated")
        return true
    }


    render() {

        const catStyle = {
            color: 'blue',
            backgroundColor:'yellow'
        }

        const cat=this.props.cat;
        

        return (
            <div className="catlist">
                <h3 style={catStyle}> {cat.id}: {cat.isAngry ? "Сердитый" : "Приветливый"} {cat.breed} {cat.name}, весом {cat.weight}кг </h3>
                <p>Поглажен {this.state.likeCount} раз</p>
                
                <button onClick={this.handleLike} className="btn btn-primary">Погладь кота, ... </button>
                <br/>
                {cat.isAngry && <p>Когти в печень, никто не вечен</p>}
                <button 
                    onClick={()=>this.props.toggleAngry(cat.id)}
                    className={"btn "+ (cat.isAngry ? "btn-primary" : "btn-cancel")}>
                    {cat.isAngry ? "Успокоить" : "Рассердить"}
                </button>
                <br/><br/>
                <button 
                    onClick={()=>this.props.removeCat(cat.id)}
                    className="btn btn-cancel">
                    Удалить кота
                </button>
            </div>
        )        
    }
  }

export default Cat;