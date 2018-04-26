{% macro buttons() %}

{% endmacro %}

{% macro buttons2(prevUrl, prevText, nextUrl, nextText) %}
  <div class="row" role="group" aria-label="Basic example">
    <div class="col">
      <a role="button" class="btn btn-lg btn-block btn-secondary mt-3 mp-track-click" href="{{prevUrl}}" target="_self">&lt; {{prevText}}</a>
    </div>
    <div class="col-xs"></div>
    <div class="col">
      <a role="button" class="btn btn-lg btn-block btn-secondary mt-3 mp-track-click" href="{{nextUrl}}" target="_self">{{nextText}} &gt;</a>
    </div>
  </div>
{% endmacro %}
