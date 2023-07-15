// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useContext, useEffect, useState } from 'react'

export const ClimateContext = createContext()

export const useClimate = () => useContext(ClimateContext)

function ClimateProvider({children}) {
    const [temperature, setTemperature] = useState(50)
    const [humidity, setHumidity] = useState(40)

    const [tempText, setTempText] = useState(50)
    const [humText, setHumText] = useState(40)

    useEffect(() => {
        const change = setInterval(() => {
            if(tempText === temperature) {
                clearInterval(change)
                return
            }
            if(temperature < tempText){
                setTempText(text => text - 1)
            }
            else{
                setTempText(text => text + 1)
            }
        }, 1000)

        return () => clearInterval(change)
    }, [temperature, tempText])

    useEffect(() => {
        const change = setInterval(() => {
            if(humText === humidity) {
                clearInterval(change)
                return
            }
            if(humidity < humText){
                setHumText(text => text - 1)
            }
            else{
                setHumText(text => text + 1)
            }
        }, 2000)

        return () => clearInterval(change)
    }, [humidity, humText])

    return (
        <ClimateContext.Provider value={{temperature, setTemperature, humidity, setHumidity, tempText, humText}}>
            {children}
        </ClimateContext.Provider>
     );
}

export default ClimateProvider;
