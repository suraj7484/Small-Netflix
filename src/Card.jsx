import React from 'react';
import Images from './images';

function Card(props) {
    return (
        <> 
            <div className="cards">
                <div className="card">
                    <Images imgsrc = {props.imgsrc} />
                    <div className="card__info">
                        <h3 className="card__title" >{props.sname}</h3>
                        <span className="card__category" > {props.title} </span>
                        <a className = 'btn' href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Card;