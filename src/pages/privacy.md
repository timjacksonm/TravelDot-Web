---
layout: ../layouts/ProseLayout.astro
title: Privacy policy
description: How TravelDot collects, uses, shares, and deletes your information.
updated: October 27, 2026
---

Northland Software LLC ("us", "we", "our", or "TravelDot") operates the TravelDot mobile app for iPhone and Android, the website at traveldot.app, and associated services ("our services").

This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our services.

We will not use or share your information with anyone except as described in this Privacy Policy.

We use your Personal Information to provide and improve our services. By using our services, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used here have the same meanings as in our [Terms of Service](/terms).

## Information collection and use

While using our services, we ask you to provide information that can be used to contact or identify you ("Personal Information"). This includes:

- **Account information.** If you sign up with email, your email address. We send a one-time code to your email to sign you in. If you set a password, Clerk, our sign-in provider, stores it, and we never see it. If you sign in with Apple, Google, or Facebook, Clerk receives your email address, your name, your profile photo if that service has one, and the ID that service uses for your account. Apple lets you share a private relay address instead of your real email and choose whether to share your name. Our own database keeps only your email address.
- **Trip checks.** The start and end you choose for each check: the place name, plus the coordinates, city, and state Google Places returns for it, or your device's location if you choose Current location. We store each check with what it found: the route's distance and highways, road conditions, incidents, weather, and the trip summary. These make up your History.
- **Location.** Your device's precise location, read once, only when you choose Current location for a trip check. See [Location data](#location-data) below.
- **Favorite trips.** The places you save, if you subscribe to TravelDot Plus.
- **Preferences.** The settings you choose, such as which navigation app opens your route.
- **Support messages.** The topic, your message, the reply-to email address you give, and your device's platform, operating system version, and app version.

We collect this information to:

- run trip checks and show your History and favorite trips
- operate your account and apply the free plan's monthly limit
- provide TravelDot Plus to subscribers
- respond to your support requests
- improve how TravelDot matches reports to roads and writes trip summaries, by studying trip checks in aggregate
- protect the security of our services

We do not use your Personal Information for advertising, we do not sell it, and we do not use it for profiling that makes decisions with legal or similarly significant effects on you.

<h2 id="location-data">Location data</h2>

If you choose Current location as the start or end of a trip, the app reads your device's location once and sends that coordinate with the trip check. The coordinate is saved with that check in your History, the same as a place you type, until your account is deleted. The app asks for location permission only while it is in use. It does not collect your location in the background or at any other time. You can turn off location access in your device settings, and typed places will continue to work.

We treat your device's precise location as sensitive information. We read it only after you allow location access and choose Current location, and we use it only to run that trip check and keep it in your History.

## Place search

Text you type into the start and end fields is sent from your device directly to Google's Places service, which returns matching places.

<h2 id="ai-trip-summaries">AI trip summaries</h2>

TravelDot uses OpenAI's models to write each trip summary. For each check, we send OpenAI:

- the city and state at each end of the trip
- the trip's distance and its drive time without traffic, as estimated by Google
- the Interstates, US highways, and Minnesota state highways on the route, with the mile range driven on each. Local roads are not included.
- the road conditions, incidents, and weather alerts the check found along those highways, and the current and hourly weather at each end

We do not send your name, email address, account identifier, street addresses, or coordinates.

OpenAI does not use API data to train its models unless we opt in, and we have not opted in. We ask OpenAI not to store each response, and OpenAI keeps abuse-monitoring logs for up to 30 days.

## Purchases

TravelDot Plus is sold through the Apple App Store and Google Play. Apple or Google processes your payment, and we never receive your payment card details. Our subscription provider, RevenueCat, and our own records keep the product, dates, price, and status of each purchase, renewal, and refund, linked to your account.

## Logging data

Our servers record information about each request your device makes. This includes your device's Internet Protocol ("IP") address, the time and date, the part of our services requested, the response, how long it took, and your account identifier when you are signed in. We use this information to operate our services and diagnose problems. Logs are stored with Grafana Cloud and kept for 14 days.

We do not use third-party analytics services in the app or on our website.

## Cookies

The TravelDot app does not use cookies. Our website does not set cookies of its own.

## Do Not Track disclosure

We do not track you across other companies' apps or websites, so there is no tracking for a Do Not Track signal to turn off. Do Not Track is a preference you can set in your web browser to tell websites that you do not want to be tracked.

<h2 id="service-providers">Service providers</h2>

We share Personal Information with the companies below only so they can perform a service for us. Customer data is not shared with third parties for promotional or marketing purposes.

We choose providers that protect your information at least as well as this policy does, and they may use it only to provide their service to us. The table below is the complete list of companies that receive your information today.

| Company                      | What it receives                                                            | Purpose                      |
| ---------------------------- | --------------------------------------------------------------------------- | ---------------------------- |
| Clerk                        | Email address, name if given, password or sign-in provider details          | Accounts and sign-in         |
| Apple, Google, Facebook      | What you approve when you sign in through them                              | Sign-in, if you choose it    |
| Google Places                | Text you type in the place fields, sent from your device                    | Place search                 |
| Google Routes                | A trip's start and end coordinates                                          | Finding the route            |
| Vaisala Xweather             | Points along the route                                                      | Weather along the trip       |
| OpenAI                       | Each end's city and state, the route's highways, and what the check found   | Writing the trip summary     |
| OpenRouter                   | The text of a trip summary, when a TravelDot Plus subscriber plays it aloud | Reading the summary aloud    |
| RevenueCat                   | Account identifier and purchase records                                     | TravelDot Plus subscriptions |
| Apple App Store, Google Play | Payment and subscription details                                            | Payment for TravelDot Plus   |
| Plunk                        | Your email address and support message text                                 | Sending email                |
| Grafana Cloud                | Server logs                                                                 | Operating our services       |
| Our cloud hosting provider   | The information we store, on servers we manage                              | Hosting                      |

## Communications

We email you only about your account or a request you made: replies to support messages and confirmation that your account has been deleted. We do not send newsletters or marketing email.

<h2 id="data-retention-and-deletion">Data retention and deletion</h2>

We keep your account, trip checks, favorite trips, and preferences until your account is deleted.

When you choose Delete account in the app, we schedule the deletion for 30 days later so you can change your mind. During those 30 days you can sign in, but you cannot check trips, and Keep my account cancels the deletion. After 30 days we email you a confirmation, delete your sign-in account at Clerk, and erase your account, trip checks, favorite trips, and preferences.

You can also ask us to delete your account and its data without the app by emailing [support@traveldot.app](mailto:support@traveldot.app) from the address on your account, with the subject "Delete my account". We schedule the deletion the same way, 30 days out. If you ask us to delete it sooner, we will do so as soon as we reasonably can once we confirm the account is yours. These steps are also at [traveldot.app/delete-account](/delete-account).

Some records remain after your account is deleted:

- A reduced copy of each trip check, used to count and study trip checks. It has no account identifier and no place names, and its coordinates are rounded to about 7 miles. We keep it indefinitely.
- Our log of AI summary requests, kept to review summary quality. Each entry includes the city and state at each end of the trip. After deletion it is no longer linked to your account. We keep it indefinitely.
- Purchase records at RevenueCat and in our database, kept as long as we need them for refunds, purchase history, accounting, and tax records.
- Server logs, which expire after 14 days.
- Support emails, as long as we need them to help you.

Deleting your account does not cancel a TravelDot Plus subscription. Cancel it in your device's subscription settings.

<h2 id="your-rights">Your rights</h2>

You can ask us to:

- confirm whether we process your Personal Information and give you a copy, in a format you can move to another service
- correct information that is wrong
- delete your information
- tell you the specific companies we disclosed it to, which the [Service providers](#service-providers) table lists

You can also opt out of the sale of your information, targeted advertising, and profiling. We do none of these, so there is nothing to turn off, but you may still ask.

To make a request, email [support@traveldot.app](mailto:support@traveldot.app). We may ask you to confirm that you own the account. We respond within 30 days, and we will not treat you differently for using these rights. Some state laws, including Minnesota's and California's, give their residents these rights. We offer them to everyone.

If we decline your request, you can appeal by replying to our answer or by emailing [support@traveldot.app](mailto:support@traveldot.app) with "Privacy appeal" in the subject. We answer appeals within 45 days. If you disagree with the result, you can contact your state attorney general, such as the Minnesota Attorney General's Office.

## Compliance with laws

We will disclose your Personal Information where required to do so by law or subpoena, or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement, to protect anyone's safety, or to protect the security or integrity of our services. If Northland Software LLC is sold or merged, your information may transfer to the new owner, and this policy will continue to cover it.

## Security

The security of your Personal Information is important to us. The app communicates with our servers over encrypted connections, and Clerk handles passwords so that we never see or store yours. Our database runs on a server that accepts no connections from the internet, and only Northland Software LLC can access our production systems. The service providers listed above keep their own copies of the information they receive, under their own security practices. However, security risk is inherent in all internet and information technologies, and we cannot guarantee the security of your Personal Information. If a breach affects your information, we will notify you as the law requires.

## Links to other sites

Our services link to services we do not operate. When you tap Continue on a trip, TravelDot opens Google Maps or Apple Maps. We have no control over, and assume no responsibility for, the content, privacy policies or practices of any third-party sites or services.

## Children's privacy

You must be at least 15 years old to use our services, and if you are under 18, you need permission from a parent or guardian. Our services are not directed to children under 13.

We do not knowingly collect Personal Information from anyone under 15. If you are a parent or guardian and learn that someone under 15 has created an account or given us Personal Information, contact us at [support@traveldot.app](mailto:support@traveldot.app) and we will delete the account and its information.

## Where your information is processed

TravelDot is available only in the United States, and we and our service providers process your information there.

## Changes to this privacy policy

We may update this Privacy Policy from time to time. When we do, we will change the date at the top of this page. If we make any material changes, we will notify you through the email address you have provided or a notice in the app before the changes take effect. Your continued use of our services after that constitutes your acceptance of the updated Privacy Policy.

<h2 id="contact-us">Contact us</h2>

Northland Software LLC is responsible for your information. Send questions about this policy, or requests about your information, to [support@traveldot.app](mailto:support@traveldot.app).
