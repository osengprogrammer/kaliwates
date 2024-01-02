"use client"
import { useThemeContext } from '@/context/ThemeContext';
import useToggle from '@/hooks/useToggle';


function Accordion() {

    const {theme, toggleTheme} = useThemeContext()

   const {status: expand, toggleStatus: toggleExpand} = useToggle()
   console.log(theme)
    
  return (
    <div>
        <button  onClick={toggleExpand}>header +</button>
        <button onClick={toggleTheme}> toggleTheme</button>
        {expand&&(<h1>this is Accordion</h1>)}
        
    </div>
  )
}

export default Accordion