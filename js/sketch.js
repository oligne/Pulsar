let earth, moon;


function setup() {
    myFont = loadFont("typo.ttf");
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(30);
    loadScene(0);
    
    earth = loadImage("assets/earth.jpg");
    moon = loadImage("assets/moon.jpg");

} 



function draw() {
    background(0, 2000); // Légère persistance
    updateWebGL(); 
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
    if (scenes !== scene10) {
         for (let i = 0; i < n; i++) {
        let x = random(-width, width);  // Position X au-delà de l'écran
        let y = random(-height, height);  // Position Y au-delà de l'écran
        points.push(createVector(x, y));
        shinePoints.push(random() < 0.08);  // Aléatoirement, certaines particules seront "shiny"
    }
    }

   
    

}

function updateWebGL() {
    translate(windowWidth/2*(-1),windowHeight/2*(-1))   

}

//////BOUTON ENTREE/////////

function displayText(txt) {
    // Choisir la couleur du texte
    push(); 
    fill(255, 255, 255); // Blanc
    textSize(32); // Taille du texte
    textFont(myFont); // Choisir une police
    textAlign(CENTER, CENTER); // Centrer le texte
    text(txt, width / 2, height / 2); // Afficher le texte au centre de l'écran
    strokeWeight(0);
    pop(); 
}

function displayText2(txt) {
    // Choisir la couleur du texte
    push(); 
    fill(255, 255, 255); // Blanc
    textSize(20); // Taille du texte
    textFont(myFont); // Choisir une police
    textAlign(CENTER, CENTER); // Centrer le texte
    text(txt, width / 2, height / 2); // Afficher le texte au centre de l'écran
    strokeWeight(0);
    pop(); 
}

function displayText3(txt) {
    // Choisir la couleur du texte
    push(); 
    fill(255, 255, 255); // Blanc
    textSize(14); // Taille du texte
    textFont(myFont); // Choisir une police
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
                forceMag = -1000 / distance;  // Force de répulsion
            }

            force.setMag(forceMag);  // Applique la force sur la direction
            this.points[i].add(force);  // Déplace la particule
        }
    }
}


////SCENE09 
class Explosion2bis {
    constructor(points) {
        this.points = points;  // Les points existants de l'explosion
        this.effectActive = true;  // L'effet est activé dès le début
    }

    update() {
        let center = createVector(mouseX, mouseY);  // Point central (centre de l'écran)

        for (let i = 0; i < this.points.length; i++) {
            let pt = this.points[i];

            // Calcul de la direction vers le centre de l'écran
            let dir = p5.Vector.sub(center, pt);
            let distance = dir.mag();

            // Attraction douce vers le centre
            if (distance > 5) {  // Si la distance est supérieure à une certaine valeur
                dir.normalize();  // Normalise la direction pour avoir une vitesse constante
                pt.add(dir.mult(2));  // Déplace progressivement vers le centre
            }

            // Affichage des particules avec un effet de brillance
            stroke(255);
            strokeWeight(3);
            point(pt.x, pt.y);  // Affichage du point
        }
    }
}





///SCENE10

class Explosion3 {
    constructor(points) {
        this.points = points;  // Les points provenant de la scène 8
        this.maxRadius = 200;  // Rayon maximal de l'orbite
        this.orbitSpeed = 0.02; // Vitesse d'orbite
        this.transitionProgress = 0; // Progression de la transition (0 = attraction, 1 = orbite)
    }

    update() {
        let mousePos = createVector(mouseX, mouseY); // Position de la souris

        // Progression de la transition entre attraction et orbite
        this.transitionProgress += 0.005;  // Progression graduelle (très lente)
        if (this.transitionProgress > 1) {
            this.transitionProgress = 1;  // Limite à 1 pour garder l'orbite activée
        }

        // Applique l'effet en fonction de la progression de la transition
        for (let i = 0; i < this.points.length; i++) {
            let pt = this.points[i];

            // Calcul de la distance entre la particule et la souris
            let distance = pt.dist(mousePos);
            
            // Forces combinées : attraction et orbite
            if (this.transitionProgress < 1) {
                // Attraction : L'attraction diminue progressivement
                let force = p5.Vector.sub(pt, mousePos);  // Force d'attraction
                let forceMag = -500 / distance;  // Force de répulsion (plus la distance est faible, plus la force est grande)
                force.setMag(forceMag);  // Applique la force sur la particule
                pt.add(force);  // Déplace la particule
                
                // Transition progressive de la force d'attraction à l'orbite
                let mixFactor = map(this.transitionProgress, 0, 1, 1, 0);  // Commence à 1 (attraction) et va vers 0 (orbite)
                let angle = atan2(pt.y - mousePos.y, pt.x - mousePos.x);
                let radiusOscillation = sin(frameCount * 0.05 + i * 0.5) * this.maxRadius;
                pt.x += cos(angle) * radiusOscillation * mixFactor;
                pt.y += sin(angle) * radiusOscillation * mixFactor;
            } else {
                let mixFactor = map(this.transitionProgress, 0, 1, 1, 0);  // Commence à 1 (attraction) et va vers 0 (orbite)
                let angle = atan2(pt.y - mousePos.y, pt.x - mousePos.x);
                let radiusOscillation = sin(frameCount * 0.05 + i * 0.5) * this.maxRadius;
                pt.x += cos(angle) * radiusOscillation * mixFactor;
                pt.y += sin(angle) * radiusOscillation * mixFactor;

                pt.set(x, y); // Met à jour la position orbitale
            }
        }
    }
}

///SCENE11
class Meteor {
    constructor(x, y) {
        this.position = createVector(x, y, random(-200, 200)); // Profondeur (z)
        this.velocity = createVector(0, 0, 0);
        this.acceleration = createVector(0, 0, 0);
        this.maxSpeed = 5;
        this.maxForce = 0.1;
        this.angleOffset = random(TWO_PI); // Angle aléatoire pour le mouvement circulaire
        this.radius = random(50, 200); // Rayon de l'orbite
        this.angleSpeed = random(0.01, 0.05); // Vitesse angulaire
        this.orbitRotationSpeed = random(0.002, 0.005); // Vitesse de rotation des orbites
        this.isActive = true; // Si la particule est active
    }

    update() {
        let target = createVector(mouseX, mouseY); // Position de la souris
        let dir = p5.Vector.sub(target, this.position); // Direction vers la souris
        let distance = dir.mag();

        // Vérifie que la distance est valide avant de calculer
        if (isFinite(distance) && distance > 0) {
            dir.normalize();
            dir.mult(map(distance, 0, width, 0.1, 0.1)); // Attraction douce vers la souris
            this.applyForce(dir);
        }

        // Applique la vélocité et met à jour la position
        this.velocity.add(this.acceleration);
        if (isFinite(this.velocity.x) && isFinite(this.velocity.y) && isFinite(this.velocity.z)) {
            this.velocity.limit(this.maxSpeed);
            this.position.add(this.velocity);
        }

        // Mouvement circulaire autour de la souris
        this.angleOffset += this.angleSpeed + random(-0.001, 0.001); // Variation douce de l'angle
        this.position.x = mouseX + cos(this.angleOffset) * this.radius;
        this.position.y = mouseY + sin(this.angleOffset) * this.radius;

        // Rotation des orbites autour de la souris
        this.angleOffset += this.orbitRotationSpeed;

        // Déplacement sur l'axe Z pour créer l'effet de profondeur
        this.position.z += random(-0.5, 0.5); // Variations aléatoires en Z

        // Vérifie les valeurs de position
        if (isNaN(this.position.x) || isNaN(this.position.y) || isNaN(this.position.z)) {
            console.log('Position invalide détectée. Réinitialisation.');
            this.resetPosition();
        }

        // Rendre les particules plus petites lorsqu'elles sont plus éloignées en Z (perspective)
        let scale = map(this.position.z, -200, 200, 0.5, 1.5);
        this.size = map(this.position.z, -200, 200, 3, 6) * scale;

        // Simuler la disparition de certaines particules pour en créer de nouvelles
        if (random(1) < 0.01) {
            this.isActive = false;
        }

        // Réinitialiser l'accélération
        this.acceleration.mult(0);
    }

    applyForce(force) {
        if (isFinite(force.x) && isFinite(force.y) && isFinite(force.z)) {
            this.acceleration.add(force);
        }
    }

    display() {
        // Application de la perspective 3D : affecte la taille et l'intensité de la particule en fonction de la profondeur (z)
        let scale = map(this.position.z, -200, 200, 6, 0);
        let alpha = map(this.position.z, -200, 200, 0, 255); // Alpha change avec la profondeur pour plus de réalisme

        stroke(255, alpha); // Applique une transparence en fonction de la profondeur
        strokeWeight(2 * scale); // Taille de trait selon la profondeur
        point(this.position.x, this.position.y); // Affichage de la météorite
    }

    // Réinitialisation de la position
    resetPosition() {
        this.position = createVector(random(width), random(height), random(-200, 200)); // Position aléatoire
        this.radius = random(50, 200);
        this.angleOffset = random(TWO_PI);
        this.angleSpeed = random(0.01, 0.05);
        this.orbitRotationSpeed = random(0.002, 0.005);
        this.isActive = true;
    }

    // Vérifie si la particule doit être recréée
    checkRebirth() {
        if (!this.isActive) {
            this.resetPosition();
        }
    }
}



///SCENE 12


class MvntCiel {
    constructor(p) {
        // Utiliser les coordonnées des points existants pour initialiser les particules
        this.x = p.x;
        this.y = p.y;
        this.z = random(width / 2); // La profondeur initiale est choisie aléatoirement
        this.pz = this.z;
    }

    update() {
        this.z -= speed;
        if (this.z < 1) {
            this.z = width / 2;
            this.pz = this.z;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
        }
    }

    show() {
        let sx = map(this.x / this.z, 0, 1, 0, width / 2);
        let sy = map(this.y / this.z, 0, 1, 0, height / 2);
    
        let px = map(this.x / this.pz, 0, 1, 0, width / 2);
        let py = map(this.y / this.pz, 0, 1, 0, height / 2);
    
        this.pz = this.z;
    
        // Alpha et taille en fonction de la profondeur
        let alpha = map(this.z, 0, width / 2, 255, 0);  // proche = opaque
        let sw = map(this.z, 2, width / 2, 3, 0.2);      // proche = épais
    
        stroke(255, alpha);
        strokeWeight(sw);
        line(px, py, sx, sy);
    }
}


///SCENE 13 + 14



function ciel() {

    if (points.length === 0) {
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
        }
    }


    if (lineMvnt.length === 0 && points.length > 0) {
        for (let i = 0; i < points.length; i++) {
            let p = points[i];
            if (p && p.x !== undefined && p.y !== undefined) {  // Vérifier que p est défini
                let m = new MvntCiel(p); // Passer le point existant comme paramètre
                lineMvnt.push(m);
            }
        } 
    }

    
    push();
    translate(width / 2, height / 2);   

    // Boucle inversée pour permettre les suppressions sécurisées
    for (let i = lineMvnt.length - 1; i >= 0; i--) {
        lineMvnt[i].update();
        if (lineMvnt[i].outOfBounds) {
            lineMvnt.splice(i, 1); // supprimer les particules qui sortent
        } else {
            lineMvnt[i].show();
        }
    }

    // Ajouter des particules si on est en dessous du seuil
    while (lineMvnt.length < n) {
        let randomPoint = points[floor(random(points.length))];
        if (randomPoint && randomPoint.x !== undefined && randomPoint.y !== undefined) {
            lineMvnt.push(new MvntCiel(randomPoint)); // Passer un point valide
        }
    }

    pop();
}


function meteorfunction() {

if (meteor.length === 0) {
    for (let i = 0; i < 100; i++) {
        meteor.push(new Meteor(random(width), random(height)));
    }
}


// Mettre à jour et dessiner les météorites
for (let i = 0; i < meteor.length; i++) {
    meteor[i].update();
    meteor[i].display();
    meteor[i].checkRebirth(); // Vérifie si une particule doit être recréée

}

} 


///SCENE 19


  function updateSatellites(maxSatellites) {
    // Ajouter si pas assez
    while (satellites.length < maxSatellites) {
      satellites.push(new Satellite());
    }
  
    // Retirer si trop
    while (satellites.length > maxSatellites) {
      satellites.pop();
    }
  
    // Update et display
    for (let s of satellites) {
      s.update();
      s.display();
    }
  }

  class Satellite {
    constructor() {
      this.angle = random(TWO_PI);
      this.orbitSpeed = random(0.005, 0.015);
      this.radius = random(radiusSat);
      this.size = random(1, 3);
      this.orbitInclination = random(-PI / 6, PI / 6);
      this.shiny = 80 ; // 30% chance d'être brillant
    }
  
    update() {
      this.angle += this.orbitSpeed;
    }
  
    display() {
      this.update();
  
      let x = cos(this.angle) * this.radius;
      let z = sin(this.angle) * this.radius;
      let y = sin(this.angle * 2) * this.radius * 0.1;
  
      push();
      rotateX(this.orbitInclination);
      translate(x, y, z);
  
      if (this.shiny) {
        stroke(255, 255, 240, 200);
        strokeWeight(1.5);
        let len = map(sin(frameCount * 0.1), -1, 1, 1, 5);
  
        // Rayons brillants dans 3 directions
        line(0, -len, 0, 0, -len * 2, 0);
        line(0, len, 0, 0, len * 2, 0);
        line(-len, 0, 0, -len * 2, 0, 0);
        line(len, 0, 0, len * 2, 0, 0);
        line(0, 0, -len, 0, 0, -len * 2);
        line(0, 0, len, 0, 0, len * 2);
  
        strokeWeight(1);
        point(0, 0, 0);
      } else {
        noStroke();
        fill(255, 255, 200);
        sphere(this.size);
      }
  
      pop();
    }
  }

  ///SCENE 16 - 17 - 18 - 19 - 20 

  function updateDistance() {
    if (distance < targetDistance) {
      distance += distanceSpeed;
      if (distance > targetDistance) distance = targetDistance; // éviter de dépasser
    } else if (distance > targetDistance) {
      distance -= distanceSpeed;
      if (distance < targetDistance) distance = targetDistance;
    }
  }