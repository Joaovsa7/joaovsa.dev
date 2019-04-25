import React, { Fragment } from 'react';
import Header from './Header/Header';
import MainView from './MainView/MainView';


//este componente é o "header" do meu site.
export default function Home(){
        const [b, setB] = React.useState(true)
        const a = '#000'
        React.useEffect(() => {
            setTimeout(() => {
                setB(true)
            }, 3000);
        })
            return (
                    <div className="page-container">
                        <Header/>
                        <MainView/>
                    </div>
            )
}