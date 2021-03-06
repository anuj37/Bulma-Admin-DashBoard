import React, { Component } from 'react';

class SmallCharts extends Component {
state = {  }
render() { 
return (  
    // <!DOCTYPE html>
    // <html lang="en">
    //   <head>
    //     <% include /metaTags %>
    //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.22.0/apexcharts.min.css" />
    //   </head>
    
    //   <body>
    //     <% include /header %>
    
        <div>
            <div class="wrapper">
                    {/* <%- include('/sidebar', {activeMenu: 'home'}) %> */}
                    <main class="main" id="main">
                        {/* <%- include('/breadcrumb', {menuTitle: 'Dashboard', menuIcon: 'fa-tachometer'}) %> */}
                        <div class="columns is-multiline">
                            <div class="column">
                                <div class="box notification is-primary">
                                    <div class="heading">Top Seller Total</div>
                                    <div class="title">56,950</div>
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Sales $</div>
                                                <div class="title is-5">250K</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Overall $</div>
                                                <div class="title is-5">750K</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Sales %</div>
                                                <div class="title is-5">25%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="box notification is-warning">
                                    <div class="heading">Revenue / Expenses</div>
                                    <div class="title">55% / 45%</div>
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Rev Prod $</div>
                                                <div class="title is-5">30%</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Rev Serv $</div>
                                                <div class="title is-5">25%</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Exp %</div>
                                                <div class="title is-5">45%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="box notification is-info">
                                    <div class="heading">Feedback Activity</div>
                                    <div class="title">78% &uarr;</div>
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Pos</div>
                                                <div class="title is-5">1560</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Neg</div>
                                                <div class="title is-5">368</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Pos/Neg %</div>
                                                <div class="title is-5">77% / 23%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="box notification is-danger">
                                    <div class="heading">Orders / Returns</div>
                                    <div class="title">75% / 25%</div>
                                    <div class="level">
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Orders $</div>
                                                <div class="title is-5">425K</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Returns $</div>
                                                <div class="title is-5">106K</div>
                                            </div>
                                        </div>
                                        <div class="level-item">
                                            <div class="">
                                                <div class="heading">Success %</div>
                                                <div class="title is-5">+ 28,5%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        {/* <% include /horizontalAds %> */}
                        {/* <% include /copyright %> */}
                    </main>
            </div>
            {/* // <% include /jsonLd %> */}
            <script defer src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.22.0/apexcharts.min.js"></script>
            <script defer src="<%= data.config.publicPath %>/js/module-chart.js"></script>
                {/* //   </body> */}
                {/* // </html> */}
        </div>
    
        );
    }
}
 
export default SmallCharts;