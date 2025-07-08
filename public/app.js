var companies = document.querySelectorAll(".company-grid div");
companies.forEach(el => {
  el.addEventListener("click", scrollToParagraph);
});



function scrollToParagraph(e) {
    console.log(String(e.target.id.slice(-1)));
    const para = document.getElementById("target-"+String(e.target.id.slice(-1)));
    para.scrollIntoView({ behavior: "smooth", block: "start" });
}
