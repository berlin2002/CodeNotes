<script>
  import { codeNotes } from "../js/store";
  export let step;
</script>

<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
  <input
    class="desc__subtitle-input mdl-textfield__input"
    type="text"
    id="subtitle-field"
    bind:value={$codeNotes[0].steps[step].subtitle}
  />
  <label class="mdl-textfield__label" for="subtitle-field">Subtitle...</label>
</div>

<div class="mdl-textfield mdl-js-textfield">
  <textarea
    class="desc__content-input mdl-textfield__input"
    type="text"
    rows="3"
    id="content-field"
    bind:value={$codeNotes[0].steps[step].desc}
  />
  <label class="mdl-textfield__label" for="content-field">Content...</label>
</div>
