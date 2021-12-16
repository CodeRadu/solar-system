import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./style.css";
const scene = new three.Scene();

const camera = new three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  5000
);

const spaceTexture = new three.TextureLoader().load("images/space.jpg");
scene.background = spaceTexture;

const sunTexture = new three.TextureLoader().load("images/sun.jpg");

const sun = new three.Mesh(
  new three.SphereGeometry(50, 32, 32), //soare
  new three.MeshStandardMaterial({
    map: sunTexture,
  })
);

scene.add(sun);

const earthTexture = new three.TextureLoader().load("images/earth.jpg");

const earth = new three.Mesh(
  new three.SphereGeometry(10, 16, 16), // phamant
  new three.MeshStandardMaterial({
    map: earthTexture,
  })
);

earth.position.x = sun.position.x + 250;

scene.add(earth);

const mercuryTexture = new three.TextureLoader().load("images/mercury.jpg");

const mercury = new three.Mesh(
  new three.SphereGeometry(3, 8, 8), // merkur
  new three.MeshStandardMaterial({
    map: mercuryTexture,
  })
);

mercury.position.x = sun.position.x + 100;

scene.add(mercury);

// venus

const venusTexture = new three.TextureLoader().load("images/venus.jpg");

const venus = new three.Mesh(
  new three.SphereGeometry(5, 16, 16), // venus
  new three.MeshStandardMaterial({
    map: venusTexture,
  })
);

venus.position.x = sun.position.x + 175;

scene.add(venus);

// marte

const marsTexture = new three.TextureLoader().load("images/mars.jpg");

const mars = new three.Mesh(
  new three.SphereGeometry(5, 16, 16), // marte
  new three.MeshStandardMaterial({
    map: marsTexture,
  })
);

mars.position.x = sun.position.x + 325;

scene.add(mars);

// jupiter

const jupiterTexture = new three.TextureLoader().load("images/jupiter.jpg");

const jupiter = new three.Mesh(
  new three.SphereGeometry(20, 32, 32), // jupiter
  new three.MeshStandardMaterial({
    map: jupiterTexture,
  })
);

jupiter.position.x = sun.position.x + 475;

scene.add(jupiter);

// saturn

const saturnTexture = new three.TextureLoader().load("images/saturn.jpg");

const saturn = new three.Mesh(
  new three.SphereGeometry(15, 32, 32), // saturn
  new three.MeshStandardMaterial({
    map: saturnTexture,
  })
);

saturn.position.x = sun.position.x + 600;

scene.add(saturn);

// uranus

const uranusTexture = new three.TextureLoader().load("images/uranus.jpg");

const uranus = new three.Mesh(
  new three.SphereGeometry(10, 20, 20), // uranus
  new three.MeshStandardMaterial({
    map: uranusTexture,
  })
);

uranus.position.x = sun.position.x + 725;

scene.add(uranus);

// neptun

const neptuneTexture = new three.TextureLoader().load("images/neptune.jpg");

const neptune = new three.Mesh(
  new three.SphereGeometry(10, 20, 20), // neptun
  new three.MeshStandardMaterial({
    map: neptuneTexture,
  })
);

neptune.position.x = sun.position.x + 850;

scene.add(neptune);

// pluto

const plutoTexture = new three.TextureLoader().load("images/pluto.jpg");

const pluto = new three.Mesh(
  new three.SphereGeometry(3, 8, 8), // pluto
  new three.MeshStandardMaterial({
    map: plutoTexture,
  })
);

pluto.position.x = sun.position.x + 950;

scene.add(pluto);

const renderer = new three.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(500);

const ambientLight = new three.AmbientLight(0xffffff);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const radius = Math.random() * 1.5;
  const width = Math.round(Math.random() * 300);
  const height = Math.round(Math.random() * 240);
  const geometry = new three.SphereGeometry(radius, width, height);
  const material = new three.MeshStandardMaterial({ color: 0xffffff });
  const star = new three.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(0)
    .map(() => three.MathUtils.randFloatSpread(1000));

  star.position.set(x, y, z);
  scene.add(star);
}

let star = 1;

Array(1000) //pusca pc
  .fill(0)
  .forEach(() => {
    if (star % 100 == 0) {
      console.log(`Adding star ${star}`);
    }
    addStar();
    star++;
  });

console.warn("Pc sar putea sa puste!");

const clock = new three.Clock();

function animate() {
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime() * 0.1 * Math.PI;
  mercury.position.set(
    Math.sin(time * 20.2 + Math.PI * 0.5) * 100,
    0,
    Math.cos(time * 20.2 + Math.PI * 0.5) * 100
  );
  venus.position.set(
    Math.sin(time * 8.75 + Math.PI * 0.5) * 175,
    0,
    Math.cos(time * 8.75 + Math.PI * 0.5) * 175
  );
  earth.position.set(
    Math.sin(time * 5 + Math.PI * 0.5) * 250,
    0,
    Math.cos(time * 5 + Math.PI * 0.5) * 250
  );
  mars.position.set(
    Math.sin(time * 4.4 + Math.PI * 0.5) * 325,
    0,
    Math.cos(time * 4.4 + Math.PI * 0.5) * 325
  );
  jupiter.position.set(
    Math.sin(time * 0.4 + Math.PI * 0.5) * 475,
    0,
    Math.cos(time * 0.4 + Math.PI * 0.5) * 475
  );
  saturn.position.set(
    Math.sin(time * 0.15 + Math.PI * 0.5) * 600,
    0,
    Math.cos(time * 0.15 + Math.PI * 0.5) * 600
  );
  uranus.position.set(
    Math.sin(time * 0.05 + Math.PI * 0.5) * 725,
    0,
    Math.cos(time * 0.05 + Math.PI * 0.5) * 725
  );
  neptune.position.set(
    Math.sin(time * 0.03 + Math.PI * 0.5) * 850,
    0,
    Math.cos(time * 0.03 + Math.PI * 0.5) * 850
  );
  pluto.position.set(
    Math.sin(time * 0.02 + Math.PI * 0.5) * 950,
    0,
    Math.cos(time * 0.02 + Math.PI * 0.5) * 950
  );
  controls.update();
  renderer.render(scene, camera);
}

animate();
