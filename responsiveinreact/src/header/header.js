import React from 'react';

function Header(props){
    return(
        <div class="text-center">
            <h1 class="animated fadeInLeft">-{props.text}-</h1>
        </div>
    );
}

export default Header;