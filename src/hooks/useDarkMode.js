import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialVal) => {
 const [value, setValue] = useLocalStorage(key, initialVal);


 // state we want to control
//  check if the value is true or false
 useEffect(()=> {
     if(value === true){
     document.body.classList.toggle("dark-mode")
    } 
    else if (value === false){
        document.body.classList.toggle("dark-mode")
    }
 }, [value])



return [value, setValue]
};