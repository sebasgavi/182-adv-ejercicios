import * as React from 'react';
import { observer } from 'mobx-react';

import './Root.scss';
import { Header } from '../../components/Header/Header';
import { Selector } from '../../components/Selector/Selector';

import { store } from '../../stores/Store';

interface IRootProps{}

@observer export class Root extends React.Component<IRootProps> {

    render(){
        return <div>  
            <Header title={`Total: ${store.total}`} 
                text={store.user}
                img="./assets/img/logo.png"/>

            <Selector />

            <button onClick={() => store.setUser(store.user + 1)}>Cambiar!</button>

        </div>
    }
}























