{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}
{% import "macros/prevNext.njs" as prevNext %}
{% import "macros/changeBg.njs" as bg %}

{% block content %}
  <a href="https://www.pexels.com/photo/macbook-air-apple-pen-notes-7377/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Prepare the Study</h1>
  <h5 class="mb-3">Make sure you have everything you need for sessions to run smoothly.</h5>

  {{ figure.insertShare("/img/blog/ux-checklist/3-prepare.jpg", "View Full Size", "/img/blog/ux-checklist/3-prepare.jpg", "https://melioralabs.com/ux-checklist/prepare-study/") }}

  <p>Now that you have everything planned out, you need to actually go out and do the prep work. Print out all the materials you’ll need (and some extras, just in case) ahead of time. Develop and write out instructions for the facilitators — even if you’re running it yourself, this is a really good exercise in making sure you have a consistent protocol with each participant in order to minimize bias.</p>

  <p>It's important to actually go through and give the system a dry run of what you’re asking users to do to ensure everything flows organically and there isn't any confusion. Ideally, get someone not directly involved in research (or the product at all) to run through the tasks. You might need to set up specific test accounts for participants as well, and this is an excellent time to discover that (instead of the day of your first session).</p>

  <p>You may discover, during the pilot test, that there are certain tasks that are particularly challenging. While it's good to let users struggle and see how they react, leaving your users frustrated and at an impasse can be detrimental. To minimize the amount of interference by your facilitator (i.e. the participant getting stuck and needing a walkthrough), you can prepare help guides that the user can elect to look through. For products that are in production (or close to it), this doubles as a good way to test the efficacy of user manuals.</p>

  <p>Make sure you have whatever incentives you’re offering (check, cash, gift card) lined up, and don’t forget to get any snacks/refreshments (which I highly recommend doing, especially if your session is longer than 30 minutes or anywhere near lunchtime/midday) you might be offering to participants as well. This might seem gratuitous, but your goal is to make this experience as pleasant as you can in order to get the most out of these sessions. Be as accommodating as possible.</p>

  {{ prevNext.buttons(
    "/ux-checklist/design-study/",
    "Design the Study",
    "/ux-checklist/recruit-participants/",
    "Recruit Participants") }}

  {{ bg.change('/img/blog/ux-checklist/prepare.jpg') }}
{% endblock %}

