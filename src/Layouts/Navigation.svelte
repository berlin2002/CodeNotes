<script>
  import AppWrapper from "../components/AppWrapper.svelte";
  import { Link, Router, Route } from "svelte-routing";
  import Home from "../pages/Home.svelte";
  import CodeNotes from "../pages/CodeNotes.svelte";
  import Contacts from "../pages/Contacts.svelte";
  import AppNotes from "../pages/AppNotes.svelte";
  import Notes from "../pages/Notes.svelte";
</script>

<Router>
  <div class="mdl-layout mdl-js-layout">
    <header class="mdl-layout__header mdl-layout__header--scroll">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Title</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer" />
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <Link class="mdl-navigation__link" to="/">Home</Link>
          <Link class="mdl-navigation__link" to="/app-notes">App Notes</Link>
          <Link class="mdl-navigation__link" to="/code-notes">Code Notes</Link>
          <Link class="mdl-navigation__link" to="/contacts">Contacts</Link>
          <Link class="mdl-navigation__link" to="/notes">Notes</Link>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <Link class="mdl-navigation__link" to="/">Home</Link>
        <Link class="mdl-navigation__link" to="/app-notes">App Notes</Link>
        <Link class="mdl-navigation__link" to="/code-notes">Code Notes</Link>
        <Link class="mdl-navigation__link" to="/contacts">Contacts</Link>
        <Link class="mdl-navigation__link" to="/notes">Notes</Link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <Route path="/" component={Home} />
        <Route path="/code-notes" component={CodeNotes} />
        <Route path="/app-notes" component={AppNotes} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/notes" component={Notes} />
        <!-- <AppWrapper /> -->
      </div>
    </main>
  </div>
</Router>
