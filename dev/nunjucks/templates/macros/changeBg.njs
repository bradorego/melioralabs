{% macro change(bgUrl) %}
  <script type='text/javascript'>
    document.addEventListener('DOMContentLoaded', () => {
      document.body.style.backgroundImage = "url('{{bgUrl}}')";
    });
  </script>
{% endmacro %}
