import React, { Component } from 'react';

const SunShower =
    <div className="icon sun-shower">
        <div className="cloud"></div>
        <div className="sun">
            <div className="rays"></div>
        </div>
        <div className="rain"></div>
    </div>


const ThunderStorm = < div
className = "icon thunder-storm" >
    < div
className = "cloud" > </div>
<div className="lightning">
    <div className="bolt"></div>
    <div className="bolt"></div>
</div>
</div>


const Cloudy =
    <div className="icon cloudy">
        <div className="cloud"></div>
        <div className="cloud"></div>
    </div>


const Flurries =
    < div
className = "icon flurries" >
    < div
className = "cloud" > </div>
<div className="snow">
    <div className="flake"></div>
    <div className="flake"></div>
</div>
</div>


const Sunny =

    <div className="icon sunny">
        <div className="sun">
            <div className="rays"></div>
        </div>
    </div>


const Rainy = < div
className = "icon rainy" >
    < div
className = "cloud" > </div>
<div className="rain"></div>
</div>

export {SunShower, ThunderStorm, Cloudy, Flurries, Sunny, Rainy};