import './SingleCard.css'

export function SingleCard (props) {
    return (
        <>
        <li key={props.id}>
        <div className = "card">
          <img src = {props.image} alt = "img"/>
          <div className = "container" >
          <h4 > <b> {props.name} </b></h4 >
          <p> Автор: {props.author} </p> 
          </div> 
          </div>
          </li>
          </>
    );
}

