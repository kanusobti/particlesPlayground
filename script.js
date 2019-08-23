

  $(function(){
  let numberParticles = 80; //DEFAULT VALUE
  let dotShape = 'circle';// Default Option
  let shapeColor = '#ffffff';//'#000000'; ///Default Option
  let lineLinked = true; //Default Option
  let lineColor = '#000000'; //Default Option
  let direction = 'top'; //Default Option
  let mode = 'grab'; //Default Option
  
  let particlesJson = `{
    "particles": {
      "number": {
        "value": ${numberParticles},
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "${shapeColor}"
      },
      "shape": {
        "type": "${dotShape}",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": ${lineLinked},
        "distance": 150,
        "color": "${lineColor}",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "${direction}",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "`+mode+`"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }`;

let obj = JSON.parse(particlesJson);

// SET NUMBER OF PARTICLES TEXT CHANGE EVENT HANDLER
$('#number').on('input', function() {
  numberParticles= $('#number').val();//10
  console.log(obj["particles"].number.value);//80
  obj["particles"].number.value = numberParticles;
  console.log(obj["particles"].number.value);//10
  particlesJS('particles-js',obj);
});

//SET SHAPE//
$("#dotShape").on('change',function() {
  console.log('I got called');
  dotShape = $("#dotShape").val();
  console.log(dotShape);
  obj["particles"].shape.type = dotShape;
  particlesJS('particles-js',obj);
});

//SET SHAPE COLOR
$("#shapeColor").on('change',function() {
  console.log('I got called');
  shapeColor = $("#shapeColor").val();
  console.log(shapeColor);
  obj["particles"].color.value = shapeColor;
  particlesJS('particles-js',obj);
});


//SET LINE COLOR
$("#lineColor").on('change',function() {
  console.log('I got called');
  lineColor = $("#lineColor").val();
  console.log(obj["particles"].line_linked.color);
  obj["particles"].line_linked.color = lineColor;
  particlesJS('particles-js',obj);
});


//SET DIRECTION
$("#direction").on('change',function() {
  console.log('direction');
  direction = $("#direction").val();
  console.log(obj["particles"].move.direction);
  obj["particles"].move.direction = direction;
  particlesJS('particles-js',obj);
});

//SET MODE
$("#mode").on('change',function() {
  console.log('mode');
  mode = $("#mode").val();
  console.log(obj["interactivity"].events.onhover.mode);
  obj["interactivity"].events.onhover.mode = mode;
  particlesJS('particles-js',obj);
});

//SET LINE LINKED
$("#lineLinked").click( function(){
  if( $(this).is(':checked') ) 
  lineLinked = true;
  else 
  lineLinked = false;
  
  obj["particles"].line_linked.enable = lineLinked;
  particlesJS(obj,'particles-js');

});

particlesJS('particles-js',obj);

var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  });
