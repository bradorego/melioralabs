{% include "partials/page-head.njs" %}
<body id="page-top" class="index" data-mp-target="body">

  <div class="overlay"></div>
  <div class="masthead h-100">
    <div class="masthead-bg container">
      <div class="row h-100 p-5">
        <div class="col-12 my-auto">
          <div class="masthead-content text-white">
            {% block content %} {% endblock %}
          </div>
        </div>
      </div>
    </div>
  </div>


  {% include "partials/social.njs" %}
  {% include "partials/page-js.njs" %}
</body>
</html>
