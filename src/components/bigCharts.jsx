import React, { Component } from 'react';

class BigCharts extends Component {
state = {  }
render() { 
return (  
        
        <div>
            <div>
                {/* <!DOCTYPE html>
            <html lang="en">
              <head>
                <% include /metaTags %> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.22.0/apexcharts.min.css" />
              {/* </head> */}
            
              {/* <body>
                <% include /header %> */}
            
                <div class="wrapper">
                        {/* <%- include('/sidebar', {activeMenu: 'presentations'}) %> */}
            
                        <main class="main" id="main">
                            {/* <%- include('/breadcrumb', {menuTitle: 'Presentations', menuIcon: 'fa-bar-chart'}) %> */}
            
                            <div class="columns is-multiline">
                                <div class="column is-6">
                                    <article class="message is-dark">
                                        <div class="message-header">
                                            <p>Chart</p>
                                        </div>
                                        <div class="message-body">
                                            <div id="chartLine" ></div>
                                        </div>
                                    </article>
                                </div>
                                <div class="column is-6">
                                    <article class="message is-dark">
                                        <div class="message-header">
                                            <p>Chart</p>
                                        </div>
                                        <div class="message-body">
                                            <div id="chartScatter" ></div>
                                        </div>
                                    </article>
                                </div>
                                <div class="column is-6">
                                    <article class="message is-dark">
                                        <div class="message-header">
                                            <p>Chart</p>
                                        </div>
                                        <div class="message-body">
                                            <div id="chartDoughnut" ></div>
                                        </div>
                                    </article>
                                </div>
                                <div class="column is-6">
                                    <article class="message is-dark">
                                        <div class="message-header">
                                            <p>Chart</p>
                                        </div>
                                        <div class="message-body">
                                            <div id="chartBar" ></div>
                                        </div>
                                    </article>
                                </div>
                            </div>
            
                            {/* <% include /horizontalAds %>
                            <% include /copyright %> */}
                        </main>
                </div>
            
                {/* <% include /jsonLd %> */}
                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.22.0/apexcharts.min.js"></script>
                <script defer src="../js/module-chart"></script>
              {/* </body>
            </html> */}
            
            </div>
        </div>);
    }
}
 
export default BigCharts;