/**
 *
 * This is a Greasemonkey script and must be run using a Greasemonkey-compatible browser.
 *
 * @author maymay <bitetheappleback@gmail.com>
 */
// ==UserScript==
// @name           FetLife Alleged Abusers Database Engine (FAADE)
// @version        0.1.1
// @namespace      com.maybemaimed.fetlife.faade
// @updateURL      https://userscripts.org/scripts/source/151016.user.js
// @description    Alerts you of people who have allegedly assaulted others as you browse FetLife. Empowers you to anonymously report a consent violation perpetrated by a FetLife user.
// @include        https://fetlife.com/*
// @exclude        https://fetlife.com/adgear/*
// @exclude        https://fetlife.com/chat/*
// @exclude        https://fetlife.com/im_sessions*
// @exclude        https://fetlife.com/polling/*
// @grant          GM_log
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// ==/UserScript==
FAADE = {};
FAADE.CONFIG = {
    'debug': false, // switch to true to debug.
    'gdocs_key': '0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXc',
    'gform_key': 'dGNVT1kzSzFnOXhHRjh1RnczZVVmMXc6MQ',
    'gdocs_development_key': '0ArYmNHuRadHbdGxjMUhyR0FzLWJicHNXUFdxckFEQWc',
    'gform_development_key': 'dGxjMUhyR0FzLWJicHNXUFdxckFEQWc6MQ',
};

// Utility debugging function.
FAADE.log = function (msg) {
    if (!FAADE.CONFIG.debug) { return; }
    GM_log('FETLIFE FAADE: ' + msg);
};

// Initializations.
var uw = (unsafeWindow) ? unsafeWindow : window ; // Help with Chrome compatibility?
GM_addStyle('\
/* Highlight alleged abusers in bright yellow. */\
.faade_alleged_abuser {\
    display: inline-block;\
    border: 2px solid yellow;\
}\
#faade_abuse_reports caption {\
    background: yellow;\
    color: red;\
}\
#faade_abuse_reports tfoot td {\
    padding-top: 1em;\
    text-align: center;\
}\
/* General prettiness. */\
#profile #main_content a + a.faade_report_link { padding-left: 5px; }\
footer .faade_report_link,\
.blog_entry p.quiet.small .faade_report_link,\
.byline .faade_report_link {\
    display: block;\
    color: #777;\
}\
.mini_feed_title .faade_report_link {\
    float: left;\
    padding-right: 5px;\
}\
ul.pictures li a.faade_report_link,\
#profile ul.friends li { width: auto; }\
');
FAADE.init = function () {
    FAADE.abuser_database = FAADE.getValue('abuser_database', false);
    if (FAADE.abuserDatabaseExpired()) {
        FAADE.fetchAbuserDatabase();
    }
    FAADE.main();
};
window.addEventListener('DOMContentLoaded', FAADE.init);

// Determines whether the abuser database has expired and needs to be re-fetched.
FAADE.abuserDatabaseExpired = function () {
    // If we don't have a database, then of course it's "expired."
    if (!FAADE.abuser_database) {
        FAADE.log('Abuser database expired because of false-equivalent value.');
        return true;
    } else if ( (new Date().getTime() > (parseInt(FAADE.getValue('last_fetch_time')) + 86400)) ) {
        // Abuser database was last fetched more than 24 hours (86400 seconds) ago, so refresh.
        FAADE.log('Abuser database expired because of time.');
        return true;
    } else {
        FAADE.log('Abuser database still fresh.');
        return false;
    }
};

FAADE.getDatabaseConnectionString = function () {
    return (FAADE.CONFIG.debug) ?
        FAADE.CONFIG.gdocs_development_key :
        FAADE.CONFIG.gdocs_key;
};
FAADE.getReportFormKey = function () {
    return (FAADE.CONFIG.debug) ?
        FAADE.CONFIG.gform_development_key :
        FAADE.CONFIG.gform_key;
};

FAADE.setValue = function (x, y) {
    return (FAADE.CONFIG.debug) ?
        GM_setValue(x += '_development', y) :
        GM_setValue(x, y);
};
FAADE.getValue = function (x, y) {
    if (arguments.length === 1) {
        return (FAADE.CONFIG.debug) ?
            GM_getValue(x += '_development'):
            GM_getValue(x);
    } else {
        return (FAADE.CONFIG.debug) ?
            GM_getValue(x += '_development', y):
            GM_getValue(x, y);
    }
};

FAADE.fetchAbuserDatabase = function () {
    var key = FAADE.getDatabaseConnectionString();
    var url = 'https://docs.google.com/spreadsheet/pub?key=' + key + '&output=html';
    FAADE.log('fetching abusers database from ' + url);
    GM_xmlhttpRequest({
        'method': 'GET',
        'url': url,
        'onload': function (response) {
            if (!response.finalUrl.match(/^https:\/\/docs.google.com\/spreadsheet\/pub/)) {
                FAADE.log('Failed to fetch abuser database from ' + url);
                return false;
            }
            FAADE.setValue('last_fetch_time', new Date().getTime().toString()); // timestamp this fetch
            FAADE.setValue('abuser_database', response.responseText);
            FAADE.abuser_database = FAADE.getValue('abuser_database');
        }
    });
};

// This is the main() function, executed on page load.
FAADE.main = function () {
    // Make a list of known alleged abuser user IDs.
    var parser = new DOMParser();
    var doc = parser.parseFromString(FAADE.abuser_database, 'text/html');
    var els = doc.querySelectorAll('#tblMain td:nth-child(3)'); // third child is the column of IDs.
    var abuser_ids = [];
    for (var i = 1; i < els.length; i++) { // we never need the first (0'th) cell because Google provides it blank.
        abuser_ids.push(els[i].innerHTML);
    }
    FAADE.log('recalled abuser ids ' + abuser_ids);

    // Are we on a user profile page?
    if (window.location.href.match(/users\/(\d+)\/?$/)) {

        var profile_nick = document.querySelector('h2.bottom').childNodes[0].textContent.match(/\S+/)[0];
        var id_in_url = window.location.href.match(/users\/(\d+)\/?$/)[1];

        // If we're not viewing our own profile page, insert a report link.
        usr_ops = document.querySelector('#main_content p.quiet');
        if (usr_ops) {
            usr_ops.appendChild(document.createElement('br'));
            usr_ops.appendChild(FAADE.createAbuseReportLink(id_in_url, profile_nick));
        }

        // If this is a profile page of an alleged abuser,
        if (-1 !== abuser_ids.indexOf(id_in_url)) {

            var report_el = document.createElement('table');
            report_el.setAttribute('id', 'faade_abuse_reports');
            report_el.setAttribute('summary', 'Reported consent violations committed by ' + profile_nick + '.');
            var caption = document.createElement('caption');
            caption.innerHTML = 'There are reports ' + profile_nick + ' violated others\' consent in these ways:';
            var tfoot = document.createElement('tfoot');
            tfoot.innerHTML = '<tr><td colspan="2"></td></tr>';
            tfoot.querySelector('td').appendChild(FAADE.createAbuseReportLink(id_in_url, profile_nick));
            report_el.appendChild(caption);
            report_el.appendChild(tfoot);

            // Find all reports that match ID number.
            var abuse_reports = [];
            for (var ix = 0; ix < els.length; ix++) {
                if (id_in_url === els[ix].innerHTML) {
                    abuse_reports.push(els[ix].parentNode); // the table row of abuse report
                }
            }
            // Add this information to the top of this user's profile
            for (var iy = 0; iy < abuse_reports.length; iy++) {
                var num = iy + 1;
                var tr = document.createElement('tr');
                details_html = '<ul><li class="faade_abuse_report_datetime">' + abuse_reports[iy].childNodes[7].innerHTML + '</li>';
                details_html += '<li class="faade_abuse_report_location">' + abuse_reports[iy].childNodes[6].innerHTML + '</li></ul>';
                tr.innerHTML += '<th>Abuse report ' + num.toString() + ' (<span class="faade_abuse_reported_datetime">' +  abuse_reports[iy].childNodes[1].innerHTML + '</span>):' + details_html + '</th>';
                tr.innerHTML += '<td>' + abuse_reports[iy].childNodes[5].innerHTML + '</td>';
                report_el.appendChild(tr);
            }

            var before = document.querySelector('#main_content table:last-child');
            before.parentNode.insertBefore(report_el, before);
        }

    }

    // Collect all user links on this page.
    var user_links = [];
    for (i = 0; i < document.links.length; i++) {
        var l = document.links[i].href.match(/^(https:\/\/fetlife.com)?\/users\/(\d+)\/?$/);
        if ( l && (l[2] !== uw.FetLife.currentUser.id.toString()) ) {
            user_links.push(document.links[i]);
        }
    }

    // For each user ID found,
    var last_id = null;
    for (i = 0; i < user_links.length; i++) {
        // Collect its user ID number.
        var id = user_links[i].href.match(/\d+\/?$/);
        if (id) { id = id.toString(); } // cast to string for later comparison

        // Get nickname.
        var n;
        if (user_links[i].children.length) {
            // This is an avatar link, not a text link.
            n = user_links[i].childNodes[0].alt;
        } else {
            // This is a text link. Easy.
            n = user_links[i].innerHTML;
        }

        // check the alleged abusers data store for a match.
        if (-1 !== abuser_ids.indexOf(id)) {
            FAADE.log('found match on this page for alleged abuser ID number ' + id);
            // highlight the user's links that matched an alleged abuser using CSS
            user_links[i].setAttribute('class', user_links[i].className + ' faade_alleged_abuser');

        }

        // Don't create another link if we just made one for that user.
        if (id === last_id) { continue; }

        // Offer a link to add another report for this user.
        // See also: https://support.google.com/docs/bin/answer.py?hl=en&answer=160000
        // Add link to report this user for a consent violation.
        var a = FAADE.createAbuseReportLink(id, n);
        user_links[i].parentNode.appendChild(a);
        last_id = id;
    }
};

FAADE.createAbuseReportLink = function (id, nick) {
    var a = document.createElement('a');
    a.setAttribute('class', 'faade_report_link');
    a.setAttribute('target', '_blank');
    var href = 'https://docs.google.com/spreadsheet/viewform?formkey=' + FAADE.getReportFormKey();
    href += '&entry_0=' + id;
    href += '&entry_1=' + nick;
    a.setAttribute('href', href);
    a.innerHTML = '(report a consent violation by ' + nick + ')';
    return a;
};

// The following is required for Chrome compatibility, as we need "text/html" parsing.
/*
 * DOMParser HTML extension
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function(DOMParser) {
	"use strict";

	var
	  DOMParser_proto = DOMParser.prototype
	, real_parseFromString = DOMParser_proto.parseFromString
	;

	// Firefox/Opera/IE throw errors on unsupported types
	try {
		// WebKit returns null on unsupported types
		if ((new DOMParser).parseFromString("", "text/html")) {
			// text/html parsing is natively supported
			return;
		}
	} catch (ex) {}

	DOMParser_proto.parseFromString = function(markup, type) {
		if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
			var
			  doc = document.implementation.createHTMLDocument("")
			;

			doc.body.innerHTML = markup;
			return doc;
		} else {
			return real_parseFromString.apply(this, arguments);
		}
	};
}(DOMParser));
