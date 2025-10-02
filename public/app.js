attachScrollHandlers();

function attachScrollHandlers() {
    var companies = document.querySelectorAll(".company-grid div");
    companies.forEach(el => {
    el.addEventListener("click", scrollToParagraph);
    });



    function scrollToParagraph(e) {
        console.log(String(e.target.id.slice(-1)));
        const para = document.getElementById("target-"+String(e.target.id.slice(-1)));
        para.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
function beforeElement(e){
    e.classList.add("active")
}
document.querySelectorAll("#nav-span").forEach(btn => {
  btn.addEventListener("click", () => {
    //   console.log(btn);
    beforeElement(btn);
    const url = btn.dataset.endpoint;

    fetch(url)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const newSection = doc.querySelector("#main-section");
        document.querySelector("#main-section").replaceWith(newSection);

        attachScrollHandlers();
      })
      .catch(err => console.error("Failed to load page:", err));
  });
});
