import React, { Component } from 'react';

class SideBar extends Component {
    state = {  }
    // let  isActiveClass = menu => { menu === activeMenu ? 'is-active' : ''};
    render() 
    { 
      
        return ( 
        <aside id="main-sidebar" className="aside">
          <nav className="menu active-menu--<%= activeMenu %>">
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <a className="<%= isActiveClass('home') %>" href="<%= data.config.publicPath %>/">
                  <span className="icon is-small"><i className="fa fa-tachometer"></i></span> <span className="menu-text">Dashboard</span>
                </a>
              </li>
            </ul>
            <p className="menu-label">Administration</p>
            <ul className="menu-list">
              <li>
                <a className="<%= isActiveClass('forms') %>" href="<%= data.config.publicPath %>/forms/">
                  <span className="icon is-small"><i className="fa fa-pencil-square-o"></i></span> <span className="menu-text">Forms</span>
                </a>
              </li>
              <li>
                <a className="<%= isActiveClass('ui-elements') %>" href="<%= data.config.publicPath %>/ui-elements/">
                  <span className="icon is-small"><i className="fa fa-desktop"></i></span> <span className="menu-text">UI Elements</span>
                </a>
              </li>
              <li>
                <a className="<%= isActiveClass('tables') %>" href="<%= data.config.publicPath %>/tables/">
                  <span className="icon is-small"><i className="fa fa-table"></i></span> <span className="menu-text">Tables</span>
                </a>
              </li>
              <li>
                <a className="<%= isActiveClass('presentations') %>" href="<%= data.config.publicPath %>/presentations/">
                  <span className="icon is-small"><i className="fa fa-bar-chart"></i></span>
                  <span className="menu-text">Presentations</span>
                </a>
              </li>
        
              <li className="has-children">
                <a className=""
                  ><span className="icon is-small"><i className="fa fa-cog"></i></span> <span className="menu-text">Layouts</span></a
                >
                <ul>
                  <li><a>Members</a></li>
                  <li><a>Plugins</a></li>
                  <li><a>Add a member</a></li>
                </ul>
              </li>
            </ul>
        
            <p className="menu-label">Live On</p>
            <ul className="menu-list">
              <li>
                <a className="<%= isActiveClass('additional') %>" href="<%= data.config.publicPath %>/additional/">
                  <span className="icon is-small"><i className="fa fa-bug"></i></span> <span className="menu-text">Additional Pages</span>
                </a>
              </li>
              <li>
                <a className="<%= isActiveClass('extras') %>" href="<%= data.config.publicPath %>/extras/">
                  <span className="icon is-small"><i className="fa fa-windows"></i></span> <span className="menu-text">Extras</span>
                </a>
              </li>
            </ul>
        
            <div className="ads-square">
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
              <ins
                className="adsbygoogle"
                // style={{display: block}}
                data-ad-format="fluid"
                data-ad-layout-key="-gw-3+1f-3d+2z"
                data-ad-client="ca-pub-5442972248172818"
                data-ad-slot="9533807764"
              ></ins>
              <script>
                ;(adsbygoogle = window.adsbygoogle || []).push({})
              </script>
            </div>
          </nav>
        
          <div id="sidebar-toggler">
            <span className="icon is-small"><i className="fa fa-angle-double-left"></i></span>
          </div>
        </aside>
         );
    }
}
 
export default SideBar;