import React from 'react';
import '../components/Family.css';
import Spectra from "spectra";


function Family(props) {
    // convert to hex to use in CSS
    const mommy = Spectra(props.mommy.value).hex();
    const daddy = Spectra(props.daddy.value).hex();
    const child = Spectra(props.child.value).hex();

    return (
        <div className={'container'}>
            <div>
                <div className={'individual'} style={{backgroundColor: mommy}}>{props.mommy.fitness}</div>
                <div className={'individual'} style={{backgroundColor: daddy}}>{props.daddy.fitness}</div>
            </div>
            <div>&#8594;</div>
            <div>
                <div className={'individual'} style={{backgroundColor: child}}>{props.child.fitness}</div>
            </div>
        </div>
    );
}

export default Family;
