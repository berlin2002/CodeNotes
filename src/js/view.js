let view = {};

let saveBtn = document.querySelector("#save-btn");
let subjectBtn = document.querySelector("#subject-btn");
let codeBtn = document.querySelector("#code-btn");
let addBtn = document.querySelector("#add-btn");

codeBtn.classList.toggle("hide");
saveBtn.classList.toggle("hide");
subjectBtn.classList.toggle("hide");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  view.displayTitleForm();
});

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let formDiv = document.querySelector(".snippet__form-div");
  formDiv.innerHTML = "";
  view.displaySnippetContent();
  saveBtn.classList.toggle("hide");
  subjectBtn.classList.toggle("hide");
});

codeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let formDiv = document.querySelector(".desc__form-div");
  formDiv.innerHTML = "";
  view.displaySnippetCodeForm();
  view.displayDescContent();
  codeBtn.classList.toggle("hide");
  saveBtn.classList.toggle("hide");
});

subjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  idCount++;
  let noteBodyTemplate = `
  <div class="note-body-wrapper note-body-wrapper-${idCount}">
    <div class="note-body__desc note-body__desc-${idCount}">
      <div class="desc__form-div desc__form-div-${idCount}"></div>
      <div class="desc__content-div desc__content-div-${idCount}"></div>
    </div>
    <div class="note-body__snippet note-body__snippet-${idCount}">
      <div class="snippet__form-div snippet__form-div-${idCount}"></div>
      <div class="snippet__content-div snippet__content-div-${idCount}"></div>
    </div>
  </div>
  `;

  console.log(idCount);
  console.log(noteBodyTemplate);

  view.displayContent(`.note-body`, noteBodyTemplate);
  if (document.querySelector(".title__content-div").innerHTML === "") {
    view.getTitleValue();
  }

  view.displayContent(`.desc__form-div-${idCount}`, descFormTemplate);
  // view.displayDescForm();
  subjectBtn.classList.toggle("hide");
  codeBtn.classList.toggle("hide");
  let formDiv = document.querySelector(".title__form-div");
  formDiv.innerHTML = "";
});

view.displayTitleForm = (titleObject) => {
  let ourTitle = document.querySelector(".title__form-div");
  let ourTitleForm = ourTitleTemplate;
  ourTitle.innerHTML += ourTitleForm;
  subjectBtn.classList.toggle("hide");
  componentHandler.upgradeDom();
};

/**
 *
 * @param {string} domEl is the id or class of the element that we select from the document, include the . or #
 * @param {variable with string} template is the HTML Markup saved as a template
 * @param {object} contentObject is the object that feeds our function
 */
view.displayContent = (domEl, template, contentObject) => {
  console.log(domEl);
  console.log();
  let contentTitle = document.querySelector(domEl);
  console.log(contentTitle);
  let ourTitleContent = template;
  contentTitle.innerHTML += ourTitleContent;
  componentHandler.upgradeDom();
};

view.displayNoteBody = () => {
  let noteBody = document.querySelector(".note-body");
  let ourDescTitle = noteBodyTemplate;
  noteBody.innerHTML += ourDescTitle;
  componentHandler.upgradeDom();
};

view.displayDescForm = (descTitleObject) => {
  let descTitle = document.querySelector(".desc__form-div");
  let ourDescTitle = descFormTemplate;
  descTitle.innerHTML += ourDescTitle;
  componentHandler.upgradeDom();
};

view.displayDescContent = () => {
  let descContent = document.querySelector(".desc__content-div");
  let ourDescContent = descContentTemplate;
  descContent.innerHTML += ourDescContent;
  componentHandler.upgradeDom();
};

view.displaySnippetCodeForm = () => {
  let snippetCode = document.querySelector(".snippet__form-div");
  let ourSnippetCode = ourSnippetCodeTemplate;
  console.log(snippetCode);
  snippetCode.innerHTML += ourSnippetCode;
  componentHandler.upgradeDom();
};

view.displaySnippetContent = () => {
  let snippetContent = document.querySelector(".snippet__content-div");
  let oursnippetContent = snippetContentTemplate;
  snippetContent.innerHTML += oursnippetContent;
  hljs.highlightAll();
  componentHandler.upgradeDom();
};

view.getTitleValue = () => {
  let title = document.querySelector(".title__input").value;
  codenote.title = title;
  let titleContentTemplate = `

<div class="title__content-div">
<div id="title-form-btn" class="edit-btn">
  <button
    class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
  >
    <i class="material-icons">create</i>
  </button>
</div>

<h3>${codenote.title}</h3>
</div>
`;
  console.log(codenote);
  view.displayContent(".title__content-div", titleContentTemplate, codenote);
};

view.getDescValue = () => {
  let subtitle = document.querySelector("#subtitle-field").value;
  let description = document.querySelector("#content-field").value;
};

view.getSnippetCodeValue = () => {
  let snippetCode = document.querySelector("#snippet-field").value;
};

view.displaySecondDescContent = () => {
  let descContent = document.querySelector(".note-body-wrapper");
  let displaySecondDes = secondDescTemplate;
  descContent.innerHTML += displaySecondDes;
  hljs.highlightAll();
  componentHandler.upgradeDom();
};
