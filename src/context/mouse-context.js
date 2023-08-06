import React, { useState } from "react";

const MouseContext = React.createContext({
    isMousePressed: false,
    mouseButtonDownHandler: () => {},
    mouseButtonUpHandler: () => {}
});

export default MouseContext;

export const MouseContextProvider = (props) => {

    const [isMousePressed,setIsMousePressed] = useState(false);

    const mouseButtonDownHandler = () => {
        setIsMousePressed(true);
    };
    
    const mouseButtonUpHandler = () => {
        setIsMousePressed(false);
    };

    return (
        <MouseContext.Provider value={{
            isMousePressed,
            mouseButtonDownHandler,
            mouseButtonUpHandler
        }}>
            {props.children}
        </MouseContext.Provider>
    )
};