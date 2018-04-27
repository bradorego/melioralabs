{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}
{% import "macros/prevNext.njs" as prevNext %}
{% import "macros/changeBg.njs" as bg %}

{% block content %}
  <a href="https://www.pexels.com/photo/time-lapse-photography-of-people-walking-on-pedestrian-lane-842339/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Recruit Participants</h1>
  <h5 class="mb-3">Often the hardest part; you need real, unbiased people to test the product.</h5>

  {{ figure.insertShare("/img/blog/ux-checklist/4-recruit.jpg", "View Full Size", "/img/blog/ux-checklist/4-recruit.jpg", "https://melioralabs.com/ux-checklist/recruit-participants/") }}

  <p>This might be 4th on the list, but you should really start this as soon as possible, as it can be a serious impediment to progress. Once you’ve laid out who you’ll be testing you should start working on a recruitment strategy, including a participant screener. Put the screener out there as many places as you can - local forums/subreddits, Craigslist, meetups/user groups, etc. You’re going to need many more people to fill out the screener than you’ll need participants — you’ll lose probably about half at each step (screening, scheduling, showing up). We've already touched on incentives, but a good incentive is the most powerful tool in your arsenal to combat drop-offs/no-shows.</p>

  <p>Once you have the screener set up and in place, you need to figure out how participants will sign up for a timeslot. <a href="https://calendly.com/">Calendly</a> is excellent for this, as is <a href="http://doodle.com/">Doodle</a> (though it requires a little more finagling). You’ll also need to set up reminders for participants, and provide them any instructions (e.g. directions to the testing facility).</p>

  <p>Another extremely important detail is to confirm with participants the location and time of the session, and to give them the ability to reschedule if need be. A 24-hour reminder is a great place to do this. Phone calls are better than emails, but ultimately you should do both. Emails are easy to miss, but also easy to provide the necessary information, and the phone call is a great way to remind users about that email.</p>

  <p>Make sure you include your address (including office/suite number) at all times, including when users sign up for sessions and in the reminder email. Include relevant information to help them get there, including nearby public transit options or parking locations. A small touch can go a long way.</p>

  {{ prevNext.buttons(
    "/ux-checklist/prepare-study/",
    "Prepare the Study",
    "/ux-checklist/run-study/",
    "Run Study Sessions") }}

  {{ bg.change('/img/blog/ux-checklist/participants.jpg') }}

{% endblock %}

