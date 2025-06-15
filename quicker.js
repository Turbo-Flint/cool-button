console.log("[Flint Developer] CSS Quicker is running now.");
(function color() {
  var elements = document.querySelectorAll("[color]");
  elements.forEach(function (element) {
    var color = element.getAttribute("color");
    element.style.background = color;
  });
})();

(function text() {
  var elements = document.querySelectorAll("[text]");
  elements.forEach(function (element) {
    var text = element.getAttribute("text");
    element.style.color = text;
  });
})();

(function lr() {
  var elements = document.querySelectorAll("[px]");
  elements.forEach(function (element) {
    var lr = element.getAttribute("px");
    element.style.paddingLeft = px;
    element.style.paddingRight = px;
  });
})();

(function ud() {
  var elements = document.querySelectorAll("[py]");
  elements.forEach(function (element) {
    var ud = element.getAttribute("py");
    element.style.paddingTop = py;
    element.style.paddingBottom = py;
  });
})();

(function radius() {
  var elements = document.querySelectorAll("[radius]");
  elements.forEach(function (element) {
    var radius = element.getAttribute("radius");
    element.style.radius = radius;
  });
})();

(function font() {
  var elements = document.querySelectorAll("[font]");
  elements.forEach(function (element) {
    var font = element.getAttribute("font");
    element.style.fontSize = font;
  });
})();

/* v1.0.1 */

(function hover() {
  var elements = document.querySelectorAll("[hover]");
  elements.forEach(function (element) {
    var hover = element.getAttribute("hover");
    element.style.background = "white";
    element.style.color = hover;
    element.style.border = "1px solid " + hover;
    element.addEventListener("mouseover", function () {
      element.style.background = hover;
      element.style.color = "white";
      elememt.style.border = "1px solid " + hover;
    });
    element.addEventListener("mouseout", function () {
      element.style.background = "white";
      element.style.color = hover;
      element.style.border = "1px solid " + hover;
    });
  });
})();
