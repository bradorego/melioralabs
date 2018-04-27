{% extends "layout.njs" %}
{% import "macros/changeBg.njs" as bg %}

{% block content %}
  <h1 class="mt-0">Well, this is embarrassing.</h1>
  <p>Looks like whatever you were looking for either isn't here anymore or never existed in the first place.</p>
  <a href="/" target="_self" role="button" class="btn btn-block btn-secondary btn-lg">Go Home</a>


  {{ bg.change('https://media.giphy.com/media/Ub8XEam5vXbMY/giphy.gif') }}
{% endblock %}
