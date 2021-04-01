<script>
  import NoteBody from "./NoteBody.svelte";
  import TitleForm from "./TitleForm.svelte";
  import TitleContent from "./TitleContent.svelte";
  import OurButtons from "./OurButtons.svelte";
  import { codeNotes, domState } from "../js/store";
  let noteIndex = 0;
  let newTitle = {
    title: "",
    steps: [],
  };
  function toggleTitle() {
    $codeNotes = [...$codeNotes, newTitle];
    $domState.showTitleForm = true;
  }
</script>

<div class="section">
  <div class="container">
    <h1>Code Notes</h1>
    <div class="app-wrapper">
      <div class="note-title">
        <div class="note-title__title">
          <div class="title__form-div">
            {#if $domState.showTitleForm}
              <TitleForm />
            {/if}
          </div>
          <div class="title__content-div">
            {#if $domState.showTitleContent}
              <TitleContent />
            {/if}
          </div>
        </div>
      </div>
      <div class="note-body">
        {#if $domState.showDescForm}
          {#each $codeNotes[noteIndex].steps as step, index}
            <NoteBody step={index} />
          {/each}
        {:else}
          hamuna chinhu mu store
        {/if}
      </div>

      <div class="note-footer">
        <!-- uvbu -->
        <OurButtons />
      </div>
      <div class="bottom-bar">
        {#if !$domState.showTitleForm}
          <div id="add-btn">
            <button
              class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
              on:click={toggleTitle}
            >
              <i class="material-icons">add</i>
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
