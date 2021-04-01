<script>
  import { codeNotes } from "../js/store";
  export let step;
</script>

<div class="mdl-textfield mdl-js-textfield">
  <textarea
    class="snippet__code-input mdl-textfield__input"
    type="text"
    rows="3"
    id="snippet-field"
    bind:value={$codeNotes[0].steps[step].code}
  />
  <label class="mdl-textfield__label" for="snippet-field">Code...</label>
</div>
