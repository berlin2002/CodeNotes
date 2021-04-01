<script>
  import AppWrapper from "../components/AppWrapper.svelte";
</script>

<div class="mdl-layout mdl-js-layout">
  <header class="mdl-layout__header mdl-layout__header--scroll">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Title</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer" />
      <!-- Navigation -->
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="./index.html">Home</a>
        <a class="mdl-navigation__link" href="./app-notes.html">App Notes</a>
        <a class="mdl-navigation__link" href="./code-notes.html">Code Notes</a>
        <a class="mdl-navigation__link" href="./contacts.html">Contacts</a>
        <a class="mdl-navigation__link" href="./notes.html">Notes</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="./index.html">Home</a>
      <a class="mdl-navigation__link" href="./app-notes.html">App Notes</a>
      <a class="mdl-navigation__link" href="./code-notes.html">Code Notes</a>
      <a class="mdl-navigation__link" href="./contacts.html">Contacts</a>
      <a class="mdl-navigation__link" href="./notes.html">Notes</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
      <AppWrapper />
    </div>
  </main>
</div>
