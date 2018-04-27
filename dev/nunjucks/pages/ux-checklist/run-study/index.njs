{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}
{% import "macros/prevNext.njs" as prevNext %}
{% import "macros/changeBg.njs" as bg %}

{% block content %}
  <a href="https://www.pexels.com/photo/computer-desk-electronics-indoors-374074/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Run Study Sessions</h1>
  <h5 class="mb-3">This is where the magic happens. Bring real people into the lab to interact with the product.</h5>

  {{ figure.insertShare("/img/blog/ux-checklist/5-run.jpg", "View Full Size", "/img/blog/ux-checklist/5-run.jpg", "https://melioralabs.com/ux-checklist/run-study/") }}

  <p>Now comes the fun part. You’ve done all the design and prep work; you’ve found, screened, and scheduled your participants; now you actually have to run the study. This might seem like the easy part but it’s far from it.</p>

  <p>Part of your facilitator protocol should include getting there early to make sure all the materials are set up — cameras are charged, testing device is reset to whatever starting state you’ve defined, paperwork and refreshments are ready. Make sure to disable all notifications on the testing device and, as much as possible, remove/hide all other functionality (including default apps; put them all in a group and put them on a different screen than home). You want to minimize distractions and interruptions. You should also ensure your facilitators disable all notifications. Even a vibrating phone can distract users.</p>

  <p>There’s a certain art to being a testing facilitator which I can’t cover in full here, but basically your goal is to answer as few questions as possible during the testing session. Let participants ask questions during briefing and debriefing, and let them know those are their times to ask. If you see them getting stuck, let them struggle. Don’t intervene until they feel like they’ve exhausted all of their options, and if you don’t think they’ve tried everything (i.e. suffered enough), you can politely urge them to keep trying other things until they’ve actually stagnated. This is also where the aforementioned user manual/help guide can come in handy.</p>

  <p>I’ve seen some really interesting and novel solution attempts in user testing, but I’ve also come across instances where users got the system into a new error state that even the engineering team hadn’t seen before. You’ll know when to step in. The easiest way to ruin a usability testing session is to intervene too often/too soon.</p>

  <p>Also, DO NOT, under any circumstance, attempt to take notes while facilitating. You’re recording these sessions for a reason. You can have a live note-taker as well, but people generally don’t like being watched, so having someone else in the room adds pressure. If you’re going to dedicate two person-hours (or half-hours) to this, you’re much better off having the second hour spent watching the video later.</p>

  {{ prevNext.buttons(
    "/ux-checklist/recruit-participants/",
    "Recruit Participants",
    "/ux-checklist/analyze-results/",
    "Analyze Results") }}

  {{ bg.change('/img/blog/ux-checklist/run.jpg') }}
{% endblock %}

