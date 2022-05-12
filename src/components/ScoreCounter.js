import React from "react";

function ScoreCounter (props) {
    function createCardOrder() {
        const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const newOrder = [];
        /* To generate random numbers */
        for(let i = 0; i < numberArray.length; i += 1) {
            newOrder.push(Math.floor(Math.random() * 12));
        }
       
    }
}
export default ScoreCounter;