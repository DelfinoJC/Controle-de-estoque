import React, { useContext, useState } from "react"

interface ThemeContextType {
    modeMoment: boolean
    handleModeMoment: () => void
}

const ThemeContext = React.createContext<ThemeContextType>({
    modeMoment: false,
    handleModeMoment: () => {}
})

export function ThemeContextProvider ({children}: any){
    const [modeMoment, setModeMoment] = useState<boolean>(false)

    const handleModeMoment = () => {
        setModeMoment(!modeMoment)
        console.log(modeMoment)
    }

    return (
        <ThemeContext.Provider value={{modeMoment, handleModeMoment}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)