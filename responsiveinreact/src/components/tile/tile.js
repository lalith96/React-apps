import React from 'react';
import './tile.css';

function Tile(props){
    return(
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6  wow fadeInUp">
            <div class="course">
                <center>
                    <img src={props.imgpath} class="img-responsive" alt="skillimg"/>
                </center>
                <center>
                    <h4>{props.cname}</h4>
                </center>
                <h5 class="course-summary">{props.csummary}</h5>
            </div>
        </div>
    );
}

export default Tile;