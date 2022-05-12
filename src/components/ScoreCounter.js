import React from "react";

function ScoreCounter (props) {
    function createCardOrder() {
        const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const newOrder = [];
        /* To generate random numbers */
        for(let i = 0; i < numberArray.length; i += 1) {
            newOrder.push(Math.floor(Math.random() * 12));
        }
        /* To generate the rest of the numbers */
        for(let i = 0; i < numberArray.length; i += 1) {
            const index = newOrder.indexOf(numberArray[i]);
            if(index === -1)
            {
                newOrder.push(numberArray[i]);
            }
        }
        /* This is so we don't have any duplicates */
        const uniqueOrder = [...new Set(newOrder)];
    }
}
export default ScoreCounter;