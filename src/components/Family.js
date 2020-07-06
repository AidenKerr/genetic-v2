import React from 'react';
import '../components/Family.css';


function Family(props) {
    const daddy = props.daddy;
    const mommy = props.mommy;
    const child = props.child;

    return (
        <div className={'container'}>
            <div>
                <div className={'individual'} style={{backgroundColor: mommy}}></div>
                <div className={'individual'} style={{backgroundColor: daddy}}></div>
            </div>
            ->
            <div className={'individual'} style={{backgroundColor: child}}></div>

        </div>
    );

}

export default Family;