export const setFont = {
    main: "font-family: 'Lato', sans-serif;",
    slanted: "font-family: 'Courgette', cursive;"
  };
  
  export const setRem = (number = 16) => {
    return `${number / 16}rem`;
  };
  
  export const setLetterSpacing = (number = 2) => {
    return `letter-spacing:${number}px`;
  };
  
  export const setShadow = {
    light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
    dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
    darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
  };
  
  export const setBorder = ({
    width = "2px",
    style = "solid",
    color = "black"
  } = {}) => {
    return `border:${width} ${style} ${color}`;
  };
  
  export const setTransition = ({
    property = "all",
    time = "0.7s",
    timing = "ease-in-out"
  } = {}) => {
    return `transition:${property} ${time} ${timing}`;
  };
  
  export const setFlex = ( {x = 'center', y='center' } = {} ) => {
    return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setMargin = ({
  top = "0",
  right = "0",
  bottom = "0",
  left = "0"
} = {}) => {
  return `margin:${top} ${right} ${bottom} ${left}`;
};