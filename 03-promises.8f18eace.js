!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("iU1Pc"),u={form:document.querySelector(".form"),btn:document.querySelector('button[type="submit"]')};function a(e,t){var n=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){n?r({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.form.addEventListener("submit",(function(t){t.preventDefault(),u.btn.setAttribute("disabled",!0);var n=t.currentTarget.elements,r=n.delay,o=n.step,l=n.amount,c=Number(r.value),f=Number(o.value),d=Number(l.value),s=c+f*d;if(""===c||""===f||""===d||c<=0||f<=0||d<=0)return void e(i).Notify.failure("Please make sure all fields are filled in correctly!👎");for(var m=1;m<=d;m+=1)a(m,c).then((function(t){var n=t.position,r=t.delay;return e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(r,"ms"))})).catch((function(t){var n=t.position,r=t.delay;return e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(r,"ms"))})),c+=f;p=s,setTimeout((function(){u.btn.removeAttribute("disabled")}),p),t.currentTarget.reset();var p}))}();
//# sourceMappingURL=03-promises.8f18eace.js.map
