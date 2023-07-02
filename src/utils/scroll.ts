function scroll(id: string) {
  var getMeTo = document.getElementById(id);
  getMeTo?.scrollIntoView({ behavior: "smooth" });
}
