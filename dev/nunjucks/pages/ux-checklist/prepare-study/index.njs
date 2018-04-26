{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}
{% import "macros/prevNext.njs" as prevNext %}

{% block content %}
  <a href="https://www.pexels.com/photo/macbook-air-apple-pen-notes-7377/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Prepare the Study</h1>
  <h5 class="mb-3">Make sure you have everything you need for sessions to run smoothly.</h3>

  {{ figure.insertShare("/img/blog/ux-checklist/3-prepare.jpg", "View Full Size", "/img/blog/ux-checklist/3-prepare.jpg", "https://melioralabs.com/ux-checklist/prepare-study/") }}

  <p>Now that you have everything planned out, you need to actually go out and do the prep work. Print out all the materials you’ll need (and some extras, just in case) ahead of time. Develop and write out instructions for the facilitators — even if you’re running it yourself, this is a really good exercise in making sure you have a consistent protocol with each participant.</p>

  <p>Make sure you actually go through and give the system a dry run of what you’re asking users to do. You might need to set up specific test accounts for participants as well.</p>

  <p>Make sure you have whatever incentives you’re offering (check, cash, gift card) lined up, and don’t forget to get any snacks/refreshments (which I highly recommend doing, especially if your session is longer than 30 minutes or anywhere near lunchtime/midday) you might be offering to participants as well..</p>


  {{ prevNext.buttons(
    "/ux-checklist/design-study/",
    "Design the Study",
    "/ux-checklist/recruit-participants/",
    "Recruit Participants") }}

  <script type="text/javascript">
    document.addEventListener('DOMContentLoaded', () => {
      document.body.style.backgroundImage = "url('/img/blog/ux-checklist/prepare.jpg')";
    });
  </script>
{% endblock %}

