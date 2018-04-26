{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}
{% import "macros/prevNext.njs" as prevNext %}

{% block content %}
  <a href="https://www.pexels.com/photo/man-wearing-black-and-white-stripe-shirt-looking-at-white-printer-papers-on-the-wall-212286/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Analyze Results</h1>
  <h5 class="mb-3">Data is just data at the end of the day. It needs analysis to bring it to life.</h3>

  {{ figure.insertShare("/img/blog/ux-checklist/6-analyze.jpg", "View Full Size", "/img/blog/ux-checklist/6-analyze.jpg", "https://melioralabs.com/ux-checklist/analyze-results/") }}


  <p>Just as a task without a hypothesis is incomplete, gathering all of this data without analyzing it doesn’t serve much good, either. There are many ways to slice, summarize, group, and digest data, and the best way to do so will depend on exactly what’s being tested (are you comparing two designs for efficiency? are you testing a new design for completion?), but there a few general ways to organize data.</p>

  <p>The reason we set up cameras earlier is so you can go back and get the fine-grained data necessary for analysis. Depending on the fidelity of the software you’re testing (and whether or not you actually have access to it), you can set up some automated tools to capture events, but you’re still going to want to go back and watch every video so you can pick out relevant quotes and overall trends. Nothing is more compelling than hearing the same sentiment come out of a dozen participant’s mouths.</p>

  <p>On top of the analysis, you should offer recommendations as well. As a researcher, your job may not necessarily be to design a better solution, but pointing out areas that tripped users up and some of the common mistakes they made can help direct the design/development team. Doing so also bolsters justification for the expense of testing; I’ve saved companies millions of dollars by spending tens of thousands on usability testing.</p>


  {{ prevNext.buttons(
    "/ux-checklist/run-study/",
    "Run Study Sessions",
    "/ux-checklist/aftermath/",
    "Aftermath") }}

  <script type="text/javascript">
    document.addEventListener('DOMContentLoaded', () => {
      document.body.style.backgroundImage = "url('/img/blog/ux-checklist/analyze.jpg')";
    });
  </script>
{% endblock %}

