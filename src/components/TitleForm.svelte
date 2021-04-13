<script>
  import { codeNotes } from "../js/store";

  function mInit(node) {
    console.log(node);
  }
</script>

<div
  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
  use:mInit
>
  <input
    class="title__input mdl-textfield__input"
    type="text"
    id="input-title"
    bind:value={$codeNotes[0].title}
  />
  <label class="mdl-textfield__label" for="input-title">Title...</label>
  {$codeNotes[0].title}
</div>
