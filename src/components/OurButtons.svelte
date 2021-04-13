<script>
  import { domState, codeNotes } from "../js/store";

  let activeIndex = 0;
  function tumiraEvent() {
    if ($domState.showTitleForm || $domState.showAddDesc) {
      let newStep = {
        subtitle: "",
        desc: "",
        code: "",
        showDForm: false,
        showDContent: false,
        showCForm: false,
        showCContent: false,
      };
      console.log("desc form");
      console.log(newStep);
      console.log($codeNotes[0]);
      $codeNotes[0].steps = [...$codeNotes[0].steps, newStep];
      activeIndex = $codeNotes[0].steps.length - 1;
      console.log(activeIndex);
      $domState.showTitleForm = false;
      $domState.showTitleContent = true;
      $codeNotes[0].steps[activeIndex].showDForm = true;
      $domState.showAddDesc = false;
      console.log($codeNotes[0]);
    } else if ($codeNotes[0].steps[activeIndex].showDForm) {
      console.log("code form");
      $codeNotes[0].steps[activeIndex].showDForm = false;
      $codeNotes[0].steps[activeIndex].showDContent = true;
      $codeNotes[0].steps[activeIndex].showCForm = true;
    } else if ($codeNotes[0].steps[activeIndex].showCForm) {
      console.log("save");
      $codeNotes[0].steps[activeIndex].showDForm = false;
      $codeNotes[0].steps[activeIndex].showCContent = true;
      $codeNotes[0].steps[activeIndex].showCForm = false;
      $domState.showAddDesc = true;
    }
  }
</script>

{#if $domState.showFabs}
  <div class="fab">
    {#if $domState.showAddDesc}
      <div id="subject-btn">
        <button
          class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          on:click={tumiraEvent}
        >
          <i class="material-icons">subject</i>
        </button>
      </div>
    {/if}
    {#if $codeNotes[0].steps.length > 0}
      {#if $codeNotes[0].steps[activeIndex].showDForm}
        <div id="code-btn">
          <button
            class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
            on:click={tumiraEvent}
          >
            <i class="material-icons">code</i>
          </button>
        </div>
      {/if}

      {#if $codeNotes[0].steps[activeIndex].showCForm}
        <div id="save-btn">
          <button
            class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
            on:click={tumiraEvent}
          >
            <i class="material-icons">save</i>
          </button>
        </div>
      {/if}
    {/if}
  </div>
{/if}
