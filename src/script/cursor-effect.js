const cursor = document?.createElement('div')
const color = 'rgb(139 161 247 / 8%)'
const x = 0
const y = 0
cursor.classList.add('cursor')
cursor.style.left = x + 'px'
cursor.style.top = y + 'px'
cursor.style.transform = 'translate(-50%, -50%) scale(0)'

document?.body.appendChild(cursor)

document?.addEventListener('mouseenter', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)'
})

document?.addEventListener('mouseleave', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(0)'
})

document?.addEventListener('mousemove', (e) => {
  const x = e.clientX
  const y = e.clientY
  cursor.style.left = x + 'px'
  cursor.style.top = y + 'px'
})