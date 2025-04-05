function setup() {
    createCanvas(windowWidth, windowHeight);
    background(30);
    loadScene(0);


} 



function draw() {
    background(0, 2000); // Légère persistance
    let scene = scenes[currentScene];

    if (scene.sketch) {
        scene.sketch(); // On appelle la scène active
    }


} 





//////FONCTIONS UTILES LAUNCH//////// 

function loadScene(index) {
    if (enterButton) {
        enterButton.remove();
        enterButton = null;
    }

    let scene = scenes[index];
    sound = new Audio(scene.audio);
    sound.play();
    scene.sketch();
}


function startScene() {
    enterButton.hide();
    loadScene(0); 

    userStartAudio().then(() => {
        loadScene(0);
        if (sound) sound.play();
    }).catch(e => console.warn("Audio context issue:", e));

    enterButton.remove(); // Supprime complètement le bouton après le clic
    enterButton.style('display', 'none');


    if (scenes !== scene7) {
        effectActive = true;
    }
    if (scenes !== scene8) {
        effectActive = true;
    }

    

}



//////BOUTON ENTREE/////////

function displayText(txt) {
    // Choisir la couleur du texte
    push(); 
    fill(255, 255, 255); // Blanc
    textSize(32); // Taille du texte
    textFont('Georgia'); // Choisir une police
    textAlign(CENTER, CENTER); // Centrer le texte
    text(txt, width / 2, height / 2); // Afficher le texte au centre de l'écran
    strokeWeight(0);
    pop(); 
}

function styleButton(button) {
    // Appliquer les mêmes styles que pour displayText
    button.style('font-size', '32px'); // Taille du texte du bouton
    button.style('font-family', 'Georgia'); // Police du texte du bouton
    button.style('color', 'white'); // Couleur du texte
    button.style('background-color', 'transparent'); // Fond transparent
    button.style('border', '2px solid white'); // Bordure blanche
    button.style('padding', '10px 20px'); // Espacement autour du texte
    button.style('cursor', 'pointer'); // Changer le curseur quand il survole le bouton
    button.style('text-align', 'center'); // Centrer le texte
}



function mousePressed() {
    currentScene = (currentScene + 1) % scenes.length;
    loadScene(currentScene);
}




////SCENE 07 ET 08, EXPLOSION////


///SCENE07
class Explosion {
    constructor(points) {
        this.points = points;  // Les points de l'explosion
        this.effectActive = true;  // L'effet est activé dès le début
    }

    update() {
        let mousePos = createVector(mouseX, mouseY);  // Position de la souris

        for (let i = 0; i < this.points.length; i++) {
            let distance = this.points[i].dist(mousePos);  // Distance entre le point et la souris
            let force = p5.Vector.sub(this.points[i], mousePos);  // Inverse la direction (répulsion)

            let forceMag = 0;
            if (this.effectActive && distance > 0) {  // S'assure qu'on ne divise pas par zéro
                forceMag = 1000 / distance;  // Force de répulsion
            }

            force.setMag(forceMag);  // Applique la force sur la direction
            this.points[i].add(force);  // Déplace la particule
        }
    }
}


///SCENE08
class Explosion2 {
    constructor(points) {
        this.points = points;  // Les points de l'explosion
        this.effectActive = true;  // L'effet est activé dès le début
    }

    update() {
        let mousePos = createVector(mouseX, mouseY);  // Position de la souris

        for (let i = 0; i < this.points.length; i++) {
            let distance = this.points[i].dist(mousePos);  // Distance entre le point et la souris
            let force = p5.Vector.sub(this.points[i], mousePos);  // Inverse la direction (répulsion)

            let forceMag = 0;
            if (this.effectActive && distance > 0) {  // S'assure qu'on ne divise pas par zéro
                forceMag = -500 / distance;  // Force de répulsion
            }

            force.setMag(forceMag);  // Applique la force sur la direction
            this.points[i].add(force);  // Déplace la particule
        }
    }
}




///SCENE09

class Explosion3 {
    constructor() {
        this.points = []; // Tableau pour stocker les particules
        this.numParticles = 100; // Nombre de particules
        this.maxRadius = 200; // Rayon maximal
        this.createParticles(); // Crée les particules
    }

    createParticles() {
        for (let i = 0; i < this.numParticles; i++) {
            let angle = map(i, 0, this.numParticles, 0, TWO_PI);
            let radius = random(50, this.maxRadius); // Rayon aléatoire pour chaque particule
            let x = cos(angle) * radius + width / 2;
            let y = sin(angle) * radius + height / 2;
            this.points.push({ 
                pos: createVector(x, y), // Position de la particule
                radius: radius,
                angle: angle,
                speed: random(0.01, 0.05) // Vitesse d'orbite aléatoire pour chaque particule
            });
        }
    }

    update() {
        let mousePos = createVector(mouseX, mouseY); // Position de la souris

        for (let i = 0; i < this.points.length; i++) {
            let pt = this.points[i];
            
            // Le rayon oscille pour chaque particule
            let radiusOscillation = sin(radians(pt.angle * 20)) * pt.radius;
            
            // Calcule la nouvelle position basée sur un mouvement circulaire
            pt.angle += pt.speed;  // L'angle augmente pour faire orbiter la particule
            let x = cos(pt.angle) * radiusOscillation + mousePos.x;
            let y = sin(pt.angle) * radiusOscillation + mousePos.y;
            
            // Vérification que les coordonnées x et y sont valides
            if (!isNaN(x) && !isNaN(y)) {
                pt.pos.set(x, y); // Met à jour la position de la particule
            }
        }
    }
}
