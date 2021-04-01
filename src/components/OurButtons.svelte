<script>
  import { domState, codeNotes } from "../js/store";

  let newStep = {
    subtitle: "",
    desc: "",
    code: "",
  };
  function tumiraEvent() {
    if ($domState.showTitleForm) {
      console.log($codeNotes);
      console.log("desc form");
      $codeNotes = [...$codeNotes[0].steps, newStep];
      $domState.showTitleForm = false;
      $domState.showTitleContent = true;
      $domState.showDescForm = true;
      
    } else if ($domState.showDescForm) {
      console.log("code form");

      $domState.showDescForm = false;
      $domState.showDescContent = true;
      $domState.showCodeForm = true;
    } else if ($domState.showCodeForm) {
      console.log("save");
      $domState.showDescForm = false;
      $domState.showCodeContent = true;
      $domState.showCodeForm = false;
    }
  }
</script>

<div class="fab">
  {#if $domState.showTitleForm}
    <div id="subject-btn">
      <button
        class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
        on:click={tumiraEvent}
      >
        <i class="material-icons">subject</i>
      </button>
    </div>
  {/if}

  {#if $domState.showDescForm}
    <div id="code-btn">
      <button
        class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
        on:click={tumiraEvent}
      >
        <i class="material-icons">code</i>
      </button>
    </div>
  {/if}

  {#if $domState.showCodeForm}
    <div id="save-btn">
      <button
        class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
        on:click={tumiraEvent}
      >
        <i class="material-icons">save</i>
      </button>
    </div>
  {/if}
</div>
