<div class="price-form">
  <form class="card text-dark" id="ml-form">
    <div class="card-body">
      <div class="form-group">
        <h4>Sessions:<output id="part-output">10</output><span id="part-plus">+</span></h4>
        <input id="participants" type="range" step="1" min="1" max="30" value="10" />
      </div>
      <div class="form-check mp-track-click" data-mp-value="lab">
          <input type="checkbox" class="form-check-input" id="lab" disabled checked>
        <label class="form-check-label" for="lab">Lab Rental ($25 per, required)</label>
      </div>
      <div class="form-check mp-track-click" data-mp-value="design">
        <input type="checkbox" class="form-check-input" id="design">
        <label class="form-check-label" for="design">Study Design ($100 per)</label>
      </div>
      <div class="form-check mp-track-click" data-mp-value="recruit">
        <input type="checkbox" class="form-check-input" id="recruit">
        <label class="form-check-label" for="recruit">Recruitment Management ($50 per)</label>
      </div>
      <div class="form-check mp-track-click" data-mp-value="session">
        <input type="checkbox" class="form-check-input" id="session">
        <label class="form-check-label" for="session">Run Study Session ($25 per)</label>
      </div>
      <div class="form-check mp-track-click" data-mp-value="analysis">
        <input type="checkbox" class="form-check-input" id="analysis">
        <label class="form-check-label" for="analysis">Analyze Results ($100 per)</label>
      </div>
    </div>
    <div class="card-footer">
      <h4>Total: <output id="total">$250</output></h4>
    </div>
    <div class="card-footer">
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
    </div>
  </form>

  <button class="btn btn-lg btn-block btn-secondary mt-3 mp-track-click" data-mp-value="pricing-submit" id="ml-submit">Get Started</button>
  <div class="success"></div>
</div>
