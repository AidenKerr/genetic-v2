import React from 'react';
import '../components/Family.css';


function Family(props) {
    const daddy = props.daddy;
    const mommy = props.mommy;
    const child = props.child;

    return (
        <div className={'container'}>
            <div>
                <div className={'individual'} style={{backgroundColor: mommy.value}}></div>
                <div>{mommy.fitness}</div>
                <div className={'individual'} style={{backgroundColor: daddy.value}}></div>
                <div>{daddy.fitness}</div>
            </div>
            --->
            <div>
                <div className={'individual'} style={{backgroundColor: child.value}}></div>
                <div>{child.fitness}</div>
            </div>
        </div>
    );
}

export default Family;