var myRequest = new Request("/template.html");
document.write(`<link rel="stylesheet" href="/index.css" />`);
// document.write(
//   `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />`
// );

fetch(myRequest, {
  method: "GET",
  headers: {
    "Content-Type": "text/html; charset=utf-8",
  },
  mode: "cors",
  cache: "default",
})
  .then(function (response) {
    return response.text();
  })
  .then(function (myJson) {
    var section = document.createElement("section");
    section.innerHTML = myJson;
    section.classList.add("displayContainer")
    document.body.appendChild(section);
    // 加载模板头部后
    let hideTimer = setTimeout(() => {
      document.querySelector(".navContainer").classList.add("fadeOut");
    }, 5000);
    document.querySelector("body").addEventListener("click", () => {
      const navContainer = document.querySelector(".navContainer");
      navContainer.classList.toggle("fadeOut");
    });
  })
  .catch((error) => console.error(error));

// const script = document.createElement("script");
// script.src = `${mapBaseUrl}/api?v=4.0&tk=${mapKey}`;
// script.addEventListener("load", onDynamicJSLoad);
// document.head.appendChild(script);

// var div = document.createElement("div");
// div.innerHTML = `123`
// div.classList.add("test")
// document.body.appendChild(div);
