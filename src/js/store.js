import { writable } from "svelte/store";
export const codeNotes = writable([]);

export let domState = writable({
  showTitleForm: false,
  showTitleContent: false,
  showFabs: false,
  showAdd: true,
  showAddDesc:false
});
