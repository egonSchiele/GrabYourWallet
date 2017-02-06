var allData = {
    ".*\.amazon.com.*": {
        email: ["amazon-pr@amazon.com", "jeff@amazon.com"]
    },
    ".*\.6pm.com.*": {
        email: ["cs@6pm.com", "PR@zappos.com"]
    },
    ".*\.bedbathandbeyond.com.*": {
        email: ["public.relations@bedbath.com"]
    },
    ".*\.belk.com.*": {
        email: ["Jessica_Graham@belk.com"]
    },
    ".*\.bloomingdales.com.*": {
        email: ["anne.keating@bloomingdales.com", "julia.austin@bloomingdales.com", "curtis.kelly@bloomingdales.com", "suzy.nager@bloomingdales.com"]
    },
    ".*\.bluefly.com.*": {
        email: ["flyrep@bluefly.com"]
    },
    ".*\.bonton.com.*": {
        email: ["ir@bonton.com"]
    },
    ".*\.build.com.*": {
        email: ["pr@build.com"]
    },
    ".*\.burlingtoncoatfactory.com.*": {
        email: ["ClareB@mbooth.com"]
    },
    ".*\.buybuybaby.com.*": {
        email: ["public.relations@bedbath.com"]
    },
    ".*\.carsons.com.*": {},
    ".*\.c21stores.com.*": {
        email: ["Adriana.Infante@rbbpr.com"]
    },
    ".*\.dillards.com.*": {
        email: ["julie.bull@dillards.com"]
    },
    ".*\.dsw.com.*": {
        email: ["MediaRelations@dswinc.com"]
    },
    ".*\.elder-beerman.com.*": {},
    ".*\.filenesbasement.com.*": {},
    ".*\.gilt.com.*": {
        email: ["press@gilt.com"]
    },
    ".*\.heels.com.*": {},
    ".*\.thebay.com.*": {
        email: ["tiffany.bourre@hbc.com", "michelle.veilleux@hbc.com"]
    },
    ".*\.hsn.com.*": {},
    ".*\.jet.com.*": {
        email: ["help@jet.com"]
    },
    ".*\.kushner.com.*": {
        email: ["james@risaheller.com"],
        message: "owner Jared Kushner led Trump's campaign"
    },
    ".*\.lordandtaylor.com.*": {
        email: ["jenia_molnar@lordandtaylor.com"]
    },
    ".*\.macys.com.*": {
        email: "holly.thomas@macys.com, julie.striderfukami@macys.com, orlando.veras@macys.com,tracy.davis@macys.com, christine.olver@macys.com, billy.dume@macys.com , melissa.goff@macys.com, juliana.echavarria@macys.com, melody.regalado@macys.com, Nathalie.almonte@macys.com, andrea.schwartz@macys.com, carolyn.ng@macys.com, jacqueline.king@macys.com, emily.workman@macys.com, raegan.gall@macys.com, joy.deinla@macys.com, monica.gubrud@macys.com, martha.gildemontes@macys.com, rosemarie.robles@macys.com, elina.kazan@macys.com , marissa.nicolaescu@macys.com, alyssa.bendetson@macys.com, Mercedes.Diez@macys.com".split(", ")
    },
    ".*\.marshalls.com.*": {
        email: ["Dyana.Buttacavoli@Edelman.com", "brooke.hardington@edelman.com"]
    },
    ".*\.neimanmarcus.com.*": {
        email: ["hillary_stonger@neimanmarcus.com", "Ginger_Reeder@neimanmarcus.com"]
    },
    ".*\.nordstrom.com.*": {
        email: "NordstromPR@Nordstrom.com, blake.nordstrom@nordstrom.com, erik.nordstrom@nordstrom.com, peter.nordstrom@nordstrom.com, Jamie.nordstrom@nordstrom.com, Geevy.thomas@nordstrom.com".split(", ")
    },
    ".*\.overstock.com.*": {
        email: ["pr@overstock.com"]
    },
    ".*\.perfumania.com.*": {
        email: ["perf@jcir.com"]
    },
    ".*\.rossstores.com.*": {
        email: ["investor.relations1@ros.com"]
    },
    ".*\.scionhotels.com.*": {
        message: "it is owned by Trump"
    },
    ".*\.saksfifthavenue.com.*": {
        email: ["katie_majeski@s5a.com", "tiffany.bourre@hbc.com"]
    },
    ".*\.shopstyle.com.*": {
        email: ["pr@popsugar.com"]
    },
    ".*\.shopstyle.co.uk.*": {
        email: ["pr@popsugar.com"]
    },
    ".*\.steinmart.com.*": {
        email: ["ltasseff@steinmart.com"]
    },
    ".*\.tjx.*": {
        email: ["Dyana.Buttacavoli@Edelman.com", "brooke.hardington@edelman.com"]
    },
    ".*\.trumpgolf.com.*": {
        email: ["pressoffice@donaldtrump.com"],
        message: "it is owned by Trump"
    },
    ".*\.trumphotels.com.*": {
        email: ["pressoffice@donaldtrump.com"],
        message: "it is owned by Trump"
    },
    ".*\.trumpwinery.com.*": {
        email: ["pressoffice@donaldtrump.com"],
        message: "it is owned by Trump"
    },
    ".*\.winners.ca.*": {
        email: ["elyse_goody@tjxcanada.ca", "susie_nick@tjxcanada.ca", "erin_obrien@tjxcanada.ca"]
    },
    ".*\.zappos.com.*": {
        email: ["PR@zappos.com", "ceo@zappos.com"]
    },
    ".*\.abcsupply.com.*": {
        email: ["kgoodale@hiebing.com"],
        message: "its CEO raised funds for Trump"
    },
    ".*\.breitbart.com.*": {},
    ".*\.forbes.com.*": {
        email: ["mcarbonell@forbes.com"],
        message: "its CEO supports Trump"
    },
    ".*\.hobbylobby.com.*": {
        message: "it endorsed Trump"
    },
    ".*\.lendingtree.com.*": {
        email: ["megan.greuling@lendingtree.com"],
        message: "its CEO Doug Lebda raised funds for Trump SuperPAC"
    },
    ".*\.millercoors.com.*": {
        message: "its CEO raised funds for Trump"
    },
    ".*\.nascar.com.*": {
        email: ["rposton@nascar.com", "agiangola@nascar.com", "jhamilton@nascar.com", "tbreaux@nascar.com"],
        message: "its CEO endorsed Trump"
    },
    ".*\.newbalance.com.*": {
        email: ["media.relations@newbalance.com", "mary.lawton@newbalance.com", "amy.dow@newbalance.com", "carrie.garfield@newbalance.com", "caitlin.wholey@newbalance.com", "Kate.Tetirick@newbalance.com"],
        message: "it has expressed public support for Trump"
    },
    ".*\.nationalenquirer.com.*": {
        email: ["NEQcustserv@cdsfulfillment.com"],
        message: "it endorsed Trump"
    },
    ".*\.people.com.*": {
        email: ["editor@people.com"],
        message: "it is normalizing Trump"
    },
    ".*\.uline.com.*": {
        email: ["customer.service@uline.com"],
        message: "its CEO raised funds for Trump"
    },
    ".*\.ufc.com.*": {
        message: "its president endorsed Trump"
    },
    ".*\.yuengling.com.*": {
        email: ["marketing@yuengling.com"],
        message: "its founder endorsed Trump"
    },

};

var defaultData = {
    message: "it does business with Trump"
};

var createElement = function(content) {
    var body = document.getElementsByTagName("body")[0];
    var banner = document.createElement("h1");
    var tweet_link = '<a target="_blank" class="twitter-share-button" href="https://twitter.com/intent/tweet?text=This extension shows me an alert on websites that support Trump: https://chrome.google.com/webstore/detail/grabyourwallet/lbnihchacnfpogcnmcilkejghoojnhec Install and share %23GrabYourWallet">Tweet</a>';
    banner.innerHTML = "<p>" + content + " " + tweet_link + "</p>";
    banner.id = "grab_your_wallet_extension";
    body.insertBefore(banner, body.firstChild);
}

var run = function() {
    var host = window.location.hostname;
    var data = defaultData;
    var show_banner = false;
    for (var host_regex in allData) {
        if (allData.hasOwnProperty(host_regex)) {
            if (host.match(host_regex)) {
                var show_banner = true;
                for (var key in allData[host_regex]) {
                    data[key] = allData[host_regex][key];
                }
            }
        }
    }

    if (!show_banner) {
        return;
    }

    var msg = ["Don't support this website, " + data.message + "!"];
    msg.push("<a target='_blank' href='https://grabyourwallet.org'>Full details here</a>");

    var subject = "Please stop supporting Trump";
    var body = "Hi, I'm a customer of your brand. Unfortunately I'll no longer be able to shop there because you do business with the Trump family. If you were to no longer do so I would consider returning as a customer.";

    if (data.email) {
        msg.push("<a target='_blank' href=\"mailto:" + data.email.join(",") + "?subject=" + subject + "&body=" + body + "\">Email them</a>");
    }

    if (data.alternatives) {
        var alternatives = data.alternatives.join(", ");
        msg.push("Try " + alternatives + "instead");
    } else {
        msg.push("<a target='_blank' href='https://docs.google.com/forms/d/1houBvDyTW0Ra1iI5SHqQcFvaw9RSENSHgkIEbjnWuGs'>Suggest an alternative to this site</a>");
    }

    createElement(msg.join(" - "));
}

run();
