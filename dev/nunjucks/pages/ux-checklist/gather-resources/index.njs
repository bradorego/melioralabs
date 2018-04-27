{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}
{% import "macros/prevNext.njs" as prevNext %}
{% import "macros/changeBg.njs" as bg %}

{% block content %}
  <a href="https://www.pexels.com/photo/top-view-photography-of-smartphones-and-papers-on-white-surface-926987/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Gather Resources</h1>
  <h5 class="mb-3">Make sure you have everything you need to get started, including people resources, paperwork, and facilities.</h5>

  {{ figure.insertShare("/img/blog/ux-checklist/1-gather.jpg", "View Full Size", "/img/blog/ux-checklist/1-gather.jpg", "https://melioralabs.com/ux-checklist/gather-resources/") }}

  <p>Before you even get around to figuring out what to test and how, you need to make sure you have the right facilities. Being able to record the entire testing room (primarily so you can see user’s reactions outside of the software and without being too intrusive) is critical, and having a dedicated, private space (even if it’s normally just a meeting room) is also important.</p>

  <p>While we recommend against it (it's just one extra layer of complexity), it's possible to create a movable testing setup that can be brought to any room. At MelioraLabs, we have that capability (in case you absolutely need to do an ethnographic/in-situ study), but that's not our main focus.</p>

  <p>Don’t forget about paperwork, too - consent forms, NDAs (if you’re showing anything confidential), and video release forms (letting people know you’re recording them for research purposes). You can put all of this into one form so the user isn’t overwhelmed with things to sign; usability.gov actually has a <a href="https://www.usability.gov/how-to-and-tools/resources/templates/consent-recording-release-form-adult.html">really nice template</a> you can adapt.</p>

  <p>It's important to think about resources beyond the physical needs. What people resources are you going to need? Whose time and energy will be supporting this? You may need test accounts, funding, time away from your other duties, etc., and getting whatever stakeholders involved aligned on those needs is important. We recommend having a separate WiFi network for users to connect to when testing as well, which will probably need some support.</p>

  {{ prevNext.buttons(
    "/ux-checklist/",
    "Usability Research Checklist",
    "/ux-checklist/design-study/",
    "Design the Study") }}

  {{ bg.change('/img/blog/ux-checklist/resources.jpg') }}

{% endblock %}

