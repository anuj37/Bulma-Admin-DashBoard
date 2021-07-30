import React, { Component } from 'react';

class UiElements extends Component {
    state = {  }
    render() { 
        return ( 
            // <!DOCTYPE html>
            // <html lang="en">
            //   <head>
            //     <% include /metaTags %>
            //   </head>
            
            //   <body>
            //     <% include /header %>
            
                <div class="wrapper">
                        {/* <%- include('/sidebar', {activeMenu: 'ui-elements'}) %> */}
            
                        <main class="main" id="main">
                            {/* <%- include('/breadcrumb', {menuTitle: 'UI Elements', menuIcon: 'fa-desktop'}) %> */}
            
                            <div class="columns is-multiline">
                                <section class="m-4">
                                    <a class="button is-primary">Primary</a>
                                    <a class="button is-link">Link</a>
                                    <a class="button is-info">Info</a>
                                    <a class="button is-success">Success</a>
                                    <a class="button is-warning">Warning</a>
                                    <a class="button is-danger">Danger</a>
                                </section>
            
                                <section class="m-4">
                                    <a class="button is-outlined">Outlined</a>
                                    <a class="button is-primary is-outlined">Outlined</a>
                                    <a class="button is-link is-outlined">Outlined</a>
                                    <a class="button is-info is-outlined">Outlined</a>
                                    <a class="button is-success is-outlined">Outlined</a>
                                    <a class="button is-danger is-outlined">Outlined</a>
                                </section>
            
                                <section class="m-4">
                                    <div class="notification is-primary">
                                        <button class="delete"></button>
                                        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac
                                        ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                                        consectetur adipiscing elit
                                    </div>
            
                                    <div class="notification is-link">
                                        <button class="delete"></button>
                                        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac
                                        ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                                        consectetur adipiscing elit
                                    </div>
            
                                    <div class="notification is-info">
                                        <button class="delete"></button>
                                        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac
                                        ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                                        consectetur adipiscing elit
                                    </div>
            
                                    <div class="notification is-success">
                                        <button class="delete"></button>
                                        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac
                                        ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                                        consectetur adipiscing elit
                                    </div>
            
                                    <div class="notification is-warning">
                                        <button class="delete"></button>
                                        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac
                                        ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                                        consectetur adipiscing elit
                                    </div>
            
                                    <div class="notification is-danger">
                                        <button class="delete"></button>
                                        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
                                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac
                                        ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                                        consectetur adipiscing elit
                                    </div>
                                </section>
            
                                <section class="m-4">
                                    <progress class="progress is-primary" value="15" max="100">15%</progress>
                                    <progress class="progress is-link" value="30" max="100">30%</progress>
                                    <progress class="progress is-info" value="45" max="100">45%</progress>
                                    <progress class="progress is-success" value="60" max="100">60%</progress>
                                    <progress class="progress is-warning" value="75" max="100">75%</progress>
                                    <progress class="progress is-danger" value="90" max="100">90%</progress>
                                </section>
            
                                <section class="m-4">
                                    <div class="tags">
                                        <span class="tag is-black">Black</span>
                                        <span class="tag is-dark">Dark</span>
                                        <span class="tag is-light">Light</span>
                                        <span class="tag is-white">White</span>
                                        <span class="tag is-primary">Primary</span>
                                        <span class="tag is-link">Link</span>
                                        <span class="tag is-info">Info</span>
                                        <span class="tag is-success">Success</span>
                                        <span class="tag is-warning">Warning</span>
                                        <span class="tag is-danger">Danger</span>
                                    </div>
                                </section>
            
                                {/* <% include /horizontalAds %> */}
            
                                <section class="m-4">
                                    <div class="tile is-ancestor">
                                        <div class="tile is-vertical is-8">
                                            <div class="tile">
                                                <div class="tile is-parent is-vertical">
                                                    <article class="tile is-child notification is-primary">
                                                        <p class="title">Vertical...</p>
                                                        <p class="subtitle">Top tile</p>
                                                    </article>
                                                    <article class="tile is-child notification is-warning">
                                                        <p class="title">...tiles</p>
                                                        <p class="subtitle">Bottom tile</p>
                                                    </article>
                                                </div>
                                                <div class="tile is-parent">
                                                    <article class="tile is-child notification is-info">
                                                        <p class="title">Middle tile</p>
                                                        <p class="subtitle">With an image</p>
                                                        <figure class="image is-4by3">
                                                            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                                                            <ins
                                                                class="adsbygoogle"
                                                                style="display: block"
                                                                data-ad-format="fluid"
                                                                data-ad-layout-key="-ef+6k-30-ac+ty"
                                                                data-ad-client="ca-pub-5442972248172818"
                                                                data-ad-slot="1822838709"
                                                            ></ins>
                                                            <script>
                                                                ;(adsbygoogle = window.adsbygoogle || []).push({})
                                                            </script>
                                                        </figure>
                                                    </article>
                                                </div>
                                            </div>
                                            <div class="tile is-parent">
                                                <article class="tile is-child notification is-danger">
                                                    <p class="title">Wide tile</p>
                                                    <p class="subtitle">Aligned with the right tile</p>
                                                    <div class="content">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                                            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                                                            facilisis.
                                                        </p>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <div class="tile is-parent">
                                            <article class="tile is-child notification is-success">
                                                <div class="content">
                                                    <p class="title">Tall tile</p>
                                                    <p class="subtitle">With even more content</p>
                                                    <div class="content">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                                                            at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
                                                            ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis
                                                            ut quam.
                                                        </p>
                                                        <p>
                                                            Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis.
                                                            Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin
                                                            felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit
                                                            amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat
                                                            tortor.
                                                        </p>
                                                        <p>
                                                            Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus
                                                            dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                                                            ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non
                                                            semper leo.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </section>
            
                                <section class="m-4">
                                    <article class="message is-dark">
                                        <div class="message-header">
                                            <p>Dark</p>
                                            <button class="delete" aria-label="delete"></button>
                                        </div>
                                        <div class="message-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                                            ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
                                            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
                                            facilisis sodales sem.
                                        </div>
                                    </article>
            
                                    <article class="message is-primary">
                                        <div class="message-header">
                                            <p>Primary</p>
                                            <button class="delete" aria-label="delete"></button>
                                        </div>
                                        <div class="message-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                                            ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
                                            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
                                            facilisis sodales sem.
                                        </div>
                                    </article>
            
                                    <article class="message is-link">
                                        <div class="message-header">
                                            <p>Link</p>
                                            <button class="delete" aria-label="delete"></button>
                                        </div>
                                        <div class="message-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                                            ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
                                            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
                                            facilisis sodales sem.
                                        </div>
                                    </article>
            
                                    <article class="message is-info">
                                        <div class="message-header">
                                            <p>Info</p>
                                            <button class="delete" aria-label="delete"></button>
                                        </div>
                                        <div class="message-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                                            ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
                                            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
                                            facilisis sodales sem.
                                        </div>
                                    </article>
            
                                    <article class="message is-success">
                                        <div class="message-header">
                                            <p>Success</p>
                                            <button class="delete" aria-label="delete"></button>
                                        </div>
                                        <div class="message-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                                            ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
                                            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
                                            facilisis sodales sem.
                                        </div>
                                    </article>
            
                                    <article class="message is-warning">
                                        <div class="message-header">
                                            <p>Warning</p>
                                            <button class="delete" aria-label="delete"></button>
                                        </div>
                                        <div class="message-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                                            ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
                                            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
                                            facilisis sodales sem.
                                        </div>
                                    </article>
            
                                    <article class="message is-danger">
                                        <div class="message-header">
                                            <p>Danger</p>
                                            <button class="delete" aria-label="delete"></button>
                                        </div>
                                        <div class="message-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                                            ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
                                            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
                                            facilisis sodales sem.
                                        </div>
                                    </article>
                                </section>
            
                                <section class="m-4">
                                    <div class="box">
                                        <article class="media">
                                            <div class="media-left">
                                                <figure class="image is-64x64">
                                                    <img src="https://versions.bulma.io/0.7.0/images/placeholders/128x128.png" alt="Image" />
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                                        <br />
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
                                                        fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                                <nav class="level is-mobile">
                                                    <div class="level-left">
                                                        <a class="level-item" aria-label="reply">
                                                            <span class="icon is-small">
                                                                <i class="fas fa-reply" aria-hidden="true"></i>
                                                            </span>
                                                        </a>
                                                        <a class="level-item" aria-label="retweet">
                                                            <span class="icon is-small">
                                                                <i class="fas fa-retweet" aria-hidden="true"></i>
                                                            </span>
                                                        </a>
                                                        <a class="level-item" aria-label="like">
                                                            <span class="icon is-small">
                                                                <i class="fas fa-heart" aria-hidden="true"></i>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </nav>
                                            </div>
                                        </article>
                                    </div>
                                </section>
            
                                <section class="m-4">
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-64x64">
                                                <img src="https://versions.bulma.io/0.7.0/images/placeholders/128x128.png" />
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <strong>Barbara Middleton</strong>
                                                    <br />
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit
                                                    blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                                                    <br />
                                                    <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                                                </p>
                                            </div>
            
                                            <article class="media">
                                                <figure class="media-left">
                                                    <p class="image is-48x48">
                                                        <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" />
                                                    </p>
                                                </figure>
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p>
                                                            <strong>Sean Brown</strong>
                                                            <br />
                                                            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique
                                                            senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis,
                                                            a lobortis leo feugiat.
                                                            <br />
                                                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                                        </p>
                                                    </div>
            
                                                    <article class="media">
                                                        Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit
                                                        amet nec massa.
                                                    </article>
            
                                                    <article class="media">
                                                        Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed
                                                        pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                                                    </article>
                                                </div>
                                            </article>
            
                                            <article class="media">
                                                <figure class="media-left">
                                                    <p class="image is-48x48">
                                                        <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" />
                                                    </p>
                                                </figure>
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p>
                                                            <strong>Kayli Eunice </strong>
                                                            <br />
                                                            Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet
                                                            magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus
                                                            orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                                                            <br />
                                                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </article>
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-64x64">
                                                <img src="https://versions.bulma.io/0.7.0/images/placeholders/128x128.png" />
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="field">
                                                <p class="control">
                                                    <textarea class="textarea" placeholder="Add a comment..."></textarea>
                                                </p>
                                            </div>
                                            <div class="field">
                                                <p class="control">
                                                    <button class="button">Post comment</button>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </div>
            
                            {/* <% include /horizontalAds %>
                            <% include /copyright %> */}
                        </main>
                </div>
            
            //     {/* <% include /jsonLd %> */}
            //   {/* </body>
            // </html> */}
               

         );
    }
}
 
export default UiElements;