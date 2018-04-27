{% extends "layout.njs" %}
{% import "macros/figure.njs" as figure %}
{% import "macros/prevNext.njs" as prevNext %}
{% import "macros/changeBg.njs" as bg %}

{% block content %}
  <a href="https://www.pexels.com/photo/background-beverage-breakfast-brown-414645/" class="photo-credit">Photo Credit</a>
  <h1 class="my-0">Aftermath</h1>
  <h5 class="mb-3">How to reflect on your work and prepare it for presentation.</h5>

  {{ figure.insertShare("/img/blog/ux-checklist/7-aftermath.jpg", "View Full Size", "/img/blog/ux-checklist/7-aftermath.jpg", "https://melioralabs.com/ux-checklist/aftermath/") }}

  <p>If you have hopes of ever doing this again, you’ll need to find a way to make your findings (and recommendations) presentable and actionable. Usability research for its own sake is a wonderful thing, but more likely than not there are stakeholders who allocated funds for this and they’ll want some sort of return. That return comes in the analysis and presentation of what you found.</p>

  <p>The most immediate value is obviously to the product team responsible for what was tested. Work closely with them to walk through what was found and what can be done about it, and if possible, sit with them and help prioritize their next steps. There’s also value in reporting findings to higher-up stakeholders, as they’ll want to see the summary of what was found and what’s being done about it.</p>

  <p>Be mindful of who you're presenting to and what information is relevant to them. Product teams are going to want a lot more detail than executives will. Providing a high-level summary (e.g. how many participants were run, what the findings were, what suggestions are being made) as well as specifics (success rates, average time per task, etc.) is important. You can even offer to let everyone see the raw footage, though in our 7 years of business we've yet to see one client take us up on that offer.</p>

  <p>A fringe benefit to doing research like this is the opportunity to publicize your findings. If you’re studying something that can be generalized, doing so in a whitepaper or a blog post can help the community and start to make a name for the brand as one that cares about users. If nothing else, letting your current users/customers know that you’re working to make the product better should earn some brownie points and can make subsequent recruitment efforts easier (especially if you need to test users familiar with the product/brand).</p>

  {{ prevNext.buttons(
    "/ux-checklist/analyze-results/",
    "Analyze Results",
    "/",
    "Get Started with MelioraLabs") }}

  <hr />
  <p>Now that you know how to successfully design and run a usability session, check out how MelioraLabs can help you achieve your research goals.</p>
  <a role="button" class="mt-5 btn btn-lg btn-block btn-secondary mt-3 mp-track-click" href="/" target="_self">Get Started with MelioraLabs</a>

  {{ bg.change('/img/blog/ux-checklist/report.jpg') }}
{% endblock %}

