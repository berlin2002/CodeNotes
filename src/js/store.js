import { writable } from "svelte/store";
export const codeNotes = writable([]);

export let domState = writable({
  showTitleForm: false,
  showTitleContent: false,
  showDescForm: false,
  showDescContent: false,
  showCodeForm: false,
  showCodeContent: false,
});
