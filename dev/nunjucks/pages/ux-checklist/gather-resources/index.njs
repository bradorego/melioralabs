{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}

{% block content %}
  <a href="https://www.pexels.com/photo/top-view-photography-of-smartphones-and-papers-on-white-surface-926987/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Gather Resources</h1>
  <h5 class="mb-3">Make sure you have everything you need to get started, including people resources, paperwork, and facilities.</h3>

  {{ figure.insertShare("/img/blog/ux-checklist/1-gather.jpg", "View Full Size", "/img/blog/ux-checklist/1-gather.jpg", "https://melioralabs.com/ux-checklist/gather-resources/") }}

  <p>Before you even get around to figuring out what to test and how, you need to make sure you have the right facilities. Being able to record the entire testing room (primarily so you can see user’s reactions outside of the software and without being too intrusive) is critical, and having a dedicated, private space (even if it’s normally just a meeting room) is also important.</p>

  <p>We toyed with the idea of creating a mobile testing setup that we could bring to any room, and while it’s doable, I don’t recommend it.</p>

  <p>Don’t forget about paperwork, too - consent forms, NDAs (if you’re showing anything confidential), and video release forms (letting people know you’re recording them for research purposes). You can put all of this into one form so the user isn’t overwhelmed with things to sign; usability.gov actually has a <a href="https://www.usability.gov/how-to-and-tools/resources/templates/consent-recording-release-form-adult.html">really nice template</a> you can adapt.</p>

  <div class="row" role="group" aria-label="Basic example">
    <div class="col">
      <a role="button" class="btn btn-lg btn-block btn-secondary mt-3 mp-track-click" href="/ux-checklist/" target="_self">&lt; Usability Research Checklist</a>
    </div>
    <div class="col"></div>
    <div class="col">
      <a role="button" class="btn btn-lg btn-block btn-secondary mt-3 mp-track-click" href="/ux-checklist/design-study/" target="_self">Design the Study &gt;</a>
    </div>
  </div>

  <script type="text/javascript">
    document.addEventListener('DOMContentLoaded', () => {
      document.body.style.backgroundImage = "url('/img/blog/ux-checklist/resources.jpg')";
    });
  </script>
{% endblock %}

