//Burada global state operasyonlarımı tanımlıyorum. Hangi component globalde bir state ihtiyaç duyacaksa buraya bağlanacak!

import { createContext, useState } from "react";


export const CounterContext = createContext<CounterContextType | null>(null)



export const CounterProvider = ({ children } : any) => {

    
    const [counter, setcounter] = useState(0);


    return <CounterContext.Provider value={{counter, setcounter}}>{children}</CounterContext.Provider>

}


//TS configürasyonu
export type CounterContextType = {
    counter: number;
    setcounter: (value: number) => void
}