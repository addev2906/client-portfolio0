var companies = document.querySelectorAll(".company-grid div");
companies.forEach(el => {
  el.addEventListener("click", scrollToParagraph);
});



function scrollToParagraph(e) {
    console.log(String(e.target.id.slice(-1)));
    const para = document.getElementById("target-"+String(e.target.id.slice(-1)));
    para.scrollIntoView({ behavior: "smooth", block: "start" });
}

// document.getElementById("blog-span").addEventListener("click", () => {
//   fetch("./endpoints/blogs.html") // <-- your other HTML page
//     .then(response => response.text())
//     .then(html => {
//       // Parse the returned HTML string
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, "text/html");

//       // Get the new section from that page
//       const newSection = doc.querySelector("#scroll-box");

//       // Replace current section
//       const currentSection = document.querySelector("#scroll-box");
//       currentSection.replaceWith(newSection);
//     })
//     .catch(err => console.error("Error loading new section:", err));
// });
document.querySelectorAll("#nav-span").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.dataset.endpoint;

    fetch(url)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const newSection = doc.querySelector("#scroll-box");
        document.querySelector("#scroll-box").replaceWith(newSection);
      })
      .catch(err => console.error("Failed to load page:", err));
  });
});
