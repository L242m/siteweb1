particlesJS('particles-js', {
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 800 }
      },
      color: { value: '#888888' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000' },
        polygon: { nb_sides: 5 }
      },
      opacity: { value: 0.5, random: false, anim: { enable: false } },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#888888',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
  