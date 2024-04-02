import { createContext } from "react"
import { useState } from "react"

const MainContext = createContext();

export default function Main(props) {
    // state for header
    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');
    const switchMenu = (path) => {
        setActiveMenu(path);
        setOpen(false);
    }
    return (
        <MainContext.Provider value={{ open, setOpen, activeMenu, setActiveMenu, switchMenu }}>
            {props.children}
        </MainContext.Provider>
    )
}

export { MainContext };