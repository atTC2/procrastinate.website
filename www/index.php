<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type"   content="text/html; charset=utf-8" />
        <meta name="viewport"             content="width=device-width, initial-scale=1" />
        <meta name="theme-color"          content="#B20000">
        <meta name="msapplication-navbutton-color" content="#B20000">
        <meta name="apple-mobile-web-app-status-bar-style" content="#B20000">
        <meta property="og:url"           content="http://procrastinate.website/" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="Procrastinate - The Website" />
        <meta property="og:description"   content="Want to procrastinate? This is the website for you!" />
        <meta property="og:image"         content="http://procrastinate.website/cover.png" />
        <meta name="url"                  content="http://procrastinate.website/" />
        <meta name="type"                 content="website" />
        <meta name="title"                content="Procrastinate - The Website" />
        <meta name="description"          content="Want to procrastinate? This is the website for you!" />
        <meta name="image"                content="http://procrastinate.website/cover.png" />
        <meta name="keywords"             content="procrastinate, procrastination, procrastinate website, procrastination website, website, the procrastinate website">
        
        <link rel="icon" type="img/ico" href="favicon.ico">
        
        <title>Procrastinate - The Website</title>
        
        <link type="text/css" rel="stylesheet" href="main.css"/>
        
        <script>
            window.twttr = (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function(f) {
                t._e.push(f);
                };

                return t;
            }(document, "script", "twitter-wjs"));
        </script>
        
        <script src="procrastinate.js"></script>
    </head>
    <body>
        
        <?php if(isset($_GET["go"])) { ?>
        <div id="content" class="text"><h1>Procrastinating...</h1></div>
        <script> procrastinate(); </script>
        <?php } else { ?>
        
        <div id="content" class="text">
            <h1>Ready to Procrastinate?</h1>
            <button id="button_main" class="text" onclick="procrastinate();">let's go!</button>
        </div>
        
        <div id="bookmark-this"><h4>Tip: bookmark 'procrastinate.website/go' to auto-procrastinate!</h4></div>
        
        <div id="footer" class="text">
            Made by <a href="https://twitter.com/TomBClarke/">@TomBClarke</a>
        </div>
        <div id="tweet_button">
            <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=The%20procrastinate.website%21&hashtags=TheProcrastinateWebsite&url=http://procrastinate.website&via=TomBClarke"></a>
            <script>twttr.widgets.load();</script>
        </div>
<!--
        <div id="extension" class="text">
            <a href="procrastinate.extension.crx">Get the extension! (Chrome only)</a>
        </div>
-->
        <?php } ?>
    </body>
</html>