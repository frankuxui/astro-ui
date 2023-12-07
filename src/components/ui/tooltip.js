
//
// Trigger

const trigger = document.querySelectorAll('[data-toggle="tooltip"]')

//
// Tooltip

const tooltip = document.createElement('div')
tooltip.classList.add('tooltip')

//
// Gap

const gap = 3

//
// Get placement

function getPlacement(trigger) {
  const placements = {
    top: {
      top: window.scrollY + trigger?.getBoundingClientRect().y - tooltip?.offsetHeight - gap,
      left: trigger?.getBoundingClientRect().x + trigger?.getBoundingClientRect().width / 2 - tooltip?.offsetWidth / 2,
      inset: 'auto auto 0px 0px'
    },
    'top-start': {
      top: window.scrollY + trigger?.getBoundingClientRect().y - tooltip?.offsetHeight - gap,
      left: trigger?.getBoundingClientRect().x,
      inset: 'auto auto 0px 0px'
    },
    'top-end': {
      top: window.scrollY + trigger?.getBoundingClientRect().y - tooltip?.offsetHeight - gap,
      left: trigger?.getBoundingClientRect().x + trigger?.getBoundingClientRect().width - tooltip?.offsetWidth,
      inset: 'auto auto 0px 0px'
    },
    bottom: {
      top: window.scrollY + trigger?.getBoundingClientRect().y + trigger?.getBoundingClientRect().height + gap,
      left: trigger?.getBoundingClientRect().x + trigger?.getBoundingClientRect().width / 2 - tooltip?.offsetWidth / 2,
      inset: '0px auto auto 0px'
    },
    'bottom-start': {
      top: window.scrollY + trigger?.getBoundingClientRect().y + trigger?.getBoundingClientRect().height + gap,
      left: trigger?.getBoundingClientRect().x,
      inset: '0px auto auto 0px'
    },
    'bottom-end': {
      top: window.scrollY + trigger?.getBoundingClientRect().y + trigger?.getBoundingClientRect().height + gap,
      left: trigger?.getBoundingClientRect().x + trigger?.getBoundingClientRect().width - tooltip?.offsetWidth,
      inset: '0px auto auto 0px'
    },
    left: {
      top: window.scrollY + trigger?.getBoundingClientRect().y + trigger?.getBoundingClientRect().height / 2 - tooltip?.offsetHeight / 2,
      left: trigger?.getBoundingClientRect().x - tooltip?.offsetWidth - gap,
      inset: '0px 0px auto auto'
    },
    'left-start': {
      top: window.scrollY + trigger?.getBoundingClientRect().y,
      left: trigger?.getBoundingClientRect().x - tooltip?.offsetWidth - gap,
      inset: '0px 0px auto auto'
    },
    'left-end': {
      top: window.scrollY + trigger?.getBoundingClientRect().y + trigger?.getBoundingClientRect().height - tooltip?.offsetHeight,
      left: trigger?.getBoundingClientRect().x - tooltip?.offsetWidth - gap,
      inset: '0px 0px auto auto'
    },
    right: {
      top: window.scrollY + trigger?.getBoundingClientRect().y + trigger?.getBoundingClientRect().height / 2 - tooltip?.offsetHeight / 2,
      left: trigger?.getBoundingClientRect().x + trigger?.getBoundingClientRect().width + gap,
      inset: '0px auto auto 0px'
    },
    'right-start': {
      top: window.scrollY + trigger?.getBoundingClientRect().y,
      left: trigger?.getBoundingClientRect().x + trigger?.getBoundingClientRect().width + gap,
      inset: '0px auto auto 0px'
    },
    'right-end': {
      top: window.scrollY + trigger?.getBoundingClientRect().y + trigger?.getBoundingClientRect().height - tooltip?.offsetHeight,
      left: trigger?.getBoundingClientRect().x + trigger?.getBoundingClientRect().width + gap,
      inset: '0px auto auto 0px'
    }
  }

  return placements[trigger.dataset.placement ?? 'top']

}


//
// Add position to tooltip

function addPosition (reference) {
  tooltip.style.position = 'absolute'
  tooltip.style.transform = `translate3d(${getPlacement(reference).left}px, ${getPlacement(reference).top}px, 0px)`
  tooltip.style.inset = '0px auto auto 0px'
  tooltip.style.margin = '0px'
}


//
// Add event listeners

trigger.forEach((trigger) => {
  // const initialOpen = trigger.dataset.initialOpen === 'true'.toString()
  const reference = trigger
  trigger.addEventListener('mouseenter', (event) => {
    document?.body?.appendChild(tooltip)
    const content = event.target?.dataset.content
    tooltip.innerHTML = content
    addPosition(reference)
    
  })
  trigger.addEventListener('mouseleave', () => {
    tooltip.remove()
  })

  
})
