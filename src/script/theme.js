const HTML = document?.documentElement
const darkIcon = document.getElementById('icon-dark')
const lightIcon = document.getElementById('icon-light')

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  lightIcon?.classList.remove('hidden')
} else {
  darkIcon?.classList.remove('hidden')
}

const trigger = document.getElementById('theme-toggle')

trigger?.addEventListener('click', function () {
  //
  // toggle icons inside button
  darkIcon?.classList.toggle('hidden')
  lightIcon?.classList.toggle('hidden')

  //
  // if set via local storage previously

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      HTML.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      HTML.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }

    //
    // if NOT set via local storage previously
  } else {
    if (HTML.classList.contains('dark')) {
      HTML.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      HTML.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
})
