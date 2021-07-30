import React, { Component } from 'react';
import SideBar from './sideBar';
import Breadcrumb from './breadcrumb';
import SmallCharts from './smallchart';
import BigCharts from './bigCharts';

class MainBody extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="columns is-desktop is-2">
            <div className="column ">
                <SideBar/>
            </div>
            <div className="column is-four-fifths">
                <Breadcrumb/>
                <SmallCharts/>
                <BigCharts/>
            </div>
       </div> );
    }
}
 
export default MainBody;