import React, { Component } from 'react';

class Breadcrumb extends Component {
    state = {  }
    render() { 
        return ( 
           <div>
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
                      <ul>
                        <li><a href="/">Home</a></li>
                        <li className="is-active"><a href="#" aria-current="page">
                            Features
                        </a></li>
                      </ul>
                    </nav>
               
                    <div className="level mt-2 mr-2 content-title">
                      <div className="level-left">
                        <div className="level-item">
                          <div className="title has-text-primary">
                                    <span className="icon is-small icon-title">
                                        <i className="fa <%= menuIcon %>"></i>
                                    </span>
                                    <span >Pricing</span>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <button type="button" className="button is-small">March 8, 2017 - April 6, 2017</button>
                        </div>
                      </div>
                    </div>
           </div>
        </div>
         );
    }
}
 
export default Breadcrumb;