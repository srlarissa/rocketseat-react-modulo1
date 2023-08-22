import { Outlet } from 'react-router-dom'
import { Header } from '../componentes/Header'

export function DefaultLayout(){
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    );
}