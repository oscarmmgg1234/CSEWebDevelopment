import React from 'react';
import '../../ComponentsCSS/home.css'

const HomeC = () => {
    return (
        <div className={'Homediv'}>
            <img src={require('../ASSETS/IMAGES/darker2.png')} className={'HomeImage'}/>
            <div className={'WelcomeHeader'}>
                Hey,
            </div>
            <div className={'WelcomeText'}>
                Im Oscar,
            </div>
            <div className={'WelcomeEnd'}>
                a
            </div>
            <div className={'welcomeM0'}>@</div>
            <div className={'welcomeM1'}>SoftWare</div>
            <div className={'WelcomeTitle'}>
                Software Engineer
            </div>
            <div className={'welcomeM2'}>Engineer</div>
        </div>
    )//end of return
}//end of component

export default HomeC