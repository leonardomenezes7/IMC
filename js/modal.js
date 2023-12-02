export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  button: document.querySelector(".close"),

  open() {
    modal.wrapper.classList.add("open")
  },

  close() {
    modal.wrapper.classList.remove("open")
  },
}

modal.button.onclick = () => {
  modal.close()
}

window.addEventListener("keydown", clickEsc)

function clickEsc(event) {
  if (event.key === "Escape") {
    modal.close()
  }
}