!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",!1),t.stop.removeAttribute("disabled"),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stop.addEventListener("click",(function(){t.stop.setAttribute("disabled",!1),t.start.removeAttribute("disabled"),clearInterval(e)}));var e=null}();
//# sourceMappingURL=01-color-switcher.a30b85d0.js.map
