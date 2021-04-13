<script>
  import NoteBody from "../components/NoteBody.svelte";
  import TitleForm from "../components/TitleForm.svelte";
  import TitleContent from "../components/TitleContent.svelte";
  import OurButtons from "../components/OurButtons.svelte";
  import { codeNotes, domState } from "../js/store";
  let noteIndex = 0;
  let newTitle = {
    title: "",
    steps: [],
  };
  function toggleTitle() {
    $codeNotes = [...$codeNotes, newTitle];
    console.log($codeNotes);
    $domState.showTitleForm = true;
    $domState.showFabs = true;
    $domState.showAdd = false;
    $domState.showAddDesc = true;
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
        {#if $domState.showTitleContent}
          {#each $codeNotes[noteIndex].steps as step, index}
            <NoteBody step={index} />
          {/each}
        {/if}
      </div>

      <div class="note-footer">
        <!-- uvbu -->
        <OurButtons />
      </div>
      <div class="bottom-bar">
        {#if $domState.showAdd}
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
