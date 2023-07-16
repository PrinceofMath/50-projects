labels = document.querySelectorAll(".form-control label");

labels.forEach((element) => {
  element.innerHTML = element.innerText
    .split("")
    .map(
      (symbol, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${symbol}</span>`
    )
    .join("");
});
