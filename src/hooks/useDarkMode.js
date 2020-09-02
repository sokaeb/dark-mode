import { useLocalStorage } from './useLocalStorage';
// import { useEffect, useState } from 'react';

export const useDarkMode = (key, initialVal) => {
 const [value, setValue] = useLocalStorage(key, initialVal);
//  const [darkMode, setDarkMode] = useState(false)

//  useEffect(()=> {
//      setValue("darkMode" ? "dark-mode App" : "App")
//  }, [])

//  const toggleMode = e => {
//     e.preventDefault();
//     setValue(!initialVal);
//   };

return [value, setValue]
};