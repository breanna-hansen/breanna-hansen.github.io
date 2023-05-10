<?php

// Get the database connection file
require_once 'library/connections.php';

// Get the functions library
require_once 'library/functions.php';

// Get the world data
require_once 'library/world-data.php';

?>

<!DOCTYPE HTML>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="World COVID-19 statistical data curve for each country." />
    <meta property="og:image" content="images/world-covid-19-data-statistics-medium.jpg" />
    <meta name="msvalidate.01" content="E3E5FCE9721DEA7958C4740594F8CB57" />
    <title>World COVID-19 Data Charts</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/medium.css">
    <link rel="stylesheet" href="css/large.css">
    <link rel="stylesheet" href="css/extra-large.css">
    <link rel="stylesheet" href="css/largest.css">
    <link rel="shortcut icon" type="image/png" href="images/favicon.png" />

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163371898-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-163371898-1');
    </script>

</head>

<body>
    <header>
        <img class="logo" src="images/logo.png" alt="Logo">
        <div class="wrap">
            <h1>World <span class="secondLine">COVID-19 Statistics</span></h1>
            <h2>Interactive statistical data tracker for each country.</h2>
            <form method="get" action="index.php">
                <input class="header-link" type="submit" name="action" class="diff-data" value="View U.S. Data">
            </form>
        </div>
       <div class="donate">
            <button class="menu-icon fa fa-bars" type="button" onclick="toggleHam()"></button>
            <!-- <a href="https://www.buymeacoffee.com/U9nayPo" target="_blank"><img class="coffee" src="https://cdn.buymeacoffee.com/buttons/arial-orange.png" alt="Donate Now"></a> -->
            <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/U9nayPo">
                <img class="donateImg" src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Donate Now">
                <span class="donateLink">Buy Me a Coffee</span>
            </a>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=688941855197271&autoLogAppEvents=1" nonce="K6fPBJrK"></script>
            <div class="fb-share-button" data-href="http://covid-19datacurve.com/index.php?action=View+World+Data" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcovid-19datacurve.com%2Findex.php%3Faction%3DView%2BWorld%2BData&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
         </div>
    </header>

    <nav class="stateLinks">
        <ul id="navigation" class="hide">
            <?php $states = getStateNames();
            $countContainers = 0;
            foreach ($states as $states) {
                echo '<li><a href="#chartContainer' . $countContainers . '">' . $states[0] . '</a></li>';
                $countContainers++;
            } ?>
        </ul>
    </nav>

    <main>
        <p class="announcement">Please wait for charts to load...</p>
        <div>
            <div class="stateLinks">
                <?php echo $sidebarMenu; ?>
                <div class="amazonad">
                    <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=primemain&banner=0GCYTHFZDJTVVMVYTQR2&f=ifr&linkID=967ffbc57b4ce28724368677ff3eab22&t=freekindlebooks01-20&tracking_id=freekindlebooks01-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
                    <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=topratedproducts&banner=11X1Y6FZ67GYSYVDDB02&f=ifr&linkID=bc0e5dc5e9b98ecdab3ea437a8ac1190&t=freekindlebooks01-20&tracking_id=freekindlebooks01-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
                </div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- Vertical-covid -->
                <ins class="adsbygoogle" data-ad-client="ca-pub-7009342583225847" data-ad-slot="9045971263" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
            <div class="row">
                <iframe class="world-block" src="https://ourworldindata.org/grapher/weekly-growth-covid-cases?year=2020-07-09" loading="lazy"></iframe>
                <iframe class="world-block cases-multi-line" src="https://ourworldindata.org/coronavirus-data-explorer?yScale=log&zoomToSelection=true&country=USA~GBR~CAN~BRA~AUS~IND~DEU~FRA~ITA&casesMetric=true&dailyFreq=true&aligned=true&smoothing=7&pickerMetric=location&pickerSort=asc" loading="lazy"></iframe>
                <iframe class="world-block" src="https://ourworldindata.org/grapher/daily-cases-covid-19?country=~OWID_WRL" loading="lazy"></iframe>
                <iframe class="world-block" src="https://ourworldindata.org/grapher/daily-deaths-covid-19"></iframe>
                <iframe class="world-block" src="https://ourworldindata.org/grapher/covid-deaths-income" loading="lazy"></iframe>
                <iframe class="world-block" src="https://ourworldindata.org/grapher/debt-relief-covid?year=2020-07-09" loading="lazy"></iframe>
                <iframe class="world-block" src="https://ourworldindata.org/grapher/workplace-closures-covid?year=2020-07-09" loading="lazy"></iframe>
                <iframe class="world-block" src="https://ourworldindata.org/grapher/international-travel-covid?year=2020-07-09" loading="lazy"></iframe>
            </div>
        </div>
    </main>
    <footer>
        <section>
            <div>
                <h2>About</h2>
                <p>Breanna Hansen is a student at Brigham Young University Idaho majoring in Website Design & Development with an Emphasis in
                    Development. She is available for hire as a freelance web developer or as an intern. Visit <a class="underline" href="https://www.breannaghansen.com">
                        breannaghansen.com</a> to learn more about her work.
                </p>
            </div>
            <div class="bar"></div>
        </section>
        <section>
            <div>
                <h2>Contact</h2>
                <p>Email: <a href="mailto:contact@breannaghansen.com">contact@breannaghansen.com</a></p>
                <p>Website: <a href="https://breannaghansen.com">breannaghansen.com</a></p>
                <p class="donateFooter">Donate: <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/U9nayPo">
                        <img class="donateImg" src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Donate Now">
                        <span class="donateLink">Donate Now</span>
                    </a>
                    <!-- <p>Donate: <a href="https://www.buymeacoffee.com/U9nayPo" target="_blank"><img class="coffee coffee-footer" src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee"></a>
                </p> -->
            </div>
            <div class="bar"></div>
        </section>
        <section>
            <h2>Follow</h2>
            <a class="fa fa-instagram" href="https://www.instagram.com/breanna.g.hansen/" title="Instagram"></a>
            <a class="fa fa-twitter" href="https://twitter.com/BreannaGHansen" title="Twitter"></a>
            <a class="fa fa-youtube" href="https://www.youtube.com/channel/UCgtmwK20YUA7FykA-fjr-HA?view_as=subscriber" title="YouTube"></a>
        </section>
    </footer>

    <script src="js/toggle-ham.js"></script>
</body>