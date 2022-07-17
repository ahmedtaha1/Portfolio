let lis = document.querySelectorAll("li");
lis.forEach((li) =>
  li.addEventListener("click", () => {
    li.parentElement
      .querySelectorAll(".active")
      .forEach((active) => active.classList.remove("active"));
    li.classList.add("active");
  })
);
