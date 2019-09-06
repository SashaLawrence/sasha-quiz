import React from 'react';

import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy";
import HideMe from "./HideMe";
import MinimumLength from "./MinimumLength";


const App = () => (

    <React.Fragment>
        <h1>My Quiz
        <small className="text-muted"> By Sasha</small></h1>
            <Multiplier x={ 4 } y={ 5 } />
            <EvenClicks/>
            <CountBy steps = { 5 } />
            <HideMe> Blah blah blah </HideMe>
            <MinimumLength length = {30} />
    </React.Fragment>
);

export default App;
