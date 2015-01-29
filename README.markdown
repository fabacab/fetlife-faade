# Predator Alert Tool for FetLife (formerly the FetLife Alleged Abusers Database Engine, or FAADE)

The Predator Alert Tool for FetLife, or PAT-FetLife, is a tool that alerts you of profiles on [FetLife](https://en.wikipedia.org/wiki/FetLife) belonging to people who have reportedly violated others' consent, such as through sexual assault or rape. It was formerly called the FetLife Alleged Abusers Database Engine (FAADE). This tool is a response to what is, as of this writing, [one of the most popular suggestions in the FetLife suggestion box](https://fetlife.com/improvements/429):

> Let us name abusers.
>
> Fetlife's Terms of Use include the following prohibitions:
>
> "You agree that, while using BitLove Inc.’s Products and Services, you will not:
Personally attack, make fun of, troll, flame, bully, stalk or otherwise harass another member.
Make criminal accusations against another member in a public forum. [...]"
>
> While these conditions may be invoked to stop harassment and to shield Fetlife from liability, they also prevent members of our community from publicly naming and speaking out against abusers, rapists, and other predators. Given Fetlife's prominence and the role it plays in supporting and expanding kink community - particularly its role as a point of entry into the community for young, inexperienced, or otherwise vulnerable people - we feel that Fetlife's current policy is irresponsible and tantamount to enabling abuse. PLEASE CHANGE IT.

The Predator Alert Tool for FetLife (PAT-FetLife) empowers Internet users like you to anonymously report harassment, rape, and other abuses they have experienced at the hands of a person with a FetLife account. Your report is then automatically disemminated to other PAT-FetLife users, as well as being published on the open Internet.

Additionally:

* While browsing FetLife, the Predator Alert Tool will visually highlight any user profile you encounter that has allegedly violated another person's consent. Click through to the user's profile for a complete listing of reported consent violations.
* Each time you load a user's FetLife profile, that user's profile picture is scanned against the United States's Sex Offender Registry using the facial recognition service provided by CreepShield.com, and the most likely match is shown to you:

![Screenshot of FetLife profile picture used as CreepShield.com search.](https://i.imgur.com/8oPV7Uw.png)

Click the "Search" button to get the full search results from CreepShield.com:

![Screenshot of CreepShield.com search results from FetLife profile picture.](https://i.imgur.com/fd5Z1T9.png)

## System requirements

The following software must be installed on your system before installing the Predator Alert Tool for FetLife user script.

### Mozilla Firefox

If you use the [Mozilla Firefox](http://getfirefox.com/) web browser (version 12.0 or higher), ensure you have the [Greasemonkey extension](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) installed (at version 1.0 or higher).

### Google Chrome

If you use the [Google Chrome](https://chrome.google.com/) web browser (version 23 or higher), ensure you have the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) installed.

## Installing

To install the Predator Alert Tool for FetLife, go to [http://maybemaimed.com/playground/predator-alert-tool-for-fetlife/](http://maybemaimed.com/playground/predator-alert-tool-for-fetlife/) and click "[Download and install](https://github.com/meitar/fetlife-faade/raw/master/fetlife-alleged-abusers.user.js)" near the middle of the page:

> [Download and install Predator Alert Tool for FetLife](https://github.com/meitar/fetlife-faade/raw/master/fetlife-alleged-abusers.user.js)

If you enjoy this script, please consider tossing a few metaphorical coins in [my cyberbusking hat](http://maybemaimed.com/cyberbusking/). :) Your donations are sincerely appreciated! Can't afford to part with any coin? It's cool. [Tweet your appreciation, instead](https://twitter.com/intent/tweet?text=%23FetLife%20Alleged%20Abusers%20Database%20Engine%3A%20http%3A%2F%2Fmaybemaimed.com%2Fplayground%2Ffetlife-alleged-abusers-database-engine%2F%20Please%20help%20us%20transform%20rape%20culture%20into%20%23consent%20culture%21%20SPREAD%20THE%20WORD.).

If [maybemaimed.com is censored](http://maybemaimed.com/where-im-censored/) where you are, you can alternatively go to [the Userscripts.org page for Predator Alert Tool for FetLife](https://userscripts.org/scripts/show/151016) and click on "[Install](http://userscripts.org/scripts/source/151016.user.js)". If the tool is also unavailable there, you can alternatively [download PAT-FetLife from GitHub.com](https://github.com/meitar/fetlife-faade/raw/master/fetlife-alleged-abusers.user.js).

## Using

To use the Predator Alert Tool for FetLife (PAT-FetLife), [log in to your FetLife.com account](https://fetlife.com/login) and click the "(report a consent violation by *username*)" link next to the FetLife username of the user who you wish to report for an alleged assault, rape, or other violation of your consent.

When you click a "report a consent violation" link, you will be presented with a form asking you for pertinent information related to the violation you would like to report. Follow the instructions on the form and click "Submit" to complete your report.

Once you have filed your report, it will be displayed to other PAT-FetLife users near the top of the alleged abuser's FetLife profile, as shown in the example below:

![Screenshot of FetLife profile with record of alleged consent violation.](http://i.imgur.com/XSAHN.png)

Please be patient. It may take up to 24 hours for your report to be visible on FetLife pages to other PAT-FetLife users, but it will be immediately [available on the open Internet](https://docs.google.com/spreadsheet/pub?key=0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXc&output=html). As new reports are filed, PAT-FetLife will proactively alert you of them with a dialogue box (an example is shown in the screenshot below) if they allegedly occurred in or near the same geographic region as listed on your FetLife profile.

![Screenshot of PAT-FetLife dialogue box broadcasting geographically proximal reports.](http://i.imgur.com/ITdh0.png)

For this feature to work most reliably, avoid using abbreviations when you complete the "Where did the abuse happen?" question in the report form when you are filing a report yourself. That is, prefer entering "Baltimore, Maryland" over "B'more, MD."

The entire database of alleged abuses is also available for download to anyone, regardless of whether they use PAT-FetLife or not, in multiple formats:

* [Download the database of alleged abuses by FetLife users in CSV format.](https://docs.google.com/spreadsheet/pub?key=0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXc&output=csv)
* [Download the database of alleged abuses by FetLife users in plain text format.](https://docs.google.com/spreadsheet/pub?key=0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXc&output=txt)
* [Download the database of alleged abuses by FetLife users as a PDF file.](https://docs.google.com/spreadsheet/pub?key=0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXcc&output=pdf)
* [Download the database of alleged abuses by FetLife users as a Microsoft Excel spreadsheet.](https://docs.google.com/spreadsheet/pub?key=0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXc&output=xls)
* [Download the database of alleged abuses by FetLife users as an OpenDocument spreadsheet.](https://docs.google.com/spreadsheet/pub?key=0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXc&output=ods)

Additionally, you can also subscribe to receive updates of alleged abuses:

* [Subscribe to the database of alleged abuses by FetLife users as an ATOM feed.](https://spreadsheets.google.com/feeds/list/0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXc/od6/public/basic)
* [Subscribe to the database of alleged abuses by FetLife users as an RSS feed.](https://spreadsheets.google.com/feeds/list/0ArYmNHuRadHbdGNVT1kzSzFnOXhHRjh1RnczZVVmMXc/od6/public/basic?alt=rss)

## Frequently Asked Questions

Before you report a new issue with the Predator Alert Tool for FetLife (PAT-FetLife), please check to ensure your question is not already addressed in the list below.

* [Can I report a consent violation anonymously?](#can-i-report-a-consent-violation-anonymously)
* [Can I report a consent violation if I don't have a FetLife account?](#can-i-report-a-consent-violation-if-i-dont-have-a-fetlife-account)
* [Can I remove myself from the database?](#can-i-remove-myself-from-the-database)
* [What can I do if I've been falsely accused?](#what-can-i-do-if-ive-been-falsely-accused)
* [Where can I learn more about this issue?](#where-can-i-learn-more-about-this-issue)

### Can I report a consent violation anonymously?

Yes. PAT-FetLife will never require the use of your personally identifying information to be reported, nor will it ever collect your personal information. When you file a report of abuse, you are welcome to include as much or as little information about yourself as you feel comfortable doing.

### Can I report a consent violation if I don't have a FetLife account?

Yes. Anyone can file a report, regardles of whether they, themselves, have a FetLife account. However, allegations can only be made *against* users of FetLife.

If you don't have a FetLife account, you can still [access and submit the report form](https://docs.google.com/spreadsheet/viewform?formkey=dGNVT1kzSzFnOXhHRjh1RnczZVVmMXc6MQ). However, some fields, such as the person's numeric FetLife user ID and profile name, will not be be automatically filled in. Follow the instructions on the report form to help you complete any fields not already pre-filled.

### Can I remove myself from the database?

No. There will never be an option for removing anyone from the database. And no, I'm not sorry about that.

### What can I do if I've been falsely accused?

You can update your FetLife profile to address the allegation. Be sure to respond to the allegation at the very beginning of your "About me" section so that it is displayed close to the report you believe is false. Each report filed against you is numbered, so if you believe there are multiple false accusations, you can refer (and even link) to them by number. For instance, if your FetLife user ID number is `1`, and you have two PAT-FetLife reports associated with your profile, then you can link to the second of the two reports on your profile page with the following URL: [https://fetlife.com/users/1#faade_abuse_report-2](https://fetlife.com/users/1#faade_abuse_report-2)

### Where can I learn more about this issue?

The following articles are important reads that offer additional background and context for this issue:

* [The privacy information FetLife doesn't want you to read](http://maybemaimed.com/2012/09/26/the-privacy-information-fetlife-doesnt-want-you-to-read/)
* [FetLife Is Not Safe for Users](http://sexandthe405.com/fetlife-is-not-safe-for-users/)
* [Fetlife: Not Consent Counts, but Convictions Count, eh?](http://www.consentculture.com/2012/03/fetlife-not-consent-counts-but-convictions-count-eh/)
* [Let's get practical: Care about Internet privacy because it keeps your loved ones physically safer](http://days.maybemaimed.com/post/30606054306/lets-get-practical-care-about-internet-privacy)
* [ABSTRACT: Tracking Rape Culture's Social License to Operate Online](http://days.maybemaimed.com/post/38483206883/abstract-tracking-rape-cultures-social-license-to)
* [Help FetLife's Rape Culture FAADE Away](http://days.maybemaimed.com/post/39785638940/last-october-i-introduced-the-fetlife-alleged)
* [Realize that Karlson-Martini is the kind of person the BDSM community protects. That 19 year old Elizabeth ‘Lizzie’ Marriott and Noelle Paquette are the people who die because of it.](http://days.maybemaimed.com/post/40867303649/in-the-last-week-or-so-i-found-out-that-susan)

Regading the Sex Offender Registry:

* [Sexual Predators, Please Check Here: Match.com’s Deeply Flawed Plan to Screen for Sex Offenders](https://www.eff.org/deeplinks/2011/04/sexual-predators-please-check-here-match-com-s)

Each of the pages listed above also contain numerous additional links. Take the red pill and see how deep the rabbit hole goes.

## Change log

* Version 0.3.2:
    * Enhancement: Only open new tabs for CreepShield.com when required by the specific error message.
* Version 0.3.1:
    * [Bugfix](https://github.com/meitar/fetlife-faade/issues/4): Enable CreepShield integration for Google Chrome by creating the `multipart/form-data` request it expects manually.
* Version 0.3:
    * Integration with CreepShield.com now offers automatic facial recognition scans of FetLife user profile pictures against the United States national Sex Offender Registry.
* Version 0.2.1:
    * Renamed to Predator Alert Tool for FetLife (PAT-FetLife).
* Version 0.2:
    * FAADE now pro-actively alerts you when a new consent violation reportedly happened in your area.
    * Each FAADE report, when displayed on a FetLife profile page, now includes [permalinks](https://en.wikipedia.org/wiki/Permalink) to link directly to a given report.
* Version 0.1.1:
    * Added support for Google Chrome with the Tampermonkey extension installed.
* Version 0.1:
    * Initial release.
