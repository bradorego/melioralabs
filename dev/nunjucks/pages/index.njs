{% extends "layout.njs" %}

{% block content %}
  <section>
    {% include "partials/main-text.njs" %}
  </section>
  <section>
    {% include "partials/price-form.njs" %}
  </section>
  <section>
    {% include "partials/clients.njs" %}
  </section>
  <section>
    {% include "partials/faq.njs" %}
  </section>
  <section>
    {% include "partials/cta.njs" %}
  </section>
{% endblock %}
