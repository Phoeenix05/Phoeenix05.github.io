function hamburgerOnClick() {
  const containerBack = document.getElementById('page__navigation__container__back')
  const container = document.getElementById('page__navigation__container')
  containerBack.classList.toggle('show')
  container.classList.toggle('show')
}