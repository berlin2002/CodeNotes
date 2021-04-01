<script>
  import Test from "./components/Test.svelte";
  import Navigation from "./Layouts/Navigation.svelte";
  function yaw() {
    console.log("Ywwa");
  }
</script>

<Navigation on:descform={yaw} />
<!-- <Test /> -->
