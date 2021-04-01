<script>
  import { codeNotes } from "../js/store";
  export let step;
</script>

<div>
  <div id="desc-form-btn" class="edit-btn">
    <button
      class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
    >
      <i class="material-icons">create</i>
    </button>
  </div>

  <h3>{$codeNotes[0].steps[step].subtitle}</h3>
  <h4>{$codeNotes[0].steps[step].desc}</h4>
</div>
