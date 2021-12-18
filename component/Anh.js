import React from 'react'
import '../App.css';
import anh1 from './hinhanh/anh1.jpg'
import anh2 from './hinhanh/anh2.jpg'
function Anh() {
    return (
        <div id='D'>
            <img src={anh1} alt=''></img>
            <img src={anh2} alt=''></img>
        </div>
    );
}
export default Anh;