{% macro insert(imageUrl, caption, sourceUrl) %}
  <figure class="mb-3">
    <img src="{{imageUrl}}">
    <figcaption>
      <a href="{{sourceUrl}}">{{caption}}</a>
    </figcaption>
  </figure>
{% endmacro %}

{% macro insertShare(imageUrl, caption, sourceUrl, shareUrl) %}
  <figure class="mb-3">
    <img src="{{imageUrl}}">
    <figcaption>
      <a href="https://www.linkedin.com/shareArticle?url={{shareUrl}}&title=MelioraLabs Blog Post&mini=true">Share on LinkedIn</a>
      <a href="https://twitter.com/intent/tweet?text=Check this out!&url={{shareUrl}}&via=melioralabs" data-size="large">Tweet this!</a>
      <a href="{{sourceUrl}}">{{caption}}</a>
    </figcaption>
  </figure>
{% endmacro %}
