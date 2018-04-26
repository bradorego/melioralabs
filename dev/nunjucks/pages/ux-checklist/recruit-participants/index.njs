{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}
{% import "macros/prevNext.njs" as prevNext %}

{% block content %}
  <a href="https://www.pexels.com/photo/time-lapse-photography-of-people-walking-on-pedestrian-lane-842339/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Recruit Participants</h1>
  <h5 class="mb-3">Often the hardest part; you need real, unbiased people to test the product.</h3>

  {{ figure.insertShare("/img/blog/ux-checklist/4-recruit.jpg", "View Full Size", "/img/blog/ux-checklist/4-recruit.jpg", "https://melioralabs.com/ux-checklist/recruit-participants/") }}

  <p>This might be 4th on the list, but you should really start this as soon as possible, as it can be a serious impediment to progress. Once you’ve laid out who you’ll be testing you should start working on a recruitment strategy, including a participant screener. Put the screener out there as many places as you can - local forums/subreddits, Craigslist, meetups/user groups, etc. You’re going to need many more people to fill out the screener than you’ll need participants — you’ll lose probably about half at each step (screening, scheduling, showing up).</p>

  <p>One of the best tools in your arsenal to combat dropoff rates is how you incentivize participants. The more of an incentive, the less likely you are to have users drop out of the process or no-show, though there's a point of diminishing returns. If you're paying too much (or using something like free membership to your service), you're going to attract users for the wrong reasons: notably, their sole interest will be in what you're giving. <a href="https://www.nngroup.com/articles/recruiting-test-participants-for-usability-studies/">Nielsen/Norman Group</a> has an interesting summary of incentives and recruiting, though you can probably get by on the rule-of-thumb of $.50-$1 per minute of test time. You're much better off overpaying than dealing with the headache of no-shows. </p>

  <p>Once you have the screener set up and in place, you need to figure out how participants will sign up for a timeslot. <a href="https://calendly.com/">Calendly</a> is excellent for this, as is <a href="http://doodle.com/">Doodle</a> (though it requires a little more finagling). You’ll also need to set up reminders for participants, and provide them any instructions (e.g. directions to the testing facility).</p>

  {{ prevNext.buttons(
    "/ux-checklist/prepare-study/",
    "Prepare the Study",
    "/ux-checklist/run-study/",
    "Run Study Sessions") }}

  <script type="text/javascript">
    document.addEventListener('DOMContentLoaded', () => {
      document.body.style.backgroundImage = "url('/img/blog/ux-checklist/participants.jpg')";
    });
  </script>
{% endblock %}

