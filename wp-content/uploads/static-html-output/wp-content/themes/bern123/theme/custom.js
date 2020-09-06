/*
====================================================

* 	[Master Stylesheet]

	Theme Name :
	Version    :
	Author     :
	Author URI :

====================================================

	TOC

	1. PRIMARY STYLES
	2. COMMONS FOR PAGE DESIGN
	3. HEADER
	4. INTRO SECTION
	5. PORFOLIO SECTION
	6. ABOUT SECTION
	7. EXPERIENCE SECTION
	8. EDUCATION SECTION
	9. COUNTER SECTION
	10. FOOTER

====================================================


/* ---------------------------------
1. PRIMARY STYLES
--------------------------------- */

html { font-size: 100%; overflow-x: hidden; width: 100%; margin: 0px; padding: 0px; touch-action: manipulation;}

body { font-size: 14px; font-family: 'Open Sans', sans-serif; width: 100%; height: 100%; margin: 0; font-weight: 400; -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; word-wrap: break-word; overflow-x: hidden; color: #333; }

h1, h2, h3, h4, h5, h6, p, a, ul, span, li, img, inpot, button { margin: 0; padding: 0; }

h1, h2, h3, h4, h5, h6 { line-height: 1.5; font-weight: inherit; }

h1, h2, h3, .font-beyond { font-family: 'beyond_the_mountainsregular', sans-serif; }

p { line-height: 1.7; font-size: 1.05em; font-weight: 400; color: #555; }

h1 { font-size: 7.5em; line-height: 1.4; }

h2 { font-size: 4em; line-height: 1.4; }

h3 { font-size: 3em; }

h4 {   font-size: 1.8em; }

h5 { font-size: 1.3em; }

h6 {  font-size: .95em; letter-spacing: 1px; }

a, button { display: inline-block; text-decoration: none; color: inherit; line-height: 1.3; -webkit-transition: all .25s ease-in-out; transition: all .25s ease-in-out;}

a:focus, a:active, a:hover,
button:focus, button:active, button:hover,
a b.light-color:hover { text-decoration: none; color: #EF0031;}

b {  font-weight: 700; }

img { width: 100%;}

li { list-style: none; display: inline-block; line-height: 1.6; font-size: .9em; }

span { display: inline-block; }

button { outline: 0; border: 0; background: none; cursor: pointer; }

.icon { font-size: 1.1em;display: inline-block;line-height: inherit; }

[class^="icon-"]:before, [class*=" icon-"]:before { line-height: inherit; }

b.max-bold { font-weight: 700; }

input:focus,
textarea:focus { outline-color: #EF0031; }

::placeholder { color: #aaa; font-weight: 700; }

:-ms-input-placeholder { color: #aaa; font-weight: 700; }

:-ms-input-placeholder { color: #aaa; font-weight: 700; }

.card { border-radius: 0px; border: 0px; background: none; box-shadow: none; }

.card .bg-white {
        height: 100%;
        border-radius: 2px;
        box-shadow: 1px 1px 20px -10px rgba(0, 0, 0, .3);
}

.card i { font-size: 1.2em;}



/* RESPONSIVE */

@media only screen and (max-width: 1200px) {

        h1 { font-size: 6em; }
}

@media only screen and (max-width: 767px) {

        p {  line-height: 1.4;  }

        h1 { font-size: 4em;  }

        h2 { font-size: 3em; }
}

@media only screen and (max-width: 575px) {

        body {  font-size: 13px;  }

        h1 {   font-size: 3em;  }

        h2 { font-size: 2.5em; }
}


/* ---------------------------------
3. HEADER
--------------------------------- */

header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 1000;
        padding: 25px 0;
        font-weight: 600;
        color: #fff;
}

header:after {
        content: '';
        height: 10px;
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        background: url(../images/triangle_bg_black.png) repeat-x;
        background-size: 26px 10px;
        opacity: .6;
}

header:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0px;
        left: 0;
        right: 0;
        background: #000;
        z-index: -1;
        opacity: .6;
}

header i {
        font-size: 1.1em;
}

/* BOTTOM HEADER */

header:after {
        content: '';
        clear: both;
}

header .logo {
        float: left;
        height: 70px;
}

header .logo img {
        height: 100%;
        width: auto;
}

header ul.main-menu > li > a {
        height: 100%;
        line-height: 70px;
        padding: 0px 15px;
}

/* SEARCH AREA */

header .right-area {
        float: right;
        height: 100%;
        height: 70px;
        padding: 10px 0;
        position: relative;
        font-size: 1.2em;
}

/* HAMBURGER ICON */

header .menu-nav-icon {
        display: inline-block;
        font-size: 30px;
        line-height: 60px;
        display: none;
        cursor: pointer;
        color: #fff;
}

/* DROPDOWN MENU STYLING */

header .main-menu {
        font-size: 1.1em;
}

header .main-menu li.drop-down {
        position: relative;
        text-align: left;
}

header .main-menu li.drop-down > ul.drop-down-menu {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        min-width: 180px;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, .3);
        background: #fff;
        color: #111;
}

header .main-menu li.drop-down > ul.drop-down-menu li {
        display: block;
        border-top: 1px solid #ddd;
}

header .main-menu li.drop-down > ul.drop-down-menu li > a {
        display: block;
        padding: 17px 20px;
}

header .main-menu i {
        margin-left: 10px;
}

/* DROPDOWN HOVER */

header .main-menu li.drop-down a.mouseover + ul.drop-down-menu {
        display: block;
        animation: full-opacity-anim .2s forwards;
}

@keyframes full-opacity-anim {
        0% {
                opacity: 0;
        }
        100% {
                opacity: 1;
        }
}

/* RESPONSIVE */

@media only screen and (max-width: 1200px) {

}

@media only screen and (max-width: 992px) {

        header {
                font-size: 1em;
        }

        header .logo {
                height: 60px;
        }

        header ul.main-menu > li > a {
                padding: 0 5px;
                line-height: 60px;
        }

        /* SEARCH AREA */
        header .right-area {
                height: 60px;
        }

}

@media only screen and (max-width: 767px) {

        header { color: #111; }

        header .right-area { color: #fff; }

        /* MAIN MENU */

        header .main-menu { display: none; position: absolute; top: 110px; left: 0; right: 0; float: none; opacity: 0; z-index: 1; height: auto; text-align: left; background: #fff; }

        header .main-menu.visible-menu { display: block; box-shadow: 0 4px 20px -10px rgba(0, 0, 0, .4); animation: full-opacity-anim .2s forwards ease; }

        @keyframes full-opacity-anim {  100% { opacity: 1; }  }

        header .main-menu > li { display: block; }

        header ul.main-menu > li > a { display: block; height: auto; line-height: 1; padding: 15px; border-top: 1px solid #eee; }

        /* HAMBURGER ICON */

        header .menu-nav-icon { display: block; }

        /* DROPDOWN  */

        header .main-menu li.drop-down > ul.drop-down-menu { position: static; box-shadow: none; }

        header .main-menu li.drop-down > ul.drop-down-menu li { border-top: 1px solid #eee; }

        header .main-menu li.drop-down > ul.drop-down-inner li:first-child { border-top: 1px solid #ddd; }

        /* DROPDOWN HOVER */

        header .main-menu li.drop-down > ul.drop-down-menu li a { padding-left: 25px; }

        header .main-menu li.drop-down > ul.drop-down-inner li a { padding-left: 35px; }
}

@media only screen and (max-width: 575px) {

        header { padding: 15px 0 25px; }

        header .right-area { width: 100%; float: none; clear: both; border-top: 1px solid rgba(255, 255, 255, .2); border-left: 0; }

        header ul.main-menu > li > a { padding: 15px; }

        header .logo { margin-bottom: 15px; }

        /* HAMBURGER ICON */

        .menu-nav-icon { position: absolute; top: 15px; right: 0; padding: 0 20px; }

        header .right-area { padding-top: 15px; }

        header .main-menu { top: 90px; }
}

@media only screen and (max-width: 359px) {

        header .heading-wrapper { padding: 30px 20px 20px; }

        header .info .icon { font-size: 25px; }

        header .info .right-area { margin-left: 35px; }
}


/* ---------------------------------
2. SLIDER
--------------------------------- */

.main-slider{ position: relative; z-index: 1; }

.main-slider:after{content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: -1; background: rgba(0,0,0,.4); }

.triangle-bottom{
        position: relative;
}

.triangle-bottom:after {
        content: '';
        height: 10px;
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        background: url(../images/triangle_bg.png) repeat-x;
        background-size: 26px 10px;
        transform: rotate(180deg); -webkit-transform: rotate(180deg);
}

.triangle-up:after {
        content: '';
        height: 10px;
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        background: url(../images/triangle_bg.png) repeat-x;
        background-size: 26px 10px;
}
.pos-top{ position: absolute; top: 0; left: 0; right: 0;  }
.pos-bottom{ position: absolute; bottom: 0; left: 0; right: 0; }


/* ---------------------------------
3. COMMON FOR CURRENT
--------------------------------- */

section {
        padding: 100px 0 70px;
}

.heading {
        position: relative;
        text-align: center;
        margin-bottom: 70px;
}

.heading-img {
        height: auto;
        width: 40px;
        margin-bottom: 20px;
}

.story-area {
        position: relative;
        background: #fff;
}

.story-bg {
        position: absolute;
        top: 50%;
        bottom: 0;
        opacity: .6;
        width: 200px;
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
}

.story-bg.left { left: 0; }

.story-bg.right { right: 0;}

/* RESPONSIVE */

@media only screen and (max-width: 992px) {

        .story-bg { width: 200px;  }

        section { padding: 70px 0 40px;  }

        .heading { margin-bottom: 60px;  }
}
@media only screen and (max-width:767px) {

        .story-bg { width: 200px;  }

        section { padding: 60px 0 30px;  }

        .heading { margin-bottom: 50px;  }
}

@media only screen and (max-width: 576px) {

        .heading { margin-bottom: 40px;  }
}


/* ---------------------------------
3. COMMONS FOR PAGE DESIGN
--------------------------------- */

/*ICONS*/

.icon-gradient{ display: block; height: 80px; width: 80px;  background: url(../images/icons.png) no-repeat; background-size: cover; background-position: 0; }

.icon-gradient.icon-pizza{ background-position: 0 0; }
.icon-gradient.icon-sea-food{ background-position: -239px 0; }
.icon-gradient.icon-pasta{ background-position:-159px 0; }
.icon-gradient.icon-salad{ background-position: -79px 0; }


.icon-box{ display: block; height: 50px; width: 50px;  background: url(../images/icon-boxes.png) no-repeat; background-size: cover; background-position: 0; }

.icon-box.icon-pizza{ background-position: 0 0; }
.icon-box.icon-ingradient{ background-position: -49px 0; }
.icon-box.icon-cshef{ background-position: -99px 0; }


/*RESPONSIVE*/

@media only screen and (max-width: 992px) {

        .icon-gradient{  height: 70px; width: 70px;  }

        .icon-gradient.icon-sea-food{ background-position: -209px 0; }

        .icon-gradient.icon-pasta{ background-position: -139px 0; }

        .icon-gradient.icon-salad{ background-position: -69px 0; }
}

@media only screen and (max-width:767px) {

        .icon-gradient{  height: 60px; width: 60px;  }

        .icon-gradient.icon-sea-food{ background-position:  -179px 0; }

        .icon-gradient.icon-pasta{ background-position: -119px 0; }

        .icon-gradient.icon-salad{ background-position: -59px 0; }
}

@media only screen and (max-width: 576px) {

        .icon-gradient{  height: 50px; width: 50px;  }

        .icon-gradient.icon-sea-food{ background-position:  -149px 0; }

        .icon-gradient.icon-pasta{ background-position: -99px 0; }

        .icon-gradient.icon-salad{ background-position: -49px 0; }
}

/*SWIPER*/

.swiper-pagination-bullet{ background: #FFFFFF; opacity: 1;  }

.swiper-pagination-bullet-active{ background: #ED0037; }

.dplay-tbl {  display: table;  height: 100%; width: 100%;}

.dplay-tbl-cell {display: table-cell; vertical-align: middle; }

.oflow-hidden { overflow: hidden; }

.oflow-visible { overflow: visible; }

.dplay-none { display: none; }

.dplay-block { display: block; }

.dplay-inl-block { display: inline-block; }

.opacty-1 {  opacity: .1; }

.opacty-2 { opacity: .2; }

.opacty-3 { opacity: .3; }

.opacty-4 { opacity: .4; }

.opacty-5 { opacity: .5; }

.opacty-6 {  opacity: .6; }

.opacty-7 { opacity: .7; }


/*RESPOSNSIVE*/

@media only screen and (max-width:992px) {

        .dplay-md-none{ display: none; }
}

@media only screen and (max-width:767px) {

        .dplay-sm-none{ display: none; }
}



/* POSITION */

.pos-relative { position: relative; z-index: 1; }

.abs { position: absolute;z-index: 1; }

.abs-tlr { position: absolute; top: 0; left: 0; right: 0; z-index: 1; }

.abs-tlr-30 { position: absolute; top: 30px; left: 30px; right: 30px; z-index: 1; }

.abs-blr { position: absolute; bottom: 0; left: 0; right: 0; z-index: 1; }

.abs-tl { position: absolute; top: 0; left: 0; z-index: 1; }

.abs-bl { position: absolute; bottom: 0; left: 0; z-index: 1; }

.abs-tbl { position: absolute; top: 0; bottom: 0; left: 0; z-index: 1; }

.abs-br { position: absolute; bottom: 0; right: 0; z-index: 1; }

.abs-tbr { position: absolute; top: 0; bottom: 0; right: 0; z-index: 1; }

.abs-tblr { position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 1; }

.abs-center { position: absolute; top: 50%; left: 50%; z-index: 1; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }

.z--1 { z-index: -1; }

.z-1 { z-index: 1; }

.z-10 { z-index: 10; }


/* ALIGNMENT */

.float-left {float: left !important;}

.float-right { float: right !important;}

.center-text { text-align: center!important; }

.left-text { text-align: left !important; }

.right-text { text-align: right !important;}

@media only screen and (max-width: 767px) {

        .center-sm-text{ text-align: center!important; }

        .left-sm-text { text-align: left !important;}
}

/* LINE HEIGHT */

.lh-1 { line-height: 1; }

.lh-1-1 { line-height: 1.1;}

.lh-1-2 { line-height: 1.2;}

.lh-1-3 { line-height: 1.3;}

.lh-1-4 { line-height: 1.4;}

.lh-30 { line-height: 30px;}

.lh-35 { line-height: 35px;}

.lh-40 { line-height: 40px;}

.lh-50 { line-height: 50px;}

.lh-60 { line-height: 60px;}

.lh-70 { line-height: 70px;}


/* FONTS */

.font-5 { font-size: .5em; }

.font-6 { font-size: .6em; }

.font-7 { font-size: .7em; }

.font-75 { font-size: .75em; }

.font-8 { font-size: .8em; }

.font-85 { font-size: .85em; }

.font-9 { font-size: .9em; }

.font-11 {  font-size: 1.1em; }

.font-12 { font-size: 1.2em; }

.font-13 { font-size: 1.3em; }

.font-14 { font-size: 1.4em; }

.font-15 { font-size: 1.5em; }

.font-16{ font-size: 1.6em; }

.font-17 { font-size: 1.7em; }

.font-18 { font-size: 1.8em; }

.font-20 { font-size: 2em; }

.font-23{  font-size: 2.3em; }

.font-25{  font-size: 2.5em; }

.font-30{  font-size: 3em; }

.font-40{  font-size: 4em; }


/* RESPONSIVE */

@media only screen and (max-width: 1200px) {

        .dplay-lg-none { display: none; }
}

@media only screen and (max-width: 992px) {

}

@media only screen and (max-width: 767px) {

        .float-sm-none { float: none !important; }

        .center-sm-text { text-align: center !important; }

        .pos-sm-static { position: static; }

        .font-sm-13 { font-size: 1.3em; }

        .font-sm-15 { font-size: 1.5em; }

        .font-sm-20 { font-size: 2em; }
}

@media only screen and (max-width: 575px) {

        .pos-xs-relative { position: relative; z-index: 1; }

        .pos-xs-static { position: static; z-index: 1; }

        .dplay-xs-block { display: block; }

        .text-xs-center { text-align: center; }
}

/* COLOR */

.color-white {
        color: #fff !important;
}

.color-green {
        color: #36D98A;
}

.color-ash {
        color: #aaa;
}

.color-ccc {
        color: #ccc;
}

.color-grey {
        color: #ccc;
}

.color-primary {
        color: #EF0031;
}

.color-black { color: #111; }

.color-semi-black { color: #555; }

.color-lt-black { color: #888; }

.color-facebook {
        color: #365B99;
}

.color-twitter {
        color: #58ADEE;
}

.color-google { color: #E14A3D; }

/* BACKGROUND COLOR*/

.bg-seller{ background: url(../images/sellers-1-1600x1600.jpg)  no-repeat; background-size: cover; position: relative; z-index: 1; }

.bg-seller:after{ content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: -1; background: rgba(0,0,0,.85); }

.bg-191 { background: #191919; }

.bg-primary { background: #EF0031 !important; }

.bg-2-white { background: #F2F2F2; }

.bg-1-white { background: #F8F8F8; }

.bg-black { background: #000000; }

.bg-tp-5 { background: rgba(0, 0, 0, .5); }

.bg-lite-blue{ background: #F4F8F9; }

.bg-semi-blue{ background: #dae0e1; }

.bg-trinagle-primary{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #EF002E;
        -wekit-transform-origin: right bottom; transform-origin: right bottom;
        -wekit-transform: translateX(50px) rotate(-55deg) scale(2); transform: translateX(50px) rotate(-55deg) scale(2); }


/* PANEL  */

.panel-area .panel-title{ padding: 15px 20px; cursor: pointer; position: relative; background: #EFF6F7; border-bottom: 3px solid #ED0037; }

.panel-area .panel-title:after{ content:''; position:absolute; top: 0; bottom: 0; left: 0; right: 0;z-index: -1; transition: all .2s; opacity: 1;  }

.panel-area .panel-desc{ max-height: 0; overflow: hidden; opacity: 0;transition: opacity .25s .1s, transform .1s; transform: scaleY(0); transform-origin: top; }

.panel-area .panel-title .icon{ float: right; font-size: .7em; margin-top: 5px; }

.panel-area .panel-title.active { background: #ED0037; }

.panel-area .panel-title a { color: #333333;  }

.panel-area .panel-title.active a { color: #FFFFFF;  }

.panel-area .panel-title.active:after{ opacity: 0; }

.panel-area .panel-title.active + .panel-desc{ opacity: 1; padding-top: 20px; max-height: 1000px; transform: scaleY(1);}

.panel-area .panel-title .icon.plus,
.panel-area .panel-title.active .icon.minus{ display: block; }

.panel-area .panel-title .icon.minus,
.panel-area .panel-title.active .icon.plus{ display: none; }


/*IMAGES*/

.ïmg-200x{ height: 200px; width: 200px; }


/*RIBBONS*/

.ribbon-cont{  display: inline-block; padding: 0px 30px 0px 20px; position: absolute; top: 35%; left: 4px; z-index: 1; line-height: 30px;  font-size: 1.07em; }

.ribbon { position: absolute;top: 0;left: 0;right: 0;bottom: 0; z-index: -1; border: 15px solid #F1002A; border-left:  0; border-right: 15px solid transparent;  width:   100%; }
.ribbon.primary{ border-color: #F1002A; border-right-color:  transparent; }
.ribbon.secondary{ border-color: #1F8330; border-right-color:  transparent;  }
.ribbon.white{ border-color: #ffffff; border-right-color:  transparent;  }


.circle-50 { height: 50px; width: 50px; border-radius: 50px; }

.circle-60 {
        height: 60px;
        width: 60px;
        border-radius: 60px;
}

.circle-70 {
        height: 70px;
        width: 70px;
        border-radius: 70px;
}

.circle-80 {
        height: 80px;
        width: 80px;
        border-radius: 80px;
}

/* BACKGROUND IMAGE */

.img-bg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
}


.bg-1 { background: url(../images/slider_1_1920_1200.jpg) no-repeat center; background-size: cover; }

.bg-2 {   background: url(../images/story_bg_1.png) no-repeat center; background-size: 100%; }

.bg-3 {  background: url(../images/story_bg_2.png) no-repeat center;  background-size: 100%; }

.bg-4 {  background: url(../images/slider_2_1920_600.jpg) no-repeat center;  background-size: cover; }

.bg-5 {  background: url(../images/slider_3_1920_600.jpg) no-repeat center;  background-size: cover; }

.bg-6 {  background: url(../images/slider_4_1920_600.jpg) no-repeat center;  background-size: cover; }

.bg-7 {  background: url(../images/slider_5_1920_600.jpg) no-repeat center;  background-size: cover; }

.bg-8 {  background: url(../images/slider_6_1920_600.jpg) no-repeat center;  background-size: cover; }

.bg-grad-layer-6:after { content: ''; position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: -1; opacity: .6;
        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, .4) 100%); }

.bg-layer-4:after { content: ''; position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: -1; opacity: .50; background: #111; }

.bg-layer-6:after { content: ''; position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: -1; opacity: .60; background: #111; }

.bg-layer-7:after { content: ''; position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: -1; opacity: .7; background: #111; }

.bg-white {  background: #fff; }



/* RESPONSIVE */

@media only screen and (max-width: 767px) {

        .bg-sm-color-6 {  background: rgba(0, 0, 0, .6); }

        .bg-sm-color-7 {  background: rgba(0, 0, 0, .7); }
}

/* BORDER */

.brder-grey { border: 1px solid #ccc; }

.brder-t-grey { border-top: 1px solid #ccc; }

.brder-t-light{ border-top: 1px solid #ddd; }

.brder-r-ash-3{ border-right: 3px solid #aaa; }

.brder-r-lite-black-2{ border-right: 2px solid #777; }

.brder-lr-lite-black-2{ border-left: 2px solid #777; border-right: 2px solid #777; }

.brder-tlr-grey {
        border: 1px solid #ccc;
        border-bottom: 0;
}

.brder-blr-grey {
        border: 1px solid #ccc;
        border-top: 0;
}

.brdr-ash-1 {
        height: 1px;
        background: #aaa;
}

.brdr-grey-1 {
        height: 1px;
        background: #ddd;
}

.brdr-b-primary{ border-bottom: 2px solid #EF0031; }

.brdr-primary-2{ border: 2px solid #EF0031; }

.brdr-primary-3{ border: 3px solid #EF0031; }

.brdr-style-1{  position: absolute;left: 0; right: 0; bottom: 0; ; z-index: 1; height: 8px; }
.brdr-style-1:after{ content:''; display: block; height: 60%; background: #1F8330;  z-index: 1; }
.brdr-style-1:before{content:'';  height: 40%; display: block; background: #FFFFFF;  z-index: 1; }


/* LINK STYLING	 */

.link-brdr-btm-primary {
        position: relative;
        padding-bottom: 5px;
        -webkit-transition: all .2s;
        transition: all .2s;
}

.link-brdr-btm-primary:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background: #EF0031;
        -webkit-transition: all .2s;
        transition: all .2s;
        -webkit-transform-origin: right;
        transform-origin: right;
}

.link-brdr-btm-primary:hover {
        -webkit-transform: translateY(-1px);
        transform: translateY(-1px);
}

.link-brdr-btm-primary:hover:after {
        -webkit-transform: scale(0);
        transform: scale(0);
}

/* BUTTON STYLING */

.btn-brdr-primary { text-align: center; height: 45px; line-height: 43px; border: 1px solid #EF0031; color: #EF0031; border-radius: 2px; }

.btn-brdr-primary:hover { background: #EF0031; color: #FFFFFF; }

.btn-primaryc { position: relative; text-align: center; height: 55px; line-height: 50px; background: #EF0031; color: #fff; border-radius: 3px; z-index: 1; }

.btn-primaryc.secondary{ background: #118522; }

.btn-primaryc:after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: #1F8330; z-index: -2; -webkit-transition: all .1s ease-in;
        transition: all .1s .1s ease-in; }

.btn-primaryc:before { content: ''; position: absolute; bottom: 3px; left: 0; right: 0; height: 2px; background: #FFFFFF; z-index: -1;
        -webkit-transition: all .1s  .2s ease-in; transition: all .1s  ease-in; }

.btn-primaryc:hover { color: #111 }

.btn-primaryc:hover:after { height: 100%; }

.btn-primaryc:hover:before { height: 100%;  border: 1px solid #1F8330; }

.btn-brdr-grey { text-align: center; height: 45px; line-height: 43px; border: 1px solid #ccc; border-radius: 2px; }

.btn-brdr-grey:hover {border: 1px solid #EF0031;background: #EF0031;color: #000; }

.btn-fill-primary { text-align: center; height: 55px; line-height: 53px; border: 1px solid #EF0031; background: #EF0031; border-radius: 2px; color: #FFFFFF; }

.btn-fill-primary.secondary {  height: 55px; line-height: 53px; border: 1px solid #1F8330; background: #1F8330; }

.btn-fill-primary:hover { background: none; color: #EF0031; }
.btn-fill-primary.secondary:hover { background: none; color: #1F8330; }

.btn-fill-grey { text-align: center; height: 45px; line-height: 43px; border: 1px solid #ccc; background: #ccc; border-radius: 2px; color: #111; }

.btn-fill-grey:hover { border: 1px solid #EF0031; background: none; color: #000; }

.btn-b-lg { font-size: 1em; height: 55px; line-height: 55px; }

.btn-b-md { font-size: .9em; height: 35px; line-height: 35px; }

.btn-b-sm { font-size: .9em; height: 30px; line-height: 28px; }


/* FORM INPUT STYLING */

.nwsltr-primary-1 { position: relative; }

.nwsltr-primary-1 input {
        height: 45px;
        display: block;
        width: 100%;
        padding: 0 65px 0 20px;
        border: 1px solid #EF0031;
}

.nwsltr-primary-1 button {
        position: absolute;
        top: 1px;
        bottom: 1px;
        right: 1px;
        width: 45px;
        text-align: center;
        background: #EF0031;
        color: #000;
}

.nwsltr-primary-1 button i {
        font-size: 1.3em;
}

.nwsltr-primary-1 button:hover {
        background: #000;
        color: #fff;
}

.form-block input,
.form-block textarea {
        display: block;
        width: 100%;
}

/*FORM*/

.form-style-1 textarea,
.form-style-1 input{ display: block; width: 100%; padding: 0 20px;  border: 0px; border-bottom: 3px solid transparent; background: #EFF6F7; height: 50px;
        outline: 0; -webkit-transition: all .2s ease-in;  transition: all .2s ease-in; }

.form-style-1 textarea:focus,
.form-style-1 input:focus,
.form-style-1 textarea:active,
.form-style-1 input:active{ border-bottom: 3px solid #EF0031; }

.placeholder-1 ::-webkit-input-placeholder { font-style: italic; color: #aaa; font-size: .9em;  }
.placeholder-1 ::-moz-placeholder { font-style: italic; color: #aaa; font-size: .9em; }
.placeholder-1 :-ms-input-placeholder { font-style: italic; color: #aaa; font-size: .9em;  }
.placeholder-1 :-moz-placeholder { font-style: italic; color: #aaa; font-size: .9em;  }


.form-bold input,
.form-bold textarea {
        font-weight: 700;
}

.form-plr-15 input,
.form-plr-15 textarea {
        padding: 0 15px;
}

.form-plr-20 input,
.form-plr-20 textarea {
        padding: 0 20px;
}

.form-h-35 input {
        height: 35px;
}

.form-h-40 input {
        height: 40px;
}

.form-h-45 input {
        height: 45px;
}

.form-h-50 input {
        height: 50px;
}

.form-h-55 input {
        height: 55px;
}

.form-mb-20 input,
.form-mb-20 textarea {
        margin-bottom: 20px;
}

.form-brdr-grey input,
.form-brdr-grey textarea {
        border: 1px solid #ccc;
}

.form-brdr-lite-white input,
.form-brdr-lite-white textarea {
        border: 1px solid #ddd;
}

.form-brdr-b-grey input,
.form-brdr-b-grey textarea {
        outline: 0;
        border: 0px;
        border-bottom: 1px solid #ccc;
}

.form-brdr-b-grey input:focus,
.form-brdr-b-grey textarea:focus {
        border-bottom: 1px solid #EF0031;
}

.form-brdr-b input,
.form-brdr-b textarea {
        outline: 0;
        background: none;
        border: 0;
        border-bottom: 1px solid #ccc;
}

.form-bg-white input,
.form-bg-white textarea {
        background: #fff;
        border: 1px solid #eee;
}

/* SIDED SECTION */

.sided-half { overflow: hidden; }

.sided-half .s-left { float: left; }

.sided-half .s-right { float: right; }

.sided-70 { position: relative; }

.sided-70 .s-left { position: absolute; top: 0; left: 0; height: 70px; width: 70px; }

.sided-70 .s-left.rounded img { border-radius: 70px; overflow: hidden; }

.sided-70 .s-right { min-height: 70px; }

.sided-80x { position: relative; }

.sided-80x .s-left { position: absolute; top: 0; left: 0; height: 80px; width: 80px; }

.sided-80x .s-left.rounded img { border-radius: 80px; overflow: hidden; }

.sided-80x .s-right { margin-left: 95px; min-height: 80px; }

.sided-70x { position: relative; }

.sided-70x .s-left { position: absolute; top: 0; left: 0; height: 70px; width: 70px; }

.sided-70x .s-left.rounded img { border-radius: 70px; overflow: hidden; }

.sided-70x .s-right { margin-left: 85px; min-height: 70px; }

.sided-80x .s-left .v-icn { position: absolute; top: 50%; left: 50%; margin: -15px 0 0 -15px; height: 30px; width: 30px; border-radius: 30px;
        background: rgba(255, 255, 255, .5); text-align: center; }

.sided-80x .s-left .v-icn i { line-height: 30px; text-shadow: 1px 1px 5px #000; color: #fff; }

/*SIDED 90x*/

.sided-90x { position: relative; }

.sided-90x .s-left { position: absolute; top: 0; left: 0; height: 90px; width: 90px; }

.sided-90x .s-left.rounded img { border-radius: 90px; overflow: hidden; }

.sided-90x .s-right { margin-left: 115px; min-height: 90px; }


/*SIDED 130x*/

.sided-130x { position: relative; }

.sided-130x .s-left { position: absolute; top: 0; left: 0; height: 130px; width: 130px; }

.sided-130x .s-left.rounded img { border-radius: 130px; overflow: hidden; }

.sided-130x .s-right { margin-left: 150px; min-height: 130px; }


/*SIDED 150x*/

.sided-150x { position: relative; }

.sided-150x .s-left { position: absolute; top: 0; left: 0; height: 150px; width: 150px; }

.sided-150x .s-left.rounded img { border-radius: 150px; overflow: hidden; }

.sided-150x .s-right { margin-left: 180px; min-height: 150px; }


/*SIDED 200x*/

.sided-200x { position: relative; }

.sided-200x .s-left { position: absolute; top: 0; left: 0; height: 200px; width: 200px; }

.sided-200x .s-left.rounded img { border-radius: 200px; overflow: hidden; }

.sided-200x .s-right { margin-left: 230px; min-height: 200px; }


/*SIDED 220x*/

.sided-220x { position: relative; }

.sided-220x .s-left { position: absolute; top: 0; left: 0; height: 220px; width: 220px; }

.sided-220x .s-left.rounded img { border-radius: 220px; overflow: hidden; }

.sided-220x .s-right { margin-left: 250px; min-height: 220px; }


/* RESPONSIVE */

@media only screen and (max-width: 767px) {

        .sided-220x.responsive .s-left { position: static; height: 180px; width: 180px; }

        .sided-220x.responsive .s-right { margin-left: 0px; min-height: 0px; }
}



/*SIDED 250x*/

.sided-250x { position: relative; }

.sided-250x .s-left { position: absolute; top: 0; bottom: 0; left: 0; width: 250px; overflow: hidden; }

.sided-250x .s-left img { position: absolute; top: 50%; left: 50%; width: 100%; height: auto; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }

.sided-250x .s-right { margin-left: 250px; }


/*SELECTION*/

ul.selecton{ text-align: center;  font-size: 1.2em;  }

ul.selecton li > a{ padding: 15px 30px;   }

ul.selecton li:hover a,
ul.selecton li a.active{ border-radius: 3px 3px 0 0; background: #EF0031; color: #FFFFFF;  }

.food-menu{ display: none;  }
.food-menu.active{ opacity: 0; display: block!important; animation: full-opacity-anim .3s forwards ; }

@keyframes full-opacity-anim{
        100%{ opacity: 1; }
}

/*TAB STYLE*/

.tab-style-1 a{ background: #EFF6F7; border-bottom: 3px solid #EF002E; text-align: center; color: #EF002E; }

.tab-style-1 a:hover,
.tab-style-1 a.active{ background: #EF002E; color: #ffffff;  }


/* RADIAL PROGRESSBAR */

.radial-prog-area{ padding: 20px; max-width: 250px; margin: 0 auto; text-align: center; }

.radial-progress{ position: relative; }

.radial-progress .progressbar-text{ font-size: 2.5em; font-weight: 500; color: #000!important; }

.radial-progress .progressbar-text:after{ content:'%'; }

.radial-progress .progress-title{ font-family: 'Open Sans', sans-serif;  position: absolute; top: 50%; left: 50%;transform: translate(-50%, 30px); color: #777; }



/* RESPONSIVE */

@media only screen and (max-width: 1200px) {

        .sided-250x.s-lg-height .s-left img {    width: auto;    height: 100%;}
}

@media only screen and (max-width: 778px) {

        .sided-half .sided-sm-center { float: none; text-align: center;}
}

@media only screen and (max-width: 576px) {

        .sided-xs-half .s-left { float: none; }

        .sided-xs-half .s-right {float: none; }

        .sided-80x .s-left { height: 70px; width: 70px; }

        .sided-80x .s-right { margin-left: 85px; min-height: 70px; }

        .sided-90x .s-left { height: 70px; width: 70px; }

        .sided-90x .s-right { margin-left: 85px; min-height: 70px; }

        .sided-250x { position: relative; }

        .sided-250x .s-left { position: relative; top: 0; bottom: 0; left: 0; width: 100%; height: 200px; overflow: hidden; }

        .sided-250x .s-left img,
        .sided-250x.s-lg-height .s-left img { width: 100%; height: auto; }

        .sided-250x .s-right { margin-left: 00px; }
}

/* FLOAT LEFT RIGHT	 */

.float-left-right { overflow: hidden; }

.float-left-right ul:first-child { float: left; }

.float-left-right ul:last-child { float: right; }

/* RESPONSIVE */

@media only screen and (max-width: 767px) {

        .float-left-right { text-align: center; }

        .float-left-right ul:first-child,
        .float-left-right ul:last-child { float: none; }
}

/* ACCRODIAN */

.accordian:first-child {
        border-top: 1px solid #ccc;
}

.accordian .a-title {
        padding: 15px 50px 15px 25px;
        display: block;
        position: relative;
        border: 1px solid #ccc;
        border-top: 0;
}

.accordian .a-title i {
        position: absolute;
        top: 50%;
        right: 0;
        color: #EF0031;
        width: 50px;
        text-align: center;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
}

.accordian .a-body {
        max-height: 0;
        overflow: hidden;
        -webkit-transition: all .2s;
        transition: all .2s;
}

.accordian .a-body.active {
        max-height: 1000px;
}

.a-body-inner {
        padding: 25px 40px 25px 25px;
        border: 1px solid #ccc;
        border-top: 0;
}

/* INDIVIDUAL STYLING */

.p-title {
        position: relative;
        padding-bottom: 20px;
        margin-bottom: 40px;
}

.p-title:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #ccc;
}

.p-title:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80px;
        height: 5px;
        background: #EF0031;
        z-index: 1;
}

.quote-primary {
        padding: 10px 20px;
        border-left: 2px solid #EF0031;
}

.hot-news {
        background: #fff;
}

.swiper-scrollbar {
        border-radius: 0px;
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        height: 3px;
        background: rgba(255, 255, 255, .5);
        z-index: 10000;
}

.swiper-scrollbar-drag {
        height: 5px;
        top: -3px;
        width: 350px !important;
        border-radius: 0px;
        background: #fff;
}

.all-scroll {
        cursor: all-scroll;
}

/* RESPONSIVE */

@media only screen and (max-width: 767px) {

        .swiper-scrollbar.resp {
                overflow: hidden;
                left: 15px;
                right: 15px;
        }

        .swiper-scrollbar-drag {
                width: 200px !important;
        }

}

.tag > li > a {
        padding: 5px 20px;
        color: #888;
        border: 1px solid #aaa;
}

.tag > li > a:hover {
        background: #111;
        color: #fff;
        border: 1px solid #111;
}



/*FOOTER*/

footer{ background: url("../images/footer_1600x800.jpg") no-repeat; background-size: cover;  position: relative;  text-align: center;z-index: 1;  font-size: 1.3em; }

.footer-bg-1{ background-image:  url("../images/footer-1.png") ; }
.footer-bg-1:after{ display: none; }

footer,
footer p{ color: #FFFFFF; }

footer:after{ content: ''; position: absolute; top:0 ;left: 0;right: 0; bottom: 0; z-index: -1;  background: rgba(0,0,0,.7); }

.underline-secondary{ color: #37B143;  text-decoration: underline;  }

ul.icon li a{ padding: 10px;  }

.color-light{ color: #cccccc; }

.semi-black{ color: #666666; }

.br-3{ border-radius: 3px;  }
.br-4{ border-radius: 4px;  }
.br-5{ border-radius: 5px;  }



/* WIDTH/HEIGHT */

.w-auto {
        width: auto !important;
}

.h-auto {
        height: auto !important;
}

.w-10 {
        width: 10% !important;
}

.w-20 {
        width: 20% !important;
}

.w-30 {
        width: 30% !important;
}

.w-40 {
        width: 40% !important;
}

.w-45 {
        width: 45% !important;
}

.w-50 {
        width: 50% !important;
}

.w-55 {
        width: 55% !important;
}

.w-60 {
        width: 60% !important;
}

.w-70 {
        width: 70% !important;
}

.w-80 {
        width: 80% !important;
}

.w-90 {
        width: 90% !important;
}

.w-100 {
        width: 100% !important;
}

.w-1-4 {
        width: 25% !important;
}

.w-1-3 {
        width: 33.33% !important;
}

.w-2-3 {
        width: 66.666% !important;
}

.w-3-4 {
        width: 75% !important;
}

.h-10 {
        height: 10% !important;
}

.h-20 {
        height: 20% !important;
}

.h-30 {
        height: 30% !important;
}

.h-40 {
        height: 40% !important;
}

.h-50 {
        height: 50% !important;
}

.h-60 {
        height: 60% !important;
}

.h-70 {
        height: 70% !important;
}

.h-80 {
        height: 80% !important;
}

.h-90 {
        height: 90% !important;
}

.h-100 {
        height: 100% !important;
}

.h-1-4 {
        height: 25% !important;
}

.h-1-3 {
        height: 33.33% !important;
}

.h-2-3 {
        height: 66.666% !important;
}

.h-3-4 {
        height: 75% !important;
}

.h-100vh {
        height: 100vh !important;
}

.wh-50x {   height: 50px; width: 50px; }

.wh-70x {   height: 70px; width: 70px; }

.wh-100x {   height: 100px; width: 100px; }

.w-100x {   width: 100px !important; }

.w-200x {
        width: 200px !important;
}

.w-300x {
        width: 300px !important;
}

.w-400x {
        width: 400px !important;
}

.w-500x {
        width: 500px !important;
}

.w-600x {
        width: 600px !important;
}

.w-700x {
        width: 700px !important;
}

.w-800x {
        width: 800px !important;
}

.w-900x {
        width: 900px !important;
}

.h-100x {
        height: 100px !important;
}

.h-200x {
        height: 200px !important;
}

.h-300x {
        height: 300px !important;
}

.h-400x {
        height: 400px !important;
}

.h-500x {
        height: 500px !important;
}

.h-600x {
        height: 600px !important;
}

.h-700x {
        height: 700px !important;
}

.h-800x {
        height: 800px !important;
}

.h-900x {
        height: 900px !important;
}

.min-h-100x {
        min-height: 100px !important;
}

.min-h-200x {
        min-height: 200px !important;
}

.min-h-300x {
        min-height: 300px !important;
}

.min-h-350x {
        min-height: 350px !important;
}

.min-h-400x {
        min-height: 400px !important;
}

.min-h-500x {
        min-height: 500px !important;
}

.mx-w-700x {  max-width: 700px !important; }

.mx-w-600x {  max-width: 600px !important; }

.mx-w-500x {  max-width: 500px !important; }

.mx-w-400x {  max-width: 400px !important; }

.mx-w-300x {  max-width: 300px !important; }

.mx-w-200x { max-width: 200px !important; }

/* RESPONSIVE */

@media only screen and (max-width: 1200px) {

        .w-lg-auto {
                width: auto !important;
        }

        .h-lg-auto {
                height: auto !important;
        }

        .w-lg-10 {
                width: 10% !important;
        }

        .w-lg-20 {
                width: 20% !important;
        }

        .w-lg-30 {
                width: 30% !important;
        }

        .w-lg-40 {
                width: 40% !important;
        }

        .w-lg-50 {
                width: 50% !important;
        }

        .w-lg-60 {
                width: 60% !important;
        }

        .w-lg-70 {
                width: 70% !important;
        }

        .w-lg-80 {
                width: 80% !important;
        }

        .w-lg-90 {
                width: 90% !important;
        }

        .w-lg-100 {
                width: 100% !important;
        }

        .w-lg-1-4 {
                width: 25% !important;
        }

        .w-lg-1-3 {
                width: 33.33% !important;
        }

        .w-lg-2-3 {
                width: 66.666% !important;
        }

        .w-lg-3-4 {
                width: 75% !important;
        }

        .h-lg-10 {
                height: 10% !important;
        }

        .h-lg-20 {
                height: 20% !important;
        }

        .h-lg-30 {
                height: 30% !important;
        }

        .h-lg-40 {
                height: 40% !important;
        }

        .h-lg-50 {
                height: 50% !important;
        }

        .h-lg-60 {
                height: 60% !important;
        }

        .h-lg-70 {
                height: 70% !important;
        }

        .h-lg-80 {
                height: 80% !important;
        }

        .h-lg-90 {
                height: 90% !important;
        }

        .h-lg-100 {
                height: 100% !important;
        }

        .h-lg-1-4 {
                height: 25% !important;
        }

        .h-lg-1-3 {
                height: 33.33% !important;
        }

        .h-lg-2-3 {
                height: 66.666% !important;
        }

        .h-lg-3-4 {
                height: 75% !important;
        }

        .h-lg-100vh {
                height: 100vh !important;
        }

        .wh-lg-100x {
                height: 100px !important;
                width: 100px !important;
        }

        .w-lg-100x {
                width: 100px !important;
        }

        .w-lg-200x {
                width: 200px !important;
        }

        .w-lg-300x {
                width: 300px !important;
        }

        .w-lg-400x {
                width: 400px !important;
        }

        .w-lg-500x {
                width: 500px !important;
        }

        .w-lg-600x {
                width: 600px !important;
        }

        .w-lg-700x {
                width: 700px !important;
        }

        .w-lg-800x {
                width: 800px !important;
        }

        .w-lg-900x {
                width: 900px !important;
        }

        .h-lg-100x {
                height: 100px !important;
        }

        .h-lg-200x {
                height: 200px !important;
        }

        .h-lg-300x {
                height: 300px !important;
        }

        .h-lg-350x {
                height: 350px !important;
        }

        .h-lg-400x {
                height: 400px !important;
        }

        .h-lg-500x {
                height: 500px !important;
        }

        .h-lg-600x {
                height: 600px !important;
        }

        .h-lg-700x {
                height: 700px !important;
        }

        .h-lg-800x {
                height: 800px !important;
        }

        .h-lg-900x {
                height: 900px !important;
        }

        .mx-w-lg-400x {
                max-width: 400px !important;
        }

}

@media only screen and (max-width: 992px) {

        .w-md-auto {
                width: auto !important;
        }

        .h-md-auto {
                height: auto !important;
        }

        .w-md-10 {
                width: 10% !important;
        }

        .w-md-20 {
                width: 20% !important;
        }

        .w-md-30 {
                width: 30% !important;
        }

        .w-md-40 {
                width: 40% !important;
        }

        .w-md-50 {
                width: 50% !important;
        }

        .w-md-60 {
                width: 60% !important;
        }

        .w-md-70 {
                width: 70% !important;
        }

        .w-md-80 {
                width: 80% !important;
        }

        .w-md-90 {
                width: 90% !important;
        }

        .w-md-100 {
                width: 100% !important;
        }

        .w-md-1-4 {
                width: 25% !important;
        }

        .w-md-1-3 {
                width: 33.33% !important;
        }

        .w-md-2-3 {
                width: 66.666% !important;
        }

        .w-md-3-4 {
                width: 75% !important;
        }

        .h-md-10 {
                height: 10% !important;
        }

        .h-md-20 {
                height: 20% !important;
        }

        .h-md-30 {
                height: 30% !important;
        }

        .h-md-40 {
                height: 40% !important;
        }

        .h-md-50 {
                height: 50% !important;
        }

        .h-md-60 {
                height: 60% !important;
        }

        .h-md-70 {
                height: 70% !important;
        }

        .h-md-80 {
                height: 80% !important;
        }

        .h-md-90 {
                height: 90% !important;
        }

        .h-md-100 {
                height: 100% !important;
        }

        .h-md-1-4 {
                height: 25% !important;
        }

        .h-md-1-3 {
                height: 33.33% !important;
        }

        .h-md-2-3 {
                height: 66.666% !important;
        }

        .h-md-3-4 {
                height: 75% !important;
        }

        .h-md-100vh {
                height: 100vh !important;
        }

        .wh-md-100x {
                height: 100px !important;
                width: 100px !important;
        }

        .w-md-100x {
                width: 100px !important;
        }

        .w-md-200x {
                width: 200px !important;
        }

        .w-md-300x {
                width: 300px !important;
        }

        .w-md-400x {
                width: 400px !important;
        }

        .w-md-500x {
                width: 500px !important;
        }

        .w-md-600x {
                width: 600px !important;
        }

        .w-md-700x {
                width: 700px !important;
        }

        .w-md-800x {
                width: 800px !important;
        }

        .w-md-900x {
                width: 900px !important;
        }

        .h-md-100x {
                height: 100px !important;
        }

        .h-md-200x {
                height: 200px !important;
        }

        .h-md-350x {
                height: 350px !important;
        }

        .h-md-300x {
                height: 300px !important;
        }

        .h-md-400x {
                height: 400px !important;
        }

        .h-md-500x {
                height: 500px !important;
        }

        .h-md-600x {
                height: 600px !important;
        }

        .h-md-700x {
                height: 700px !important;
        }

        .h-md-800x {
                height: 800px !important;
        }

        .h-md-900x {
                height: 900px !important;
        }

        .mx-w-md-400x {
                max-width: 400px !important;
        }

}

@media only screen and (max-width: 767px) {

        .w-sm-auto {
                width: auto !important;
        }

        .h-sm-auto {
                height: auto !important;
        }

        .w-sm-10 {
                width: 10% !important;
        }

        .w-sm-20 {
                width: 20% !important;
        }

        .w-sm-30 {
                width: 30% !important;
        }

        .w-sm-40 {
                width: 40% !important;
        }

        .w-sm-50 {
                width: 50% !important;
        }

        .w-sm-60 {
                width: 60% !important;
        }

        .w-sm-70 {
                width: 70% !important;
        }

        .w-sm-80 {
                width: 80% !important;
        }

        .w-sm-90 {
                width: 90% !important;
        }

        .w-sm-100 {
                width: 100% !important;
        }

        .w-sm-1-4 {
                width: 25% !important;
        }

        .w-sm-1-3 {
                width: 33.33% !important;
        }

        .w-sm-2-3 {
                width: 66.666% !important;
        }

        .w-sm-3-4 {
                width: 75% !important;
        }

        .h-sm-10 {
                height: 10% !important;
        }

        .h-sm-20 {
                height: 20% !important;
        }

        .h-sm-30 {
                height: 30% !important;
        }

        .h-sm-40 {
                height: 40% !important;
        }

        .h-sm-50 {
                height: 50% !important;
        }

        .h-sm-60 {
                height: 60% !important;
        }

        .h-sm-70 {
                height: 70% !important;
        }

        .h-sm-80 {
                height: 80% !important;
        }

        .h-sm-90 {
                height: 90% !important;
        }

        .h-sm-100 {
                height: 100% !important;
        }

        .h-sm-1-4 {
                height: 25% !important;
        }

        .h-sm-1-3 {
                height: 33.33% !important;
        }

        .h-sm-2-3 {
                height: 66.666% !important;
        }

        .h-sm-3-4 {
                height: 75% !important;
        }

        .h-sm-100vh {
                height: 100vh !important;
        }

        .wh-sm-100x {
                height: 100px !important;
                width: 100px !important;
        }

        .w-sm-100x {
                width: 100px !important;
        }

        .w-sm-200x {
                width: 200px !important;
        }

        .w-sm-300x {
                width: 300px !important;
        }

        .w-sm-400x {
                width: 400px !important;
        }

        .w-sm-500x {
                width: 500px !important;
        }

        .w-sm-600x {
                width: 600px !important;
        }

        .w-sm-700x {
                width: 700px !important;
        }

        .w-sm-800x {
                width: 800px !important;
        }

        .w-sm-900x {
                width: 900px !important;
        }

        .h-sm-100x {
                height: 100px !important;
        }

        .h-sm-200x {
                height: 200px !important;
        }

        .h-sm-300x {
                height: 300px !important;
        }

        .h-sm-350x {
                height: 350px !important;
        }

        .h-sm-400x {
                height: 400px !important;
        }

        .h-sm-500x {
                height: 500px !important;
        }

        .h-sm-600x {
                height: 600px !important;
        }

        .h-sm-700x {
                height: 700px !important;
        }

        .h-sm-800x {
                height: 800px !important;
        }

        .h-sm-900x {
                height: 900px !important;
        }

        .min-h-100x {
                min-height: 100px !important;
        }

        .mx-w-sm-400x {
                max-width: 400px !important;
        }

}

@media only screen and (max-width: 576px) {

        .w-xs-auto {
                width: auto !important;
        }

        .h-xs-auto {
                height: auto !important;
        }

        .w-xs-10 {
                width: 10% !important;
        }

        .w-xs-20 {
                width: 20% !important;
        }

        .w-xs-30 {
                width: 30% !important;
        }

        .w-xs-40 {
                width: 40% !important;
        }

        .w-xs-50 {
                width: 50% !important;
        }

        .w-xs-60 {
                width: 60% !important;
        }

        .w-xs-70 {
                width: 70% !important;
        }

        .w-xs-80 {
                width: 80% !important;
        }

        .w-xs-90 {
                width: 90% !important;
        }

        .w-xs-100 {
                width: 100% !important;
        }

        .w-xs-1-4 {
                width: 25% !important;
        }

        .w-xs-1-3 {
                width: 33.33% !important;
        }

        .w-xs-2-3 {
                width: 66.666% !important;
        }

        .w-xs-3-4 {
                width: 75% !important;
        }

        .h-xs-10 {
                height: 10% !important;
        }

        .h-xs-20 {
                height: 20% !important;
        }

        .h-xs-30 {
                height: 30% !important;
        }

        .h-xs-40 {
                height: 40% !important;
        }

        .h-xs-50 {
                height: 50% !important;
        }

        .h-xs-60 {
                height: 60% !important;
        }

        .h-xs-70 {
                height: 70% !important;
        }

        .h-xs-80 {
                height: 80% !important;
        }

        .h-xs-90 {
                height: 90% !important;
        }

        .h-xs-100 {
                height: 100% !important;
        }

        .h-xs-1-4 {
                height: 25% !important;
        }

        .h-xs-1-3 {
                height: 33.33% !important;
        }

        .h-xs-2-3 {
                height: 66.666% !important;
        }

        .h-xs-3-4 {
                height: 75% !important;
        }

        .h-xs-100vh {
                height: 100vh !important;
        }

        .whxsm-100x {
                height: 100px !important;
                width: 100px !important;
        }

        .w-xs-100x {
                width: 100px !important;
        }

        .w-xs-200x {
                width: 200px !important;
        }

        .w-xs-300x {
                width: 300px !important;
        }

        .w-xs-400x {
                width: 400px !important;
        }

        .w-xs-500x {
                width: 500px !important;
        }

        .w-xs-600x {
                width: 600px !important;
        }

        .w-xs-700x {
                width: 700px !important;
        }

        .w-xs-800x {
                width: 800px !important;
        }

        .w-xs-900x {
                width: 900px !important;
        }

        .h-xs-100x {
                height: 100px !important;
        }

        .h-xs-200x {
                height: 200px !important;
        }

        .h-xs-300x {
                height: 300px !important;
        }

        .h-xs-350x {
                height: 350px !important;
        }

        .h-xs-400x {
                height: 400px !important;
        }

        .h-xs-500x {
                height: 500px !important;
        }

        .h-xs-600x {
                height: 600px !important;
        }

        .h-xs-700x {
                height: 700px !important;
        }

        .h-xs-800x {
                height: 800px !important;
        }

        .h-xs-900x {
                height: 900px !important;
        }

        .mx-w-xs-400x {
                max-width: 400px !important;
        }

}

/* LIST */

.list-block > li {
        display: block;
}

.list-relative > li {
        position: relative;
}

.list-a-block > li > a {
        display: block;
}

.list-btm-border-white > li {
        border-bottom: 1px solid #fff;
}

.list-a-bg-grey > li > a {
        background: #EBEBEB;
}

.list-a-br-2 > li > a {
        border-radius: 2px;
}

.list-a-hw-radial-35 > li > a {
        height: 35px;
        width: 35px;
        border-radius: 35px;
        line-height: 35px;
}

.list-a-hvr-primary > li > a:hover {
        background: #EF0031;
        color: #fff;
}

/* MARGIN/PADDING */

.list-a-p-0 > li > a {
        padding: 0px;
}

.list-a-p-5 > li > a {
        padding: 5px;
}

.list-a-p-10 > li > a {
        padding: 10px;
}

.list-a-p-15 > li > a {
        padding: 15px;
}

.list-a-p-20 > li > a {
        padding: 20px;
}

.list-a-p-25 > li > a {
        padding: 25px;
}

.list-a-p-30 > li > a {
        padding: 30px;
}

.list-a-plr-0 > li > a {
        padding-left: 0px;
        padding-right: 0px;
}

.list-a-plr-5 > li > a {
        padding-left: 5px;
        padding-right: 5px;
}

.list-a-plr-10 > li > a {
        padding-left: 10px;
        padding-right: 10px;
}

.list-a-plr-15 > li > a {
        padding-left: 15px;
        padding-right: 15px;
}

.list-a-plr-20 > li > a {
        padding-left: 20px;
        padding-right: 20px;
}

.list-a-plr-25 > li > a {
        padding-left: 25px;
        padding-right: 25px;
}

.list-a-plr-30 > li > a {
        padding-left: 30px;
        padding-right: 30px;
}

.list-a-pr-0 > li > a {
        padding-right: 0px;
}

.list-a-pr-5 > li > a {
        padding-right: 5px;
}

.list-a-pr-10 > li > a {
        padding-right: 10px;
}

.list-a-pr-15 > li > a {
        padding-right: 15px;
}

.list-a-pr-20 > li > a {
        padding-right: 20px;
}

.list-a-pr-25 > li > a {
        padding-right: 25px;
}

.list-a-pr-30 > li > a {
        padding-right: 30px;
}

.list-a-pl-0 > li > a {
        padding-left: 0px;
}

.list-a-pl-5 > li > a {
        padding-left: 5px;
}

.list-a-pl-10 > li > a {
        padding-left: 10px;
}

.list-a-pl-15 > li > a {
        padding-left: 15px;
}

.list-a-pl-20 > li > a {
        padding-left: 20px;
}

.list-a-pl-25 > li > a {
        padding-left: 25px;
}

.list-a-pl-30 > li > a {
        padding-left: 30px;
}

.list-a-ptb-0 > li > a {
        padding-top: 0px;
        padding-bottom: 0px;
}

.list-a-ptb-5 > li > a {
        padding-top: 5px;
        padding-bottom: 5px;
}

.list-a-ptb-10 > li > a {
        padding-top: 10px;
        padding-bottom: 10px;
}

.list-a-ptb-15 > li > a {
        padding-top: 15px;
        padding-bottom: 15px;
}

.list-a-ptb-20 > li > a {
        padding-top: 20px;
        padding-bottom: 20px;
}

.list-a-ptb-25 > li > a {
        padding-top: 25px;
        padding-bottom: 25px;
}

.list-a-ptb-30 > li > a {
        padding-top: 30px;
        padding-bottom: 30px;
}

.list-a-ptb-7 > li > a {
        padding-top: 7px;
        padding-bottom: 7px;
}

.list-a-ptb-8 > li > a {
        padding-top: 8px;
        padding-bottom: 8px;
}

.list-a-pt-0 > li > a {
        padding-top: 0px;
}

.list-a-pt-5 > li > a {
        padding-top: 5px;
}

.list-a-pt-10 > li > a {
        padding-top: 10px;
}

.list-a-pt-15 > li > a {
        padding-top: 15px;
}

.list-a-pt-20 > li > a {
        padding-top: 20px;
}

.list-a-pt-25 > li > a {
        padding-top: 25px;
}

.list-a-pt-30 > li > a {
        padding-top: 30px;
}

.list-a-pb-0 > li > a {
        padding-bottom: 0px;
}

.list-a-pb-5 > li > a {
        padding-bottom: 5px;
}

.list-a-pb-10 > li > a {
        padding-bottom: 10px;
}

.list-a-pb-15 > li > a {
        padding-bottom: 15px;
}

.list-a-pb-20 > li > a {
        padding-bottom: 20px;
}

.list-a-pb-25 > li > a {
        padding-bottom: 25px;
}

.list-a-pb-30 > li > a {
        padding-bottom: 30px;
}

.list-li-mlr-0 > li {
        margin-left: 0px;
        margin-right: 0px;
}

.list-li-mlr-5 > li {
        margin-left: 5px;
        margin-right: 5px;
}

.list-li-mlr-10 > li {
        margin-left: 10px;
        margin-right: 10px;
}

.list-li-mlr-15 > li {
        margin-left: 15px;
        margin-right: 15px;
}

.list-li-mlr-20 > li {
        margin-left: 20px;
        margin-right: 20px;
}

.list-li-mlr-25 > li {
        margin-left: 25px;
        margin-right: 25px;
}

.list-li-mlr-30 > li {
        margin-left: 30px;
        margin-right: 30px;
}

.list-li-mtb-0 > li {
        margin-top: 0px;
        margin-bottom: 0px;
}

.list-li-mtb-5 > li {
        margin-top: 5px;
        margin-bottom: 5px;
}

.list-li-mtb-10 > li {
        margin-top: 10px;
        margin-bottom: 10px;
}

.list-li-mtb-15 > li {
        margin-top: 15px;
        margin-bottom: 15px;
}

.list-li-mtb-20 > li {
        margin-top: 20px;
        margin-bottom: 20px;
}

.list-li-mtb-25 > li {
        margin-top: 25px;
        margin-bottom: 25px;
}

.list-li-mtb-30 > li {
        margin-top: 30px;
        margin-bottom: 30px;
}

.list-li-mr-0 > li {
        margin-right: 0px;
}

.list-li-mr-5 > li {
        margin-right: 5px;
}

.list-li-mr-10 > li {
        margin-right: 10px;
}

.list-li-mr-15 > li {
        margin-right: 15px;
}

.list-li-mr-20 > li {
        margin-right: 20px;
}

.list-li-mr-25 > li {
        margin-right: 25px;
}

.list-li-mr-30 > li {
        margin-right: 30px;
}

.list-li-ml-0 > li {
        margin-left: 0px;
}

.list-li-ml-5 > li {
        margin-left: 5px;
}

.list-li-ml-10 > li {
        margin-left: 10px;
}

.list-li-ml-15 > li {
        margin-left: 15px;
}

.list-li-ml-20 > li {
        margin-left: 20px;
}

.list-li-ml-25 > li {
        margin-left: 25px;
}

.list-li-ml-30 > li {
        margin-left: 30px;
}

.list-li-mt-0 > li {
        margin-top: 0px;
}

.list-li-mt-5 > li {
        margin-top: 5px;
}

.list-li-mt-10 > li {
        margin-top: 10px;
}

.list-li-mt-15 > li {
        margin-top: 15px;
}

.list-li-mt-20 > li {
        margin-top: 20px;
}

.list-li-mt-25 > li {
        margin-top: 25px;
}

.list-li-mt-30 > li {
        margin-top: 30px;
}

.list-li-mb-0 > li {
        margin-bottom: 0px;
}

.list-li-mb-5 > li {
        margin-bottom: 5px;
}

.list-li-mb-10 > li {
        margin-bottom: 10px;
}

.list-li-mb-15 > li {
        margin-bottom: 15px;
}

.list-li-mb-20 > li {
        margin-bottom: 20px;
}

.list-li-mb-25 > li {
        margin-bottom: 25px;
}

.list-li-mb-30 > li {
        margin-bottom: 30px;
}

.list-li-plr-0 > li {
        padding-left: 0px;
        padding-right: 0px;
}

.list-li-plr-5 > li {
        padding-left: 5px;
        padding-right: 5px;
}

.list-li-plr-10 > li {
        padding-left: 10px;
        padding-right: 10px;
}

.list-li-plr-15 > li {
        padding-left: 15px;
        padding-right: 15px;
}

.list-li-plr-20 > li {
        padding-left: 20px;
        padding-right: 20px;
}

.list-li-plr-25 > li {
        padding-left: 25px;
        padding-right: 25px;
}

.list-li-plr-30 > li {
        padding-left: 30px;
        padding-right: 30px;
}

.list-li-ptb-0 > li {
        padding-top: 0px;
        padding-bottom: 0px;
}

.list-li-ptb-5 > li {
        padding-top: 5px;
        padding-bottom: 5px;
}

.list-li-ptb-10 > li {
        padding-top: 10px;
        padding-bottom: 10px;
}

.list-li-ptb-15 > li {
        padding-top: 15px;
        padding-bottom: 15px;
}

.list-li-ptb-20 > li {
        padding-top: 20px;
        padding-bottom: 20px;
}

.list-li-ptb-25 > li {
        padding-top: 25px;
        padding-bottom: 25px;
}

.list-li-ptb-30 > li {
        padding-top: 30px;
        padding-bottom: 30px;
}

.list-li-pr-0 > li {
        padding-right: 0px;
}

.list-li-pr-5 > li {
        padding-right: 5px;
}

.list-li-pr-10 > li {
        padding-right: 10px;
}

.list-li-pr-15 > li {
        padding-right: 15px;
}

.list-li-pr-20 > li {
        padding-right: 20px;
}

.list-li-pr-25 > li {
        padding-right: 25px;
}

.list-li-pr-30 > li {
        padding-right: 30px;
}

.list-li-pl-0 > li {
        padding-left: 0px;
}

.list-li-pl-5 > li {
        padding-left: 5px;
}

.list-li-pl-10 > li {
        padding-left: 10px;
}

.list-li-pl-15 > li {
        padding-left: 15px;
}

.list-li-pl-20 > li {
        padding-left: 20px;
}

.list-li-pl-25 > li {
        padding-left: 25px;
}

.list-li-pl-30 > li {
        padding-left: 30px;
}

.list-li-pt-0 > li {
        padding-top: 0px;
}

.list-li-pt-5 > li {
        padding-top: 5px;
}

.list-li-pt-10 > li {
        padding-top: 10px;
}

.list-li-pt-15 > li {
        padding-top: 15px;
}

.list-li-pt-20 > li {
        padding-top: 20px;
}

.list-li-pt-25 > li {
        padding-top: 25px;
}

.list-li-pt-30 > li {
        padding-top: 30px;
}

.list-li-pb-0 > li {
        padding-bottom: 0px;
}

.list-li-pb-5 > li {
        padding-bottom: 5px;
}

.list-li-pb-10 > li {
        padding-bottom: 10px;
}

.list-li-pb-15 > li {
        padding-bottom: 15px;
}

.list-li-pb-20 > li {
        padding-bottom: 20px;
}

.list-li-pb-25 > li {
        padding-bottom: 25px;
}

.list-li-pb-30 > li {
        padding-bottom: 30px;
}

/* RESPONSIVE */

@media only screen and (max-width: 767px) {

        .list-a-p-sm-0 > li > a {
                padding: 0px;
        }

        .list-a-p-sm-5 > li > a {
                padding: 5px;
        }

        .list-a-p-sm-10 > li > a {
                padding: 10px;
        }

        .list-a-p-sm-15 > li > a {
                padding: 15px;
        }

        .list-a-p-sm-20 > li > a {
                padding: 20px;
        }

        .list-a-p-sm-25 > li > a {
                padding: 25px;
        }

        .list-a-p-sm-30 > li > a {
                padding: 30px;
        }

        .list-a-plr-sm-0 > li > a {
                padding-left: 0px;
                padding-right: 0px;
        }

        .list-a-plr-sm-5 > li > a {
                padding-left: 5px;
                padding-right: 5px;
        }

        .list-a-plr-sm-10 > li > a {
                padding-left: 10px;
                padding-right: 10px;
        }

        .list-a-plr-sm-15 > li > a {
                padding-left: 15px;
                padding-right: 15px;
        }

        .list-a-plr-sm-20 > li > a {
                padding-left: 20px;
                padding-right: 20px;
        }

        .list-a-plr-sm-25 > li > a {
                padding-left: 25px;
                padding-right: 25px;
        }

        .list-a-plr-sm-30 > li > a {
                padding-left: 30px;
                padding-right: 30px;
        }

        .list-a-pr-sm-0 > li > a {
                padding-right: 0px;
        }

        .list-a-pr-sm-5 > li > a {
                padding-right: 5px;
        }

        .list-a-pr-sm-10 > li > a {
                padding-right: 10px;
        }

        .list-a-pr-sm-15 > li > a {
                padding-right: 15px;
        }

        .list-a-pr-sm-20 > li > a {
                padding-right: 20px;
        }

        .list-a-pr-sm-25 > li > a {
                padding-right: 25px;
        }

        .list-a-pr-sm-30 > li > a {
                padding-right: 30px;
        }

        .list-a-pl-sm-0 > li > a {
                padding-left: 0px;
        }

        .list-a-pl-sm-5 > li > a {
                padding-left: 5px;
        }

        .list-a-pl-sm-10 > li > a {
                padding-left: 10px;
        }

        .list-a-pl-sm-15 > li > a {
                padding-left: 15px;
        }

        .list-a-pl-sm-20 > li > a {
                padding-left: 20px;
        }

        .list-a-pl-sm-25 > li > a {
                padding-left: 25px;
        }

        .list-a-pl-sm-30 > li > a {
                padding-left: 30px;
        }

        .list-a-ptb-sm-0 > li > a {
                padding-top: 0px;
                padding-bottom: 0px;
        }

        .list-a-ptb-sm-5 > li > a {
                padding-top: 5px;
                padding-bottom: 5px;
        }

        .list-a-ptb-sm-10 > li > a {
                padding-top: 10px;
                padding-bottom: 10px;
        }

        .list-a-ptb-sm-15 > li > a {
                padding-top: 15px;
                padding-bottom: 15px;
        }

        .list-a-ptb-sm-20 > li > a {
                padding-top: 20px;
                padding-bottom: 20px;
        }

        .list-a-ptb-sm-25 > li > a {
                padding-top: 25px;
                padding-bottom: 25px;
        }

        .list-a-ptb-sm-30 > li > a {
                padding-top: 30px;
                padding-bottom: 30px;
        }

        .list-a-ptb-sm-7 > li > a {
                padding-top: 7px;
                padding-bottom: 7px;
        }

        .list-a-ptb-sm-8 > li > a {
                padding-top: 8px;
                padding-bottom: 8px;
        }

        .list-a-pt-sm-0 > li > a {
                padding-top: 0px;
        }

        .list-a-pt-sm-5 > li > a {
                padding-top: 5px;
        }

        .list-a-pt-sm-10 > li > a {
                padding-top: 10px;
        }

        .list-a-pt-sm-15 > li > a {
                padding-top: 15px;
        }

        .list-a-pt-sm-20 > li > a {
                padding-top: 20px;
        }

        .list-a-pt-sm-25 > li > a {
                padding-top: 25px;
        }

        .list-a-pt-sm-30 > li > a {
                padding-top: 30px;
        }

        .list-a-pb-sm-0 > li > a {
                padding-bottom: 0px;
        }

        .list-a-pb-sm-5 > li > a {
                padding-bottom: 5px;
        }

        .list-a-pb-sm-10 > li > a {
                padding-bottom: 10px;
        }

        .list-a-pb-sm-15 > li > a {
                padding-bottom: 15px;
        }

        .list-a-pb-sm-20 > li > a {
                padding-bottom: 20px;
        }

        .list-a-pb-sm-25 > li > a {
                padding-bottom: 25px;
        }

        .list-a-pb-sm-30 > li > a {
                padding-bottom: 30px;
        }

        .list-li-mlr-sm-0 > li {
                margin-left: 0px;
                margin-right: 0px;
        }

        .list-li-mlr-sm-5 > li {
                margin-left: 5px;
                margin-right: 5px;
        }

        .list-li-mlr-sm-10 > li {
                margin-left: 10px;
                margin-right: 10px;
        }

        .list-li-mlr-sm-15 > li {
                margin-left: 15px;
                margin-right: 15px;
        }

        .list-li-mlr-sm-20 > li {
                margin-left: 20px;
                margin-right: 20px;
        }

        .list-li-mlr-sm-25 > li {
                margin-left: 25px;
                margin-right: 25px;
        }

        .list-li-mlr-sm-30 > li {
                margin-left: 30px;
                margin-right: 30px;
        }

        .list-li-mtb-sm-0 > li {
                margin-top: 0px;
                margin-bottom: 0px;
        }

        .list-li-mtb-sm-5 > li {
                margin-top: 5px;
                margin-bottom: 5px;
        }

        .list-li-mtb-sm-10 > li {
                margin-top: 10px;
                margin-bottom: 10px;
        }

        .list-li-mtb-sm-15 > li {
                margin-top: 15px;
                margin-bottom: 15px;
        }

        .list-li-mtb-sm-20 > li {
                margin-top: 20px;
                margin-bottom: 20px;
        }

        .list-li-mtb-sm-25 > li {
                margin-top: 25px;
                margin-bottom: 25px;
        }

        .list-li-mtb-sm-30 > li {
                margin-top: 30px;
                margin-bottom: 30px;
        }

        .list-li-mr-sm-0 > li {
                margin-right: 0px;
        }

        .list-li-mr-sm-5 > li {
                margin-right: 5px;
        }

        .list-li-mr-sm-10 > li {
                margin-right: 10px;
        }

        .list-li-mr-sm-15 > li {
                margin-right: 15px;
        }

        .list-li-mr-sm-20 > li {
                margin-right: 20px;
        }

        .list-li-mr-sm-25 > li {
                margin-right: 25px;
        }

        .list-li-mr-sm-30 > li {
                margin-right: 30px;
        }

        .list-li-ml-sm-0 > li {
                margin-left: 0px;
        }

        .list-li-ml-sm-5 > li {
                margin-left: 5px;
        }

        .list-li-ml-sm-10 > li {
                margin-left: 10px;
        }

        .list-li-ml-sm-15 > li {
                margin-left: 15px;
        }

        .list-li-ml-sm-20 > li {
                margin-left: 20px;
        }

        .list-li-ml-sm-25 > li {
                margin-left: 25px;
        }

        .list-li-ml-sm-30 > li {
                margin-left: 30px;
        }

        .list-li-mt-sm-0 > li {
                margin-top: 0px;
        }

        .list-li-mt-sm-5 > li {
                margin-top: 5px;
        }

        .list-li-mt-sm-10 > li {
                margin-top: 10px;
        }

        .list-li-mt-sm-15 > li {
                margin-top: 15px;
        }

        .list-li-mt-sm-20 > li {
                margin-top: 20px;
        }

        .list-li-mt-sm-25 > li {
                margin-top: 25px;
        }

        .list-li-mt-sm-30 > li {
                margin-top: 30px;
        }

        .list-li-mb-sm-0 > li {
                margin-bottom: 0px;
        }

        .list-li-mb-sm-5 > li {
                margin-bottom: 5px;
        }

        .list-li-mb-sm-10 > li {
                margin-bottom: 10px;
        }

        .list-li-mb-sm-15 > li {
                margin-bottom: 15px;
        }

        .list-li-mb-sm-20 > li {
                margin-bottom: 20px;
        }

        .list-li-mb-sm-25 > li {
                margin-bottom: 25px;
        }

        .list-li-mb-sm-30 > li {
                margin-bottom: 30px;
        }

        .list-li-plr-sm-0 > li {
                padding-left: 0px;
                padding-right: 0px;
        }

        .list-li-plr-sm-5 > li {
                padding-left: 5px;
                padding-right: 5px;
        }

        .list-li-plr-sm-10 > li {
                padding-left: 10px;
                padding-right: 10px;
        }

        .list-li-plr-sm-15 > li {
                padding-left: 15px;
                padding-right: 15px;
        }

        .list-li-plr-sm-20 > li {
                padding-left: 20px;
                padding-right: 20px;
        }

        .list-li-plr-sm-25 > li {
                padding-left: 25px;
                padding-right: 25px;
        }

        .list-li-plr-sm-30 > li {
                padding-left: 30px;
                padding-right: 30px;
        }

        .list-li-ptb-sm-0 > li {
                padding-top: 0px;
                padding-bottom: 0px;
        }

        .list-li-ptb-sm-5 > li {
                padding-top: 5px;
                padding-bottom: 5px;
        }

        .list-li-ptb-sm-10 > li {
                padding-top: 10px;
                padding-bottom: 10px;
        }

        .list-li-ptb-sm-15 > li {
                padding-top: 15px;
                padding-bottom: 15px;
        }

        .list-li-ptb-sm-20 > li {
                padding-top: 20px;
                padding-bottom: 20px;
        }

        .list-li-ptb-sm-25 > li {
                padding-top: 25px;
                padding-bottom: 25px;
        }

        .list-li-ptb-sm-30 > li {
                padding-top: 30px;
                padding-bottom: 30px;
        }

        .list-li-pr-sm-0 > li {
                padding-right: 0px;
        }

        .list-li-pr-sm-5 > li {
                padding-right: 5px;
        }

        .list-li-pr-sm-10 > li {
                padding-right: 10px;
        }

        .list-li-pr-sm-15 > li {
                padding-right: 15px;
        }

        .list-li-pr-sm-20 > li {
                padding-right: 20px;
        }

        .list-li-pr-sm-25 > li {
                padding-right: 25px;
        }

        .list-li-pr-sm-30 > li {
                padding-right: 30px;
        }

        .list-li-pl-sm-0 > li {
                padding-left: 0px;
        }

        .list-li-pl-sm-5 > li {
                padding-left: 5px;
        }

        .list-li-pl-sm-10 > li {
                padding-left: 10px;
        }

        .list-li-pl-sm-15 > li {
                padding-left: 15px;
        }

        .list-li-pl-sm-20 > li {
                padding-left: 20px;
        }

        .list-li-pl-sm-25 > li {
                padding-left: 25px;
        }

        .list-li-pl-sm-30 > li {
                padding-left: 30px;
        }

        .list-li-pt-sm-0 > li {
                padding-top: 0px;
        }

        .list-li-pt-sm-5 > li {
                padding-top: 5px;
        }

        .list-li-pt-sm-10 > li {
                padding-top: 10px;
        }

        .list-li-pt-sm-15 > li {
                padding-top: 15px;
        }

        .list-li-pt-sm-20 > li {
                padding-top: 20px;
        }

        .list-li-pt-sm-25 > li {
                padding-top: 25px;
        }

        .list-li-pt-sm-30 > li {
                padding-top: 30px;
        }

        .list-li-pb-sm-0 > li {
                padding-bottom: 0px;
        }

        .list-li-pb-sm-5 > li {
                padding-bottom: 5px;
        }

        .list-li-pb-sm-10 > li {
                padding-bottom: 10px;
        }

        .list-li-pb-sm-15 > li {
                padding-bottom: 15px;
        }

        .list-li-pb-sm-20 > li {
                padding-bottom: 20px;
        }

        .list-li-pb-sm-25 > li {
                padding-bottom: 25px;
        }

        .list-li-pb-sm-30 > li {
                padding-bottom: 30px;
        }

}

/* RESPONSIVE */

@media only screen and (max-width: 576px) {

        .list-a-p-xs-0 > li > a {
                padding: 0px;
        }

        .list-a-p-xs-5 > li > a {
                padding: 5px;
        }

        .list-a-p-xs-10 > li > a {
                padding: 10px;
        }

        .list-a-p-xs-15 > li > a {
                padding: 15px;
        }

        .list-a-p-xs-20 > li > a {
                padding: 20px;
        }

        .list-a-p-xs-25 > li > a {
                padding: 25px;
        }

        .list-a-p-xs-30 > li > a {
                padding: 30px;
        }

        .list-a-plr-xs-0 > li > a {
                padding-left: 0px;
                padding-right: 0px;
        }

        .list-a-plr-xs-5 > li > a {
                padding-left: 5px;
                padding-right: 5px;
        }

        .list-a-plr-xs-10 > li > a {
                padding-left: 10px;
                padding-right: 10px;
        }

        .list-a-plr-xs-15 > li > a {
                padding-left: 15px;
                padding-right: 15px;
        }

        .list-a-plr-xs-20 > li > a {
                padding-left: 20px;
                padding-right: 20px;
        }

        .list-a-plr-xs-25 > li > a {
                padding-left: 25px;
                padding-right: 25px;
        }

        .list-a-plr-xs-30 > li > a {
                padding-left: 30px;
                padding-right: 30px;
        }

        .list-a-pr-xs-0 > li > a {
                padding-right: 0px;
        }

        .list-a-pr-xs-5 > li > a {
                padding-right: 5px;
        }

        .list-a-pr-xs-10 > li > a {
                padding-right: 10px;
        }

        .list-a-pr-xs-15 > li > a {
                padding-right: 15px;
        }

        .list-a-pr-xs-20 > li > a {
                padding-right: 20px;
        }

        .list-a-pr-xs-25 > li > a {
                padding-right: 25px;
        }

        .list-a-pr-xs-30 > li > a {
                padding-right: 30px;
        }

        .list-a-pl-xs-0 > li > a {
                padding-left: 0px;
        }

        .list-a-pl-xs-5 > li > a {
                padding-left: 5px;
        }

        .list-a-pl-xs-10 > li > a {
                padding-left: 10px;
        }

        .list-a-pl-xs-15 > li > a {
                padding-left: 15px;
        }

        .list-a-pl-xs-20 > li > a {
                padding-left: 20px;
        }

        .list-a-pl-xs-25 > li > a {
                padding-left: 25px;
        }

        .list-a-pl-xs-30 > li > a {
                padding-left: 30px;
        }

        .list-a-ptb-xs-0 > li > a {
                padding-top: 0px;
                padding-bottom: 0px;
        }

        .list-a-ptb-xs-5 > li > a {
                padding-top: 5px;
                padding-bottom: 5px;
        }

        .list-a-ptb-xs-10 > li > a {
                padding-top: 10px;
                padding-bottom: 10px;
        }

        .list-a-ptb-xs-15 > li > a {
                padding-top: 15px;
                padding-bottom: 15px;
        }

        .list-a-ptb-xs-20 > li > a {
                padding-top: 20px;
                padding-bottom: 20px;
        }

        .list-a-ptb-xs-25 > li > a {
                padding-top: 25px;
                padding-bottom: 25px;
        }

        .list-a-ptb-xs-30 > li > a {
                padding-top: 30px;
                padding-bottom: 30px;
        }

        .list-a-ptb-xs-7 > li > a {
                padding-top: 7px;
                padding-bottom: 7px;
        }

        .list-a-ptb-xs-8 > li > a {
                padding-top: 8px;
                padding-bottom: 8px;
        }

        .list-a-pt-xs-0 > li > a {
                padding-top: 0px;
        }

        .list-a-pt-xs-5 > li > a {
                padding-top: 5px;
        }

        .list-a-pt-xs-10 > li > a {
                padding-top: 10px;
        }

        .list-a-pt-xs-15 > li > a {
                padding-top: 15px;
        }

        .list-a-pt-xs-20 > li > a {
                padding-top: 20px;
        }

        .list-a-pt-xs-25 > li > a {
                padding-top: 25px;
        }

        .list-a-pt-xs-30 > li > a {
                padding-top: 30px;
        }

        .list-a-pb-xs-0 > li > a {
                padding-bottom: 0px;
        }

        .list-a-pb-xs-5 > li > a {
                padding-bottom: 5px;
        }

        .list-a-pb-xs-10 > li > a {
                padding-bottom: 10px;
        }

        .list-a-pb-xs-15 > li > a {
                padding-bottom: 15px;
        }

        .list-a-pb-xs-20 > li > a {
                padding-bottom: 20px;
        }

        .list-a-pb-xs-25 > li > a {
                padding-bottom: 25px;
        }

        .list-a-pb-xs-30 > li > a {
                padding-bottom: 30px;
        }

        .list-li-mlr-xs-0 > li {
                margin-left: 0px;
                margin-right: 0px;
        }

        .list-li-mlr-xs-5 > li {
                margin-left: 5px;
                margin-right: 5px;
        }

        .list-li-mlr-xs-10 > li {
                margin-left: 10px;
                margin-right: 10px;
        }

        .list-li-mlr-xs-15 > li {
                margin-left: 15px;
                margin-right: 15px;
        }

        .list-li-mlr-xs-20 > li {
                margin-left: 20px;
                margin-right: 20px;
        }

        .list-li-mlr-xs-25 > li {
                margin-left: 25px;
                margin-right: 25px;
        }

        .list-li-mlr-xs-30 > li {
                margin-left: 30px;
                margin-right: 30px;
        }

        .list-li-mtb-xs-0 > li {
                margin-top: 0px;
                margin-bottom: 0px;
        }

        .list-li-mtb-xs-5 > li {
                margin-top: 5px;
                margin-bottom: 5px;
        }

        .list-li-mtb-xs-10 > li {
                margin-top: 10px;
                margin-bottom: 10px;
        }

        .list-li-mtb-xs-15 > li {
                margin-top: 15px;
                margin-bottom: 15px;
        }

        .list-li-mtb-xs-20 > li {
                margin-top: 20px;
                margin-bottom: 20px;
        }

        .list-li-mtb-xs-25 > li {
                margin-top: 25px;
                margin-bottom: 25px;
        }

        .list-li-mtb-xs-30 > li {
                margin-top: 30px;
                margin-bottom: 30px;
        }

        .list-li-mr-xs-0 > li {
                margin-right: 0px;
        }

        .list-li-mr-xs-5 > li {
                margin-right: 5px;
        }

        .list-li-mr-xs-10 > li {
                margin-right: 10px;
        }

        .list-li-mr-xs-15 > li {
                margin-right: 15px;
        }

        .list-li-mr-xs-20 > li {
                margin-right: 20px;
        }

        .list-li-mr-xs-25 > li {
                margin-right: 25px;
        }

        .list-li-mr-xs-30 > li {
                margin-right: 30px;
        }

        .list-li-ml-xs-0 > li {
                margin-left: 0px;
        }

        .list-li-ml-xs-5 > li {
                margin-left: 5px;
        }

        .list-li-ml-xs-10 > li {
                margin-left: 10px;
        }

        .list-li-ml-xs-15 > li {
                margin-left: 15px;
        }

        .list-li-ml-xs-20 > li {
                margin-left: 20px;
        }

        .list-li-ml-xs-25 > li {
                margin-left: 25px;
        }

        .list-li-ml-xs-30 > li {
                margin-left: 30px;
        }

        .list-li-mt-xs-0 > li {
                margin-top: 0px;
        }

        .list-li-mt-xs-5 > li {
                margin-top: 5px;
        }

        .list-li-mt-xs-10 > li {
                margin-top: 10px;
        }

        .list-li-mt-xs-15 > li {
                margin-top: 15px;
        }

        .list-li-mt-xs-20 > li {
                margin-top: 20px;
        }

        .list-li-mt-xs-25 > li {
                margin-top: 25px;
        }

        .list-li-mt-xs-30 > li {
                margin-top: 30px;
        }

        .list-li-mb-xs-0 > li {
                margin-bottom: 0px;
        }

        .list-li-mb-xs-5 > li {
                margin-bottom: 5px;
        }

        .list-li-mb-xs-10 > li {
                margin-bottom: 10px;
        }

        .list-li-mb-xs-15 > li {
                margin-bottom: 15px;
        }

        .list-li-mb-xs-20 > li {
                margin-bottom: 20px;
        }

        .list-li-mb-xs-25 > li {
                margin-bottom: 25px;
        }

        .list-li-mb-xs-30 > li {
                margin-bottom: 30px;
        }

        .list-li-plr-xs-0 > li {
                padding-left: 0px;
                padding-right: 0px;
        }

        .list-li-plr-xs-5 > li {
                padding-left: 5px;
                padding-right: 5px;
        }

        .list-li-plr-xs-10 > li {
                padding-left: 10px;
                padding-right: 10px;
        }

        .list-li-plr-xs-15 > li {
                padding-left: 15px;
                padding-right: 15px;
        }

        .list-li-plr-xs-20 > li {
                padding-left: 20px;
                padding-right: 20px;
        }

        .list-li-plr-xs-25 > li {
                padding-left: 25px;
                padding-right: 25px;
        }

        .list-li-plr-xs-30 > li {
                padding-left: 30px;
                padding-right: 30px;
        }

        .list-li-ptb-xs-0 > li {
                padding-top: 0px;
                padding-bottom: 0px;
        }

        .list-li-ptb-xs-5 > li {
                padding-top: 5px;
                padding-bottom: 5px;
        }

        .list-li-ptb-xs-10 > li {
                padding-top: 10px;
                padding-bottom: 10px;
        }

        .list-li-ptb-xs-15 > li {
                padding-top: 15px;
                padding-bottom: 15px;
        }

        .list-li-ptb-xs-20 > li {
                padding-top: 20px;
                padding-bottom: 20px;
        }

        .list-li-ptb-xs-25 > li {
                padding-top: 25px;
                padding-bottom: 25px;
        }

        .list-li-ptb-xs-30 > li {
                padding-top: 30px;
                padding-bottom: 30px;
        }

        .list-li-pr-xs-0 > li {
                padding-right: 0px;
        }

        .list-li-pr-xs-5 > li {
                padding-right: 5px;
        }

        .list-li-pr-xs-10 > li {
                padding-right: 10px;
        }

        .list-li-pr-xs-15 > li {
                padding-right: 15px;
        }

        .list-li-pr-xs-20 > li {
                padding-right: 20px;
        }

        .list-li-pr-xs-25 > li {
                padding-right: 25px;
        }

        .list-li-pr-xs-30 > li {
                padding-right: 30px;
        }

        .list-li-pl-xs-0 > li {
                padding-left: 0px;
        }

        .list-li-pl-xs-5 > li {
                padding-left: 5px;
        }

        .list-li-pl-xs-10 > li {
                padding-left: 10px;
        }

        .list-li-pl-xs-15 > li {
                padding-left: 15px;
        }

        .list-li-pl-xs-20 > li {
                padding-left: 20px;
        }

        .list-li-pl-xs-25 > li {
                padding-left: 25px;
        }

        .list-li-pl-xs-30 > li {
                padding-left: 30px;
        }

        .list-li-pt-xs-0 > li {
                padding-top: 0px;
        }

        .list-li-pt-xs-5 > li {
                padding-top: 5px;
        }

        .list-li-pt-xs-10 > li {
                padding-top: 10px;
        }

        .list-li-pt-xs-15 > li {
                padding-top: 15px;
        }

        .list-li-pt-xs-20 > li {
                padding-top: 20px;
        }

        .list-li-pt-xs-25 > li {
                padding-top: 25px;
        }

        .list-li-pt-xs-30 > li {
                padding-top: 30px;
        }

        .list-li-pb-xs-0 > li {
                padding-bottom: 0px;
        }

        .list-li-pb-xs-5 > li {
                padding-bottom: 5px;
        }

        .list-li-pb-xs-10 > li {
                padding-bottom: 10px;
        }

        .list-li-pb-xs-15 > li {
                padding-bottom: 15px;
        }

        .list-li-pb-xs-20 > li {
                padding-bottom: 20px;
        }

        .list-li-pb-xs-25 > li {
                padding-bottom: 25px;
        }

        .list-li-pb-xs-30 > li {
                padding-bottom: 30px;
        }

}

/* MARGIN */

.m-5 {
        margin: 5px !important;
}

.m-10 {
        margin: 10px !important;
}

.m-15 {
        margin: 15px !important;
}

.m-20 {
        margin: 20px !important;
}

.m-25 {
        margin: 25px !important;
}

.m-30 {
        margin: 30px !important;
}

.m-40 {
        margin: 40px !important;
}

.m-50 {
        margin: 50px !important;
}

.mtb-5 {
        margin-top: 5px !important;
        margin-bottom: 5px !important;
}

.mtb-10 {
        margin-top: 10px !important;
        margin-bottom: 10px !important;
}

.mtb-15 {
        margin-top: 15px !important;
        margin-bottom: 15px !important;
}

.mtb-20 {
        margin-top: 20px !important;
        margin-bottom: 20px !important;
}

.mtb-25 {
        margin-top: 25px !important;
        margin-bottom: 25px !important;
}

.mtb-30 {
        margin-top: 30px !important;
        margin-bottom: 30px !important;
}

.mtb-40 {
        margin-top: 40px !important;
        margin-bottom: 40px !important;
}

.mtb-50 {
        margin-top: 50px !important;
        margin-bottom: 50px !important;
}

.mb--30{ margin-bottom: -30px;  }

.mb-5 {
        margin-bottom: 5px !important;
}

.mb-10 {
        margin-bottom: 10px !important;
}

.mb-15 {
        margin-bottom: 15px !important;
}

.mb-20 {
        margin-bottom: 20px !important;
}

.mb-25 {
        margin-bottom: 25px !important;
}

.mb-30 {
        margin-bottom: 30px !important;
}

.mb-40 {
        margin-bottom: 40px !important;
}

.mb-50 {
        margin-bottom: 50px !important;
}

.mb-60 { margin-bottom: 60px !important; }

.mb-70 {
        margin-bottom: 70px !important;
}

.mt-5 {
        margin-top: 5px !important;
}

.mt-10 {
        margin-top: 10px !important;
}

.mt-15 {
        margin-top: 15px !important;
}

.mt-20 {
        margin-top: 20px !important;
}

.mt-25 {
        margin-top: 25px !important;
}

.mt-30 {
        margin-top: 30px !important;
}

.mt-40 {
        margin-top: 40px !important;
}

.mt-50 {
        margin-top: 50px !important;
}

.mt-100 {
        margin-top: 100px !important;
}

.mlr-5 {
        margin-left: 5px !important;
        margin-right: 5px !important;
}

.mlr-10 {
        margin-left: 10px !important;
        margin-right: 10px !important;
}

.mlr-15 {
        margin-left: 15px !important;
        margin-right: 15px !important;
}

.mlr-20 {
        margin-left: 20px !important;
        margin-right: 20px !important;
}

.mlr-25 {
        margin-left: 25px !important;
        margin-right: 25px !important;
}

.mlr-30 {
        margin-left: 30px !important;
        margin-right: 30px !important;
}

.mlr-40 {
        margin-left: 40px !important;
        margin-right: 40px !important;
}

.mlr-50 {
        margin-left: 50px !important;
        margin-right: 50px !important;
}

.ml-5 {
        margin-left: 5px !important;
}

.ml-10 {
        margin-left: 10px !important;
}

.ml-15 {
        margin-left: 15px !important;
}

.ml-20 {
        margin-left: 20px !important;
}

.ml-25 {
        margin-left: 25px !important;
}

.ml-30 {
        margin-left: 30px !important;
}

.ml-40 {
        margin-left: 40px !important;
}

.ml-50 {
        margin-left: 50px !important;
}

.ml-60 {
        margin-left: 60px !important;
}

.ml-70 {
        margin-left: 70px !important;
}

.ml-80 {
        margin-left: 80px !important;
}

.ml-85 {
        margin-left: 85px !important;
}

.ml-90 {
        margin-left: 90px !important;
}

.ml-100 {
        margin-left: 100px !important;
}

.ml-110 {
        margin-left: 110px !important;
}

.ml-115 {
        margin-left: 115px !important;
}

.ml-120 {
        margin-left: 120px !important;
}

.mr-5 {
        margin-right: 5px !important;
}

.mr-10 {
        margin-right: 10px !important;
}

.mr-15 {
        margin-right: 15px !important;
}

.mr-20 {
        margin-right: 20px !important;
}

.mr-25 {
        margin-right: 25px !important;
}

.mr-30 {
        margin-right: 30px !important;
}

.mr-40 {
        margin-right: 40px !important;
}

.mr-50 {
        margin-right: 50px !important;
}

.mr-100 {
        margin-right: 100px !important;
}

.mr-110 {
        margin-right: 110px !important;
}

.mr-115 {
        margin-right: 115px !important;
}

.mr-120 {
        margin-right: 120px !important;
}

.m-auto {
        margin: auto;
}

.mtb-auto {
        margin-top: auto;
        margin-bottom: auto;
}

.mlr-auto {
        margin-left: auto;
        margin-right: auto;
}

/* RESPONSIVE */

@media only screen and (max-width: 992px) {

        .m-md-0 {
                margin: 0px !important;
        }

        .m-md-5 {
                margin: 5px !important;
        }

        .m-md-10 {
                margin: 10px !important;
        }

        .m-md-15 {
                margin: 15px !important;
        }

        .m-md-20 {
                margin: 20px !important;
        }

        .m-md-25 {
                margin: 25px !important;
        }

        .m-md-30 {
                margin: 30px !important;
        }

        .m-md-40 {
                margin: 40px !important;
        }

        .m-md-50 {
                margin: 50px !important;
        }

        .mtb-md-0 {
                margin-top: 0px !important;
                margin-bottom: 0px !important;
        }

        .mtb-md-5 {
                margin-top: 5px !important;
                margin-bottom: 5px !important;
        }

        .mtb-md-10 {
                margin-top: 10px !important;
                margin-bottom: 10px !important;
        }

        .mtb-md-15 {
                margin-top: 15px !important;
                margin-bottom: 15px !important;
        }

        .mtb-md-20 {
                margin-top: 20px !important;
                margin-bottom: 20px !important;
        }

        .mtb-md-25 {
                margin-top: 25px !important;
                margin-bottom: 25px !important;
        }

        .mtb-md-30 {
                margin-top: 30px !important;
                margin-bottom: 30px !important;
        }

        .mtb-md-40 {
                margin-top: 40px !important;
                margin-bottom: 40px !important;
        }

        .mtb-md-50 {
                margin-top: 50px !important;
                margin-bottom: 50px !important;
        }

        .mb-md-0 {
                margin-bottom: 0px !important;
        }

        .mb-md-5 {
                margin-bottom: 5px !important;
        }

        .mb-md-10 {
                margin-bottom: 10px !important;
        }

        .mb-md-15 {
                margin-bottom: 15px !important;
        }

        .mb-md-20 {
                margin-bottom: 20px !important;
        }

        .mb-md-25 {
                margin-bottom: 25px !important;
        }

        .mb-md-30 {
                margin-bottom: 30px !important;
        }

        .mb-md-40 {
                margin-bottom: 40px !important;
        }

        .mb-md-50 {
                margin-bottom: 50px !important;
        }

        .mt-md-0 {
                margin-top: 0px !important;
        }

        .mt-md-5 {
                margin-top: 5px !important;
        }

        .mt-md-10 {
                margin-top: 10px !important;
        }

        .mt-md-15 {
                margin-top: 15px !important;
        }

        .mt-md-20 {
                margin-top: 20px !important;
        }

        .mt-md-25 {
                margin-top: 25px !important;
        }

        .mt-md-30 {
                margin-top: 30px !important;
        }

        .mt-md-40 {
                margin-top: 40px !important;
        }

        .mt-md-50 {
                margin-top: 50px !important;
        }

        .mlr-md-0 {
                margin-left: 0px !important;
                margin-right: 0px !important;
        }

        .mlr-md-5 {
                margin-left: 5px !important;
                margin-right: 5px !important;
        }

        .mlr-md-10 {
                margin-left: 10px !important;
                margin-right: 10px !important;
        }

        .mlr-md-15 {
                margin-left: 15px !important;
                margin-right: 15px !important;
        }

        .mlr-md-20 {
                margin-left: 20px !important;
                margin-right: 20px !important;
        }

        .mlr-md-25 {
                margin-left: 25px !important;
                margin-right: 25px !important;
        }

        .mlr-md-30 {
                margin-left: 30px !important;
                margin-right: 30px !important;
        }

        .mlr-md-40 {
                margin-left: 40px !important;
                margin-right: 40px !important;
        }

        .mlr-md-50 {
                margin-left: 50px !important;
                margin-right: 50px !important;
        }

        .ml-md-0 {
                margin-left: 0px !important;
        }

        .ml-md-5 {
                margin-left: 5px !important;
        }

        .ml-md-10 {
                margin-left: 10px !important;
        }

        .ml-md-15 {
                margin-left: 15px !important;
        }

        .ml-md-20 {
                margin-left: 20px !important;
        }

        .ml-md-25 {
                margin-left: 25px !important;
        }

        .ml-md-30 {
                margin-left: 30px !important;
        }

        .ml-md-40 {
                margin-left: 40px !important;
        }

        .ml-md-50 {
                margin-left: 50px !important;
        }

        .ml-md-60 {
                margin-left: 60px !important;
        }

        .ml-md-70 {
                margin-left: 70px !important;
        }

        .ml-md-80 {
                margin-left: 80px !important;
        }

        .ml-md-85 {
                margin-left: 85px !important;
        }

        .ml-md-90 {
                margin-left: 90px !important;
        }

        .ml-md-100 {
                margin-left: 100px !important;
        }

        .ml-md-110 {
                margin-left: 110px !important;
        }

        .ml-md-115 {
                margin-left: 115px !important;
        }

        .ml-md-120 {
                margin-left: 120px !important;
        }

        .mr-md-0 {
                margin-right: 0px !important;
        }

        .mr-md-5 {
                margin-right: 5px !important;
        }

        .mr-md-10 {
                margin-right: 10px !important;
        }

        .mr-md-15 {
                margin-right: 15px !important;
        }

        .mr-md-20 {
                margin-right: 20px !important;
        }

        .mr-md-25 {
                margin-right: 25px !important;
        }

        .mr-md-30 {
                margin-right: 30px !important;
        }

        .mr-md-40 {
                margin-right: 40px !important;
        }

        .mr-md-50 {
                margin-right: 50px !important;
        }

        .mr-md-100 {
                margin-right: 100px !important;
        }

        .mr-md-110 {
                margin-right: 110px !important;
        }

        .mr-md-115 {
                margin-right: 115px !important;
        }

        .mr-md-120 {
                margin-right: 120px !important;
        }

        .m-md-auto {
                margin: auto;
        }

        .mtb-md-auto {
                margin-top: auto;
                margin-bottom: auto;
        }

        .mlr-md-auto {
                margin-left: auto;
                margin-right: auto;
        }

}

@media only screen and (max-width: 767px) {

        .m-sm-0 {
                margin: 0px !important;
        }

        .m-sm-5 {
                margin: 5px !important;
        }

        .m-sm-10 {
                margin: 10px !important;
        }

        .m-sm-15 {
                margin: 15px !important;
        }

        .m-sm-20 {
                margin: 20px !important;
        }

        .m-sm-25 {
                margin: 25px !important;
        }

        .m-sm-30 {
                margin: 30px !important;
        }

        .m-sm-40 {
                margin: 40px !important;
        }

        .m-sm-50 {
                margin: 50px !important;
        }

        .mtb-sm-0 {
                margin-top: 0px !important;
                margin-bottom: 0px !important;
        }

        .mtb-sm-5 {
                margin-top: 5px !important;
                margin-bottom: 5px !important;
        }

        .mtb-sm-10 {
                margin-top: 10px !important;
                margin-bottom: 10px !important;
        }

        .mtb-sm-15 {
                margin-top: 15px !important;
                margin-bottom: 15px !important;
        }

        .mtb-sm-20 {
                margin-top: 20px !important;
                margin-bottom: 20px !important;
        }

        .mtb-sm-25 {
                margin-top: 25px !important;
                margin-bottom: 25px !important;
        }

        .mtb-sm-30 {
                margin-top: 30px !important;
                margin-bottom: 30px !important;
        }

        .mtb-sm-40 {
                margin-top: 40px !important;
                margin-bottom: 40px !important;
        }

        .mtb-sm-50 {
                margin-top: 50px !important;
                margin-bottom: 50px !important;
        }

        .mb-sm-0 {
                margin-bottom: 0px !important;
        }

        .mb-sm-5 {
                margin-bottom: 5px !important;
        }

        .mb-sm-10 {
                margin-bottom: 10px !important;
        }

        .mb-sm-15 {
                margin-bottom: 15px !important;
        }

        .mb-sm-20 {
                margin-bottom: 20px !important;
        }

        .mb-sm-25 {
                margin-bottom: 25px !important;
        }

        .mb-sm-30 {
                margin-bottom: 30px !important;
        }

        .mb-sm-40 {
                margin-bottom: 40px !important;
        }

        .mb-sm-50 {
                margin-bottom: 50px !important;
        }

        .mt-sm-0 {
                margin-top: 0px !important;
        }

        .mt-sm-5 {
                margin-top: 5px !important;
        }

        .mt-sm-10 {
                margin-top: 10px !important;
        }

        .mt-sm-15 {
                margin-top: 15px !important;
        }

        .mt-sm-20 {
                margin-top: 20px !important;
        }

        .mt-sm-25 {
                margin-top: 25px !important;
        }

        .mt-sm-30 {
                margin-top: 30px !important;
        }

        .mt-sm-40 {
                margin-top: 40px !important;
        }

        .mt-sm-50 {
                margin-top: 50px !important;
        }

        .mlr-sm-0 {
                margin-left: 0px !important;
                margin-right: 0px !important;
        }

        .mlr-sm-5 {
                margin-left: 5px !important;
                margin-right: 5px !important;
        }

        .mlr-sm-10 {
                margin-left: 10px !important;
                margin-right: 10px !important;
        }

        .mlr-sm-15 {
                margin-left: 15px !important;
                margin-right: 15px !important;
        }

        .mlr-sm-20 {
                margin-left: 20px !important;
                margin-right: 20px !important;
        }

        .mlr-sm-25 {
                margin-left: 25px !important;
                margin-right: 25px !important;
        }

        .mlr-sm-30 {
                margin-left: 30px !important;
                margin-right: 30px !important;
        }

        .mlr-sm-40 {
                margin-left: 40px !important;
                margin-right: 40px !important;
        }

        .mlr-sm-50 {
                margin-left: 50px !important;
                margin-right: 50px !important;
        }

        .ml-sm-0 {
                margin-left: 0px !important;
        }

        .ml-sm-5 {
                margin-left: 5px !important;
        }

        .ml-sm-10 {
                margin-left: 10px !important;
        }

        .ml-sm-15 {
                margin-left: 15px !important;
        }

        .ml-sm-20 {
                margin-left: 20px !important;
        }

        .ml-sm-25 {
                margin-left: 25px !important;
        }

        .ml-sm-30 {
                margin-left: 30px !important;
        }

        .ml-sm-40 {
                margin-left: 40px !important;
        }

        .ml-sm-50 {
                margin-left: 50px !important;
        }

        .ml-sm-60 {
                margin-left: 60px !important;
        }

        .ml-sm-70 {
                margin-left: 70px !important;
        }

        .ml-sm-80 {
                margin-left: 80px !important;
        }

        .ml-sm-85 {
                margin-left: 85px !important;
        }

        .ml-sm-90 {
                margin-left: 90px !important;
        }

        .ml-sm-100 {
                margin-left: 100px !important;
        }

        .ml-sm-110 {
                margin-left: 110px !important;
        }

        .ml-sm-120 {
                margin-left: 120px !important;
        }

        .mr-sm-0 {
                margin-right: 0px !important;
        }

        .mr-sm-5 {
                margin-right: 5px !important;
        }

        .mr-sm-10 {
                margin-right: 10px !important;
        }

        .mr-sm-15 {
                margin-right: 15px !important;
        }

        .mr-sm-20 {
                margin-right: 20px !important;
        }

        .mr-sm-25 {
                margin-right: 25px !important;
        }

        .mr-sm-30 {
                margin-right: 30px !important;
        }

        .mr-sm-40 {
                margin-right: 40px !important;
        }

        .mr-sm-50 {
                margin-right: 50px !important;
        }

        .mr-sm-100 {
                margin-right: 100px !important;
        }

        .mr-sm-110 {
                margin-right: 110px !important;
        }

        .mr-sm-120 {
                margin-right: 120px !important;
        }

        .m-sm-auto {
                margin: auto;
        }

        .mtb-sm-auto {
                margin-top: auto;
                margin-bottom: auto;
        }

        .mlr-sm-auto {
                margin-left: auto;
                margin-right: auto;
        }

}

@media only screen and (max-width: 576px) {

        .m-xs-0 {
                margin: 0px !important;
        }

        .m-xs-5 {
                margin: 5px !important;
        }

        .m-xs-10 {
                margin: 10px !important;
        }

        .m-xs-15 {
                margin: 15px !important;
        }

        .m-xs-20 {
                margin: 20px !important;
        }

        .m-xs-25 {
                margin: 25px !important;
        }

        .m-xs-30 {
                margin: 30px !important;
        }

        .m-xs-40 {
                margin: 40px !important;
        }

        .m-xs-50 {
                margin: 50px !important;
        }

        .mtb-xs-0 {
                margin-top: 0px !important;
                margin-bottom: 0px !important;
        }

        .mtb-xs-5 {
                margin-top: 5px !important;
                margin-bottom: 5px !important;
        }

        .mtb-xs-10 {
                margin-top: 10px !important;
                margin-bottom: 10px !important;
        }

        .mtb-xs-15 {
                margin-top: 15px !important;
                margin-bottom: 15px !important;
        }

        .mtb-xs-20 {
                margin-top: 20px !important;
                margin-bottom: 20px !important;
        }

        .mtb-xs-25 {
                margin-top: 25px !important;
                margin-bottom: 25px !important;
        }

        .mtb-xs-30 {
                margin-top: 30px !important;
                margin-bottom: 30px !important;
        }

        .mtb-xs-40 {
                margin-top: 40px !important;
                margin-bottom: 40px !important;
        }

        .mtb-xs-50 {
                margin-top: 50px !important;
                margin-bottom: 50px !important;
        }

        .mb-xs-0 {
                margin-bottom: 0px !important;
        }

        .mb-xs-5 {
                margin-bottom: 5px !important;
        }

        .mb-xs-10 {
                margin-bottom: 10px !important;
        }

        .mb-xs-15 {
                margin-bottom: 15px !important;
        }

        .mb-xs-20 {
                margin-bottom: 20px !important;
        }

        .mb-xs-25 {
                margin-bottom: 25px !important;
        }

        .mb-xs-30 {
                margin-bottom: 30px !important;
        }

        .mb-xs-40 {
                margin-bottom: 40px !important;
        }

        .mb-xs-50 {
                margin-bottom: 50px !important;
        }

        .mt-xs-0 {
                margin-top: 0px !important;
        }

        .mt-xs-5 {
                margin-top: 5px !important;
        }

        .mt-xs-10 {
                margin-top: 10px !important;
        }

        .mt-xs-15 {
                margin-top: 15px !important;
        }

        .mt-xs-20 {
                margin-top: 20px !important;
        }

        .mt-xs-25 {
                margin-top: 25px !important;
        }

        .mt-xs-30 {
                margin-top: 30px !important;
        }

        .mt-xs-40 {
                margin-top: 40px !important;
        }

        .mt-xs-50 {
                margin-top: 50px !important;
        }

        .mlr-xs-0 {
                margin-left: 0px !important;
                margin-right: 0px !important;
        }

        .mlr-xs-5 {
                margin-left: 5px !important;
                margin-right: 5px !important;
        }

        .mlr-xs-10 {
                margin-left: 10px !important;
                margin-right: 10px !important;
        }

        .mlr-xs-15 {
                margin-left: 15px !important;
                margin-right: 15px !important;
        }

        .mlr-xs-20 {
                margin-left: 20px !important;
                margin-right: 20px !important;
        }

        .mlr-xs-25 {
                margin-left: 25px !important;
                margin-right: 25px !important;
        }

        .mlr-xs-30 {
                margin-left: 30px !important;
                margin-right: 30px !important;
        }

        .mlr-xs-40 {
                margin-left: 40px !important;
                margin-right: 40px !important;
        }

        .mlr-xs-50 {
                margin-left: 50px !important;
                margin-right: 50px !important;
        }

        .ml-xs-0 {
                margin-left: 0px !important;
        }

        .ml-xs-5 {
                margin-left: 5px !important;
        }

        .ml-xs-10 {
                margin-left: 10px !important;
        }

        .ml-xs-15 {
                margin-left: 15px !important;
        }

        .ml-xs-20 {
                margin-left: 20px !important;
        }

        .ml-xs-25 {
                margin-left: 25px !important;
        }

        .ml-xs-30 {
                margin-left: 30px !important;
        }

        .ml-xs-40 {
                margin-left: 40px !important;
        }

        .ml-xs-50 {
                margin-left: 50px !important;
        }

        .ml-xs-60 {
                margin-left: 60px !important;
        }

        .ml-xs-70 {
                margin-left: 70px !important;
        }

        .ml-xs-80 {
                margin-left: 80px !important;
        }

        .ml-xs-85 {
                margin-left: 85px !important;
        }

        .ml-xs-90 {
                margin-left: 90px !important;
        }

        .ml-xs-100 {
                margin-left: 100px !important;
        }

        .ml-xs-110 {
                margin-left: 110px !important;
        }

        .ml-xs-120 {
                margin-left: 120px !important;
        }

        .mr-xs-0 {
                margin-right: 0px !important;
        }

        .mr-xs-5 {
                margin-right: 5px !important;
        }

        .mr-xs-10 {
                margin-right: 10px !important;
        }

        .mr-xs-15 {
                margin-right: 15px !important;
        }

        .mr-xs-20 {
                margin-right: 20px !important;
        }

        .mr-xs-25 {
                margin-right: 25px !important;
        }

        .mr-xs-30 {
                margin-right: 30px !important;
        }

        .mr-xs-40 {
                margin-right: 40px !important;
        }

        .mr-xs-50 {
                margin-right: 50px !important;
        }

        .mr-xs-100 {
                margin-right: 100px !important;
        }

        .mr-xs-110 {
                margin-right: 110px !important;
        }

        .mr-xs-120 {
                margin-right: 120px !important;
        }

        .m-xs-auto {
                margin: auto;
        }

        .mtb-xs-auto {
                margin-top: auto;
                margin-bottom: auto;
        }

        .mlr-xs-auto {
                margin-left: auto;
                margin-right: auto;
        }

}

/* PADDING */

.p-0 {
        padding: 0px !important;
}

.p-5 {
        padding: 5px !important;
}

.p-10 {
        padding: 10px !important;
}

.p-15 {
        padding: 15px !important;
}

.p-20 {
        padding: 20px !important;
}

.p-25 {
        padding: 25px !important;
}

.p-30 {
        padding: 30px !important;
}

.p-40 {
        padding: 40px !important;
}

.p-50 {
        padding: 50px !important;
}

.p-60 {
        padding: 60px !important;
}

.p-70 {
        padding: 70px !important;
}

.p-80 {
        padding: 80px !important;
}

.p-90 {
        padding: 90px !important;
}

.p-95 {
        padding: 95px !important;
}

.pt-0 {
        padding-top: 0px !important;
}

.pt-5 {
        padding-top: 5px !important;
}

.pt-10 {
        padding-top: 10px !important;
}

.pt-15 {
        padding-top: 15px !important;
}

.pt-20 {
        padding-top: 20px !important;
}

.pt-25 {
        padding-top: 25px !important;
}

.pt-30 {
        padding-top: 30px !important;
}

.pt-40 {
        padding-top: 40px !important;
}

.pt-50 {
        padding-top: 50px !important;
}

.pt-60 {
        padding-top: 60px !important;
}

.pt-70 {
        padding-top: 70px !important;
}

.pt-80 {
        padding-top: 80px !important;
}

.pt-90 {
        padding-top: 90px !important;
}

.pt-95 {
        padding-top: 95px !important;
}

.pb-0 {
        padding-bottom: 0px !important;
}

.pb-5 {
        padding-bottom: 5px !important;
}

.pb-10 {
        padding-bottom: 10px !important;
}

.pb-15 {
        padding-bottom: 15px !important;
}

.pb-20 {
        padding-bottom: 20px !important;
}

.pb-25 {
        padding-bottom: 25px !important;
}

.pb-30 {
        padding-bottom: 30px !important;
}

.pb-40 {
        padding-bottom: 40px !important;
}

.pb-50 {
        padding-bottom: 50px !important;
}

.pb-60 {
        padding-bottom: 60px !important;
}

.pb-70 {
        padding-bottom: 70px !important;
}

.pb-80 {
        padding-bottom: 80px !important;
}

.pb-90 { padding-bottom: 90px !important; }

.pb-95 {
        padding-bottom: 95px !important;
}

.pl-0 {
        padding-left: 0px !important;
}

.pl-5 {
        padding-left: 5px !important;
}

.pl-10 {
        padding-left: 10px !important;
}

.pl-15 {
        padding-left: 15px !important;
}

.pl-20 {
        padding-left: 20px !important;
}

.pl-25 {
        padding-left: 25px !important;
}

.pl-30 {
        padding-left: 30px !important;
}

.pl-40 {
        padding-left: 40px !important;
}

.pl-50 {
        padding-left: 50px !important;
}

.pl-60 {
        padding-left: 60px !important;
}

.pl-70 {
        padding-left: 70px !important;
}

.pl-80 {
        padding-left: 80px !important;
}

.pl-90 {
        padding-left: 90px !important;
}

.pl-95 {
        padding-left: 95px !important;
}

.pr-0 {
        padding-right: 0px !important;
}

.pr-5 {
        padding-right: 5px !important;
}

.pr-10 {
        padding-right: 10px !important;
}

.pr-15 {
        padding-right: 15px !important;
}

.pr-20 {
        padding-right: 20px !important;
}

.pr-25 {
        padding-right: 25px !important;
}

.pr-30 {
        padding-right: 30px !important;
}

.pr-40 {
        padding-right: 40px !important;
}

.pr-50 {
        padding-right: 50px !important;
}

.pr-60 {
        padding-right: 60px !important;
}

.pr-70 {
        padding-right: 70px !important;
}

.pr-80 {
        padding-right: 80px !important;
}

.pr-90 {
        padding-right: 90px !important;
}

.pr-95 {
        padding-right: 95px !important;
}

.ptb-0 {
        padding-top: 0px !important;
        padding-bottom: 0px !important;
}

.ptb-5 {
        padding-top: 5px !important;
        padding-bottom: 5px !important;
}

.ptb-10 {
        padding-top: 10px !important;
        padding-bottom: 10px !important;
}

.ptb-15 {
        padding-top: 15px !important;
        padding-bottom: 15px !important;
}

.ptb-20 {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
}

.ptb-25 {
        padding-top: 25px !important;
        padding-bottom: 25px !important;
}

.ptb-30 {
        padding-top: 30px !important;
        padding-bottom: 30px !important;
}

.ptb-40 {
        padding-top: 40px !important;
        padding-bottom: 40px !important;
}

.ptb-50 {
        padding-top: 50px !important;
        padding-bottom: 50px !important;
}

.ptb-60 {
        padding-top: 60px !important;
        padding-bottom: 60px !important;
}

.ptb-70 {
        padding-top: 70px !important;
        padding-bottom: 70px !important;
}

.ptb-80 {
        padding-top: 80px !important;
        padding-bottom: 80px !important;
}

.ptb-90 {
        padding-top: 90px !important;
        padding-bottom: 90px !important;
}

.ptb-95 {
        padding-top: 95px !important;
        padding-bottom: 95px !important;
}

.plr-0 {
        padding-left: 0px !important;
        padding-right: 0px !important;
}

.plr-5 {
        padding-left: 5px !important;
        padding-right: 5px !important;
}

.plr-10 {
        padding-left: 10px !important;
        padding-right: 10px !important;
}

.plr-15 {
        padding-left: 15px !important;
        padding-right: 15px !important;
}

.plr-20 {
        padding-left: 20px !important;
        padding-right: 20px !important;
}

.plr-25 {
        padding-left: 25px !important;
        padding-right: 25px !important;
}

.plr-30 {
        padding-left: 30px !important;
        padding-right: 30px !important;
}

.plr-40 {
        padding-left: 40px !important;
        padding-right: 40px !important;
}

.plr-50 {
        padding-left: 50px !important;
        padding-right: 50px !important;
}

.plr-60 {
        padding-left: 60px !important;
        padding-right: 60px !important;
}

.plr-70 {
        padding-left: 70px !important;
        padding-right: 70px !important;
}

.plr-80 {
        padding-left: 80px !important;
        padding-right: 80px !important;
}

.plr-90 {
        padding-left: 90px !important;
        padding-right: 90px !important;
}

.plr-95 {
        padding-left: 95px !important;
        padding-right: 95px !important;
}

/* RESPONSIVE */

@media only screen and (max-width: 992px) {

        .p-md-0 {
                padding: 0px !important;
        }

        .p-md-5 {
                padding: 5px !important;
        }

        .p-md-10 {
                padding: 10px !important;
        }

        .p-md-15 {
                padding: 15px !important;
        }

        .p-md-20 {
                padding: 20px !important;
        }

        .p-md-25 {
                padding: 25px !important;
        }

        .p-md-30 {
                padding: 30px !important;
        }

        .p-md-40 {
                padding: 40px !important;
        }

        .p-md-50 {
                padding: 50px !important;
        }

        .p-md-60 {
                padding: 60px !important;
        }

        .p-md-70 {
                padding: 70px !important;
        }

        .p-md-80 {
                padding: 80px !important;
        }

        .p-md-90 {
                padding: 90px !important;
        }

        .pt-md-0 {
                padding-top: 0px !important;
        }

        .pt-md-5 {
                padding-top: 5px !important;
        }

        .pt-md-10 {
                padding-top: 10px !important;
        }

        .pt-md-15 {
                padding-top: 15px !important;
        }

        .pt-md-20 {
                padding-top: 20px !important;
        }

        .pt-md-25 {
                padding-top: 25px !important;
        }

        .pt-md-30 {
                padding-top: 30px !important;
        }

        .pt-md-40 {
                padding-top: 40px !important;
        }

        .pt-md-50 {
                padding-top: 50px !important;
        }

        .pt-md-60 {
                padding-top: 60px !important;
        }

        .pt-md-70 {
                padding-top: 70px !important;
        }

        .pt-md-80 {
                padding-top: 80px !important;
        }

        .pt-md-90 {
                padding-top: 90px !important;
        }

        .pb-md-0 {
                padding-bottom: 0px !important;
        }

        .pb-md-5 {
                padding-bottom: 5px !important;
        }

        .pb-md-10 {
                padding-bottom: 10px !important;
        }

        .pb-md-15 {
                padding-bottom: 15px !important;
        }

        .pb-md-20 {
                padding-bottom: 20px !important;
        }

        .pb-md-25 {
                padding-bottom: 25px !important;
        }

        .pb-md-30 {
                padding-bottom: 30px !important;
        }

        .pb-md-40 {
                padding-bottom: 40px !important;
        }

        .pb-md-50 {
                padding-bottom: 50px !important;
        }

        .pt-md-60 {
                padding-bottom: 60px !important;
        }

        .pt-md-70 {
                padding-bottom: 70px !important;
        }

        .pt-md-80 {
                padding-bottom: 80px !important;
        }

        .pt-md-90 {
                padding-bottom: 90px !important;
        }

        .pl-md-0 {
                padding-left: 0px !important;
        }

        .pl-md-5 {
                padding-left: 5px !important;
        }

        .pl-md-10 {
                padding-left: 10px !important;
        }

        .pl-md-15 {
                padding-left: 15px !important;
        }

        .pl-md-20 {
                padding-left: 20px !important;
        }

        .pl-md-25 {
                padding-left: 25px !important;
        }

        .pl-md-30 {
                padding-left: 30px !important;
        }

        .pl-md-40 {
                padding-left: 40px !important;
        }

        .pl-md-50 {
                padding-left: 50px !important;
        }

        .pl-md-60 {
                padding-left: 60px !important;
        }

        .pl-md-70 {
                padding-left: 70px !important;
        }

        .pl-md-80 {
                padding-left: 80px !important;
        }

        .pl-md-90 {
                padding-left: 90px !important;
        }

        .pr-md-0 {
                padding-right: 0px !important;
        }

        .pr-md-5 {
                padding-right: 5px !important;
        }

        .pr-md-10 {
                padding-right: 10px !important;
        }

        .pr-md-15 {
                padding-right: 15px !important;
        }

        .pr-md-20 {
                padding-right: 20px !important;
        }

        .pr-md-25 {
                padding-right: 25px !important;
        }

        .pr-md-30 {
                padding-right: 30px !important;
        }

        .pr-md-40 {
                padding-right: 40px !important;
        }

        .pr-md-50 {
                padding-right: 50px !important;
        }

        .pr-md-60 {
                padding-right: 60px !important;
        }

        .pr-md-70 {
                padding-right: 70px !important;
        }

        .pr-md-80 {
                padding-right: 80px !important;
        }

        .pr-md-90 {
                padding-right: 90px !important;
        }

        .ptb-md-0 {
                padding-top: 0px !important;
                padding-bottom: 0px !important;
        }

        .ptb-md-5 {
                padding-top: 5px !important;
                padding-bottom: 5px !important;
        }

        .ptb-md-10 {
                padding-top: 10px !important;
                padding-bottom: 10px !important;
        }

        .ptb-md-15 {
                padding-top: 15px !important;
                padding-bottom: 15px !important;
        }

        .ptb-md-20 {
                padding-top: 20px !important;
                padding-bottom: 20px !important;
        }

        .ptb-md-25 {
                padding-top: 25px !important;
                padding-bottom: 25px !important;
        }

        .ptb-md-30 {
                padding-top: 30px !important;
                padding-bottom: 30px !important;
        }

        .ptb-md-40 {
                padding-top: 40px !important;
                padding-bottom: 40px !important;
        }

        .ptb-md-50 {
                padding-top: 50px !important;
                padding-bottom: 50px !important;
        }

        .ptb-md-60 {
                padding-top: 60px !important;
                padding-bottom: 60px !important;
        }

        .ptb-md-70 {
                padding-top: 70px !important;
                padding-bottom: 70px !important;
        }

        .ptb-md-80 {
                padding-top: 80px !important;
                padding-bottom: 80px !important;
        }

        .ptb-md-90 {
                padding-top: 90px !important;
                padding-bottom: 90px !important;
        }

        .plr-md-0 {
                padding-left: 0px !important;
                padding-right: 0px !important;
        }

        .plr-md-5 {
                padding-left: 5px !important;
                padding-right: 5px !important;
        }

        .plr-md-10 {
                padding-left: 10px !important;
                padding-right: 10px !important;
        }

        .plr-md-15 {
                padding-left: 15px !important;
                padding-right: 15px !important;
        }

        .plr-md-20 {
                padding-left: 20px !important;
                padding-right: 20px !important;
        }

        .plr-md-25 {
                padding-left: 25px !important;
                padding-right: 25px !important;
        }

        .plr-md-30 {
                padding-left: 30px !important;
                padding-right: 30px !important;
        }

        .plr-md-40 {
                padding-left: 40px !important;
                padding-right: 40px !important;
        }

        .plr-md-50 {
                padding-left: 50px !important;
                padding-right: 50px !important;
        }

        .plr-md-60 {
                padding-left: 60px !important;
                padding-right: 60px !important;
        }

        .plr-md-70 {
                padding-left: 70px !important;
                padding-right: 70px !important;
        }

        .plr-md-80 {
                padding-left: 80px !important;
                padding-right: 80px !important;
        }

        .plr-md-90 {
                padding-left: 90px !important;
                padding-right: 90px !important;
        }

}

@media only screen and (max-width: 767px) {

        .p-sm-0 {
                padding: 0px !important;
        }

        .p-sm-5 {
                padding: 5px !important;
        }

        .p-sm-10 {
                padding: 10px !important;
        }

        .p-sm-15 {
                padding: 15px !important;
        }

        .p-sm-20 {
                padding: 20px !important;
        }

        .p-sm-25 {
                padding: 25px !important;
        }

        .p-sm-30 {
                padding: 30px !important;
        }

        .p-sm-40 {
                padding: 40px !important;
        }

        .p-sm-50 {
                padding: 50px !important;
        }

        .p-sm-60 {
                padding: 60px !important;
        }

        .p-sm-70 {
                padding: 70px !important;
        }

        .p-sm-80 {
                padding: 80px !important;
        }

        .p-sm-90 {
                padding: 90px !important;
        }

        .pt-sm-0 {
                padding-top: 0px !important;
        }

        .pt-sm-5 {
                padding-top: 5px !important;
        }

        .pt-sm-10 {
                padding-top: 10px !important;
        }

        .pt-sm-15 {
                padding-top: 15px !important;
        }

        .pt-sm-20 {
                padding-top: 20px !important;
        }

        .pt-sm-25 {
                padding-top: 25px !important;
        }

        .pt-sm-30 {
                padding-top: 30px !important;
        }

        .pt-sm-40 {
                padding-top: 40px !important;
        }

        .pt-sm-50 {
                padding-top: 50px !important;
        }

        .pt-sm-60 {
                padding-top: 60px !important;
        }

        .pt-sm-70 {
                padding-top: 70px !important;
        }

        .pt-sm-80 {
                padding-top: 80px !important;
        }

        .pt-sm-90 {
                padding-top: 90px !important;
        }

        .pb-sm-0 {
                padding-bottom: 0px !important;
        }

        .pb-sm-5 {
                padding-bottom: 5px !important;
        }

        .pb-sm-10 {
                padding-bottom: 10px !important;
        }

        .pb-sm-15 {
                padding-bottom: 15px !important;
        }

        .pb-sm-20 {
                padding-bottom: 20px !important;
        }

        .pb-sm-25 {
                padding-bottom: 25px !important;
        }

        .pb-sm-30 {
                padding-bottom: 30px !important;
        }

        .pb-sm-40 {
                padding-bottom: 40px !important;
        }

        .pb-sm-50 {padding-bottom: 50px !important; }

        .pb-sm-60 {padding-bottom: 60px !important; }

        .pb-sm-70 {padding-bottom: 70px !important; }

        .pb-sm-80 {padding-bottom: 80px !important; }

        .pb-sm-90 {padding-bottom: 90px !important; }

        .pt-sm-60 { padding-bottom: 60px !important; }

        .pt-sm-70 { padding-bottom: 70px !important; }

        .pt-sm-80 { padding-bottom: 80px !important; }

        .pt-sm-90 { padding-bottom: 90px !important; }

        .pl-sm-0 { padding-left: 0px !important; }

        .pl-sm-5 { padding-left: 5px !important; }

        .pl-sm-10 { padding-left: 10px !important; }

        .pl-sm-15 {
                padding-left: 15px !important;
        }

        .pl-sm-20 {
                padding-left: 20px !important;
        }

        .pl-sm-25 {
                padding-left: 25px !important;
        }

        .pl-sm-30 {
                padding-left: 30px !important;
        }

        .pl-sm-40 {
                padding-left: 40px !important;
        }

        .pl-sm-50 {
                padding-left: 50px !important;
        }

        .pl-sm-60 {
                padding-left: 60px !important;
        }

        .pl-sm-70 {
                padding-left: 70px !important;
        }

        .pl-sm-80 {
                padding-left: 80px !important;
        }

        .pl-sm-90 {
                padding-left: 90px !important;
        }

        .pr-sm-0 {
                padding-right: 0px !important;
        }

        .pr-sm-5 {
                padding-right: 5px !important;
        }

        .pr-sm-10 {
                padding-right: 10px !important;
        }

        .pr-sm-15 {
                padding-right: 15px !important;
        }

        .pr-sm-20 {
                padding-right: 20px !important;
        }

        .pr-sm-25 {
                padding-right: 25px !important;
        }

        .pr-sm-30 {
                padding-right: 30px !important;
        }

        .pr-sm-40 {
                padding-right: 40px !important;
        }

        .pr-sm-50 {
                padding-right: 50px !important;
        }

        .pr-sm-60 {
                padding-right: 60px !important;
        }

        .pr-sm-70 {
                padding-right: 70px !important;
        }

        .pr-sm-80 {
                padding-right: 80px !important;
        }

        .pr-sm-90 {
                padding-right: 90px !important;
        }

        .ptb-sm-0 {
                padding-top: 0px !important;
                padding-bottom: 0px !important;
        }

        .ptb-sm-5 {
                padding-top: 5px !important;
                padding-bottom: 5px !important;
        }

        .ptb-sm-10 {
                padding-top: 10px !important;
                padding-bottom: 10px !important;
        }

        .ptb-sm-15 {
                padding-top: 15px !important;
                padding-bottom: 15px !important;
        }

        .ptb-sm-20 {
                padding-top: 20px !important;
                padding-bottom: 20px !important;
        }

        .ptb-sm-25 {
                padding-top: 25px !important;
                padding-bottom: 25px !important;
        }

        .ptb-sm-30 {
                padding-top: 30px !important;
                padding-bottom: 30px !important;
        }

        .ptb-sm-40 {
                padding-top: 40px !important;
                padding-bottom: 40px !important;
        }

        .ptb-sm-50 {
                padding-top: 50px !important;
                padding-bottom: 50px !important;
        }

        .ptb-sm-60 {
                padding-top: 60px !important;
                padding-bottom: 60px !important;
        }

        .ptb-sm-70 {
                padding-top: 70px !important;
                padding-bottom: 70px !important;
        }

        .ptb-sm-80 {
                padding-top: 80px !important;
                padding-bottom: 80px !important;
        }

        .ptb-sm-90 {
                padding-top: 90px !important;
                padding-bottom: 90px !important;
        }

        .plr-sm-0 {
                padding-left: 0px !important;
                padding-right: 0px !important;
        }

        .plr-sm-5 {
                padding-left: 5px !important;
                padding-right: 5px !important;
        }

        .plr-sm-10 {
                padding-left: 10px !important;
                padding-right: 10px !important;
        }

        .plr-sm-15 {
                padding-left: 15px !important;
                padding-right: 15px !important;
        }

        .plr-sm-20 {
                padding-left: 20px !important;
                padding-right: 20px !important;
        }

        .plr-sm-25 {
                padding-left: 25px !important;
                padding-right: 25px !important;
        }

        .plr-sm-30 {
                padding-left: 30px !important;
                padding-right: 30px !important;
        }

        .plr-sm-40 {
                padding-left: 40px !important;
                padding-right: 40px !important;
        }

        .plr-sm-50 {
                padding-left: 50px !important;
                padding-right: 50px !important;
        }

        .plr-sm-60 {
                padding-left: 60px !important;
                padding-right: 60px !important;
        }

        .plr-sm-70 {
                padding-left: 70px !important;
                padding-right: 70px !important;
        }

        .plr-sm-80 {
                padding-left: 80px !important;
                padding-right: 80px !important;
        }

        .plr-sm-90 {
                padding-left: 90px !important;
                padding-right: 90px !important;
        }

}

@media only screen and (max-width: 576px) {

        .p-xs-0 {
                padding: 0px !important;
        }

        .p-xs-5 {
                padding: 5px !important;
        }

        .p-xs-10 {
                padding: 10px !important;
        }

        .p-xs-15 {
                padding: 15px !important;
        }

        .p-xs-20 {
                padding: 20px !important;
        }

        .p-xs-25 {
                padding: 25px !important;
        }

        .p-xs-30 {
                padding: 30px !important;
        }

        .p-xs-40 {
                padding: 40px !important;
        }

        .p-xs-50 {
                padding: 50px !important;
        }

        .p-xs-60 {
                padding: 60px !important;
        }

        .p-xs-70 {
                padding: 70px !important;
        }

        .p-xs-80 {
                padding: 80px !important;
        }

        .p-xs-90 {
                padding: 90px !important;
        }

        .pt-xs-0 {
                padding-top: 0px !important;
        }

        .pt-xs-5 {
                padding-top: 5px !important;
        }

        .pt-xs-10 {
                padding-top: 10px !important;
        }

        .pt-xs-15 {
                padding-top: 15px !important;
        }

        .pt-xs-20 {
                padding-top: 20px !important;
        }

        .pt-xs-25 {
                padding-top: 25px !important;
        }

        .pt-xs-30 {
                padding-top: 30px !important;
        }

        .pt-xs-40 {
                padding-top: 40px !important;
        }

        .pt-xs-50 {
                padding-top: 50px !important;
        }

        .pt-xs-60 {
                padding-top: 60px !important;
        }

        .pt-xs-70 {
                padding-top: 70px !important;
        }

        .pt-xs-80 {
                padding-top: 80px !important;
        }

        .pt-xs-90 {
                padding-top: 90px !important;
        }

        .pb-xs-0 {
                padding-bottom: 0px !important;
        }

        .pb-xs-5 {
                padding-bottom: 5px !important;
        }

        .pb-xs-10 {
                padding-bottom: 10px !important;
        }

        .pb-xs-15 {
                padding-bottom: 15px !important;
        }

        .pb-xs-20 {
                padding-bottom: 20px !important;
        }

        .pb-xs-25 {
                padding-bottom: 25px !important;
        }

        .pb-xs-30 {
                padding-bottom: 30px !important;
        }

        .pb-xs-40 {
                padding-bottom: 40px !important;
        }

        .pb-xs-50 {
                padding-bottom: 50px !important;
        }

        .pt-xs-60 {
                padding-bottom: 60px !important;
        }

        .pt-xs-70 {
                padding-bottom: 70px !important;
        }

        .pt-xs-80 {
                padding-bottom: 80px !important;
        }

        .pt-xs-90 {
                padding-bottom: 90px !important;
        }

        .pl-xs-0 {
                padding-left: 0px !important;
        }

        .pl-xs-5 {
                padding-left: 5px !important;
        }

        .pl-xs-10 {
                padding-left: 10px !important;
        }

        .pl-xs-15 {
                padding-left: 15px !important;
        }

        .pl-xs-20 {
                padding-left: 20px !important;
        }

        .pl-xs-25 {
                padding-left: 25px !important;
        }

        .pl-xs-30 {
                padding-left: 30px !important;
        }

        .pl-xs-40 {
                padding-left: 40px !important;
        }

        .pl-xs-50 {
                padding-left: 50px !important;
        }

        .pl-xs-60 {
                padding-left: 60px !important;
        }

        .pl-xs-70 {
                padding-left: 70px !important;
        }

        .pl-xs-80 {
                padding-left: 80px !important;
        }

        .pl-xs-90 {
                padding-left: 90px !important;
        }

        .pr-xs-0 {
                padding-right: 0px !important;
        }

        .pr-xs-5 {
                padding-right: 5px !important;
        }

        .pr-xs-10 {
                padding-right: 10px !important;
        }

        .pr-xs-15 {
                padding-right: 15px !important;
        }

        .pr-xs-20 {
                padding-right: 20px !important;
        }

        .pr-xs-25 {
                padding-right: 25px !important;
        }

        .pr-xs-30 {
                padding-right: 30px !important;
        }

        .pr-xs-40 {
                padding-right: 40px !important;
        }

        .pr-xs-50 {
                padding-right: 50px !important;
        }

        .pr-xs-60 {
                padding-right: 60px !important;
        }

        .pr-xs-70 {
                padding-right: 70px !important;
        }

        .pr-xs-80 {
                padding-right: 80px !important;
        }

        .pr-xs-90 {
                padding-right: 90px !important;
        }

        .ptb-xs-0 {
                padding-top: 0px !important;
                padding-bottom: 0px !important;
        }

        .ptb-xs-5 {
                padding-top: 5px !important;
                padding-bottom: 5px !important;
        }

        .ptb-xs-10 {
                padding-top: 10px !important;
                padding-bottom: 10px !important;
        }

        .ptb-xs-15 {
                padding-top: 15px !important;
                padding-bottom: 15px !important;
        }

        .ptb-xs-20 {
                padding-top: 20px !important;
                padding-bottom: 20px !important;
        }

        .ptb-xs-25 {
                padding-top: 25px !important;
                padding-bottom: 25px !important;
        }

        .ptb-xs-30 {
                padding-top: 30px !important;
                padding-bottom: 30px !important;
        }

        .ptb-xs-40 {
                padding-top: 40px !important;
                padding-bottom: 40px !important;
        }

        .ptb-xs-50 {
                padding-top: 50px !important;
                padding-bottom: 50px !important;
        }

        .ptb-xs-60 {
                padding-top: 60px !important;
                padding-bottom: 60px !important;
        }

        .ptb-xs-70 {
                padding-top: 70px !important;
                padding-bottom: 70px !important;
        }

        .ptb-xs-80 {
                padding-top: 80px !important;
                padding-bottom: 80px !important;
        }

        .ptb-xs-90 {
                padding-top: 90px !important;
                padding-bottom: 90px !important;
        }

        .plr-xs-0 {
                padding-left: 0px !important;
                padding-right: 0px !important;
        }

        .plr-xs-5 {
                padding-left: 5px !important;
                padding-right: 5px !important;
        }

        .plr-xs-10 {
                padding-left: 10px !important;
                padding-right: 10px !important;
        }

        .plr-xs-15 {
                padding-left: 15px !important;
                padding-right: 15px !important;
        }

        .plr-xs-20 {
                padding-left: 20px !important;
                padding-right: 20px !important;
        }

        .plr-xs-25 {
                padding-left: 25px !important;
                padding-right: 25px !important;
        }

        .plr-xs-30 {
                padding-left: 30px !important;
                padding-right: 30px !important;
        }

        .plr-xs-40 {
                padding-left: 40px !important;
                padding-right: 40px !important;
        }

        .plr-xs-50 {
                padding-left: 50px !important;
                padding-right: 50px !important;
        }

        .plr-xs-60 {
                padding-left: 60px !important;
                padding-right: 60px !important;
        }

        .plr-xs-70 {
                padding-left: 70px !important;
                padding-right: 70px !important;
        }

        .plr-xs-80 {
                padding-left: 80px !important;
                padding-right: 80px !important;
        }

        .plr-xs-90 {
                padding-left: 90px !important;
                padding-right: 90px !important;
        }

}


