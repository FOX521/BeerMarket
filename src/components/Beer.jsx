import React from 'react';

class Beer extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <img src='#' alt='Template beer'></img>
                    <p>Name beer</p>
                    <p>pricebeer</p>
                    <p>made country</p>
                    <p>filter</p>
                    <p>dark</p>
                    <button>заказать</button>
                </li>
            </ul>
        )
    }
};

export default Beer;