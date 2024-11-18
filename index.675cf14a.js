document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.className="field-label",t.setAttribute("for",e.id),t.textContent=e.name.replace(/^./,function(e){return e.toUpperCase()}),e.placeholder=t.textContent,e.parentNode.insertBefore(t,e)})});
//# sourceMappingURL=index.675cf14a.js.map
