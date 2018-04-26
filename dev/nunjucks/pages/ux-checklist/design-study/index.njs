{% extends "layout.njs" %}

{% block content %}
  <a href="https://www.pexels.com/photo/schedule-planning-startup-launching-7376/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Design the Study</h1>
  <h5 class="mb-5">Figure out what to test, how to test it, and with whom.</h3>

  <p>Once you have all the materials lined up, you need to move into figuring out what you’re actually testing. There are several methodologies to choose from, but the most commonly used is what’s known as the Think Aloud method. Equally as important is figuring out which features to test, and developing tasks to isolate those features. Trying to keep these as clear, concise, and small as possible (e.g. if you want to test your sign up flow, give users specific credentials to sign in with and leave 3rd party signup flows (Facebook, Google, etc.) for another task).</p>

  <p>One of the biggest mistakes I see teams make is leaving out the hypothesis. A test isn’t a test without a hypothesis. Generate your hypotheses after you define the tasks (so you don’t introduce bias), and be specific (e.g. 80% of users will complete this task within 30 seconds). Defining acceptance criteria helps provide hard, objective numbers to an otherwise soft, subjective practice.</p>

  <p>Don’t forget about incentives for participants, either. It’d be nice to think people will do this out of the good of their hearts, but more likely than not you’ll need to compensate them somehow. How much you should pay varies on how long/complex testing sessions are and how specialized your target user is. Nielsen Norman Group has a <a href="https://www.nngroup.com/articles/recruiting-test-participants-for-usability-studies/">really good overview</a>.</p>

  <div class="row" role="group" aria-label="Basic example">
    <div class="col">
      <a role="button" class="btn btn-lg btn-block btn-secondary mt-3 mp-track-click" href="/ux-checklist/gather-resources/" target="_self">&lt; Gather Resources</a>
    </div>
    <div class="col"></div>
    <div class="col">
      <a role="button" class="btn btn-lg btn-block btn-secondary mt-3 mp-track-click" href="/ux-checklist/prepare-study/" target="_self">Prepare the Study &gt;</a>
    </div>
  </div>

  <script type="text/javascript">
    document.addEventListener('DOMContentLoaded', () => {
      document.body.style.backgroundImage = "url('/img/blog/design.jpg')";
    });
  </script>
{% endblock %}

