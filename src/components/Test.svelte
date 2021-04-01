<script>
  let myItem = "";
  let myInput;
  let myList = [];

  function grList() {
    myList = [...myList, myItem];
    myItem = "";
    myInput.autofocus;
  }
</script>

<input bind:this={myInput} bind:value={myItem} type="text" />
<button on:click={grList}>+</button>
<h1>Test</h1>
<h4>{myItem}</h4>

{#each myList as item}
  <h4>{item}</h4>
{:else}
  <h5>List is empty, please enter item</h5>
{/each}
