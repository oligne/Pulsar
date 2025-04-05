const scenes = [
    { text: "sc01_Entree", audio: "audio/universe1.mp3", sketch: scene1 },

    { text: "sc02_Situation Intiale", audio: "audio/universe1.mp3", sketch: scene2 },
    { text: "sc_03_Situation Intiale", audio: "audio/universe1.mp3", sketch: scene3 },
    { text: "sc04_Situation Intiale", audio: "audio/universe1.mp3", sketch: scene4 },
    { text: "sc05_Situation Intiale", audio: "audio/universe1.mp3", sketch: scene5 },

    { text: "sc06_TwistTurn", audio: "audio/universe1.mp3", sketch: scene6 },
    { text: "sc07_TwistTurn", audio: "audio/universe2.mp3", sketch: scene7 },
    { text: "sc08_TwistTurn", audio: "audio/universe2.mp3", sketch: scene8 },
    { text: "sc09_TwistTurn", audio: "audio/universe2.mp3", sketch: scene9 },
    { text: "sc10_TwistTurn", audio: "audio/universe2.mp3", sketch: scene10 },

    { text: "sc11_Transition", audio: "audio/universe2.mp3", sketch: scene11 },
    { text: "sc12_Transition", audio: "audio/universe2.mp3", sketch: scene12 },
    { text: "sc13_Transition", audio: "audio/universe2.mp3", sketch: scene13 },
    { text: "sc14_Transition", audio: "audio/universe2.mp3", sketch: scene14 },

    { text: "sc15_Shift1", audio: "audio/universe2.mp3", sketch: scene15 },
    { text: "sc16_Shift1", audio: "audio/universe2.mp3", sketch: scene16 },
    { text: "sc17_Shift1", audio: "audio/universe2.mp3", sketch: scene17 },
    { text: "sc18_Shift1", audio: "audio/universe2.mp3", sketch: scene18 },
    { text: "sc19_Shift1", audio: "audio/universe2.mp3", sketch: scene19 },
    { text: "sc20_Shift1", audio: "audio/universe2.mp3", sketch: scene20 }
];




let currentScene = 0;
let sound;

let enterButton;
let mouseEffectActive = false;

let points = [];
let n = 2000; ///Nombre de points 

function scene1() {
    background(0); // Fond noir


    if (!enterButton) {
        enterButton = createButton('Click to Enter');
        enterButton.position(width / 2 - 75, height / 2);
        styleButton(enterButton);
        enterButton.mousePressed(loadScene);
    }


if (points.length === 0) {
        wi = height; // Taille du champ de particules
        // Crée les points une fois au début
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
        }
    }

    for (let i = 0; i < points.length; i++) {
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU * 1; //ATTRACTION DEPLACEMENT
        points[i].add(p5.Vector.fromAngle(angle).mult(1)); // VITESSE

        // Ne réinitialise pas les points brusquement, mais les laisse se déplacer continuellement
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height)); // Réinitialise quand ils dépassent les bords
        } else {
            stroke(255, 255);
            strokeWeight(3); // Taille du point
            point(points[i].x, points[i].y, 2, 2); // Affiche les points
        }
    }
}



function scene2() {
    push();
    translate(0, 300)
    noStroke(); 
    displayText("Once upon a time, somewhere into the large void of the universe...");
    pop();


    if (points.length === 0) {
        wi = height; // Taille du champ de particules
        // Crée les points une fois au début
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
        }
    }

    for (let i = 0; i < points.length; i++) {
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU * 1; //ATTRACTION DEPLACEMENT
        points[i].add(p5.Vector.fromAngle(angle).mult(5)); // VITESSE

        // Ne réinitialise pas les points brusquement, mais les laisse se déplacer continuellement
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height)); // Réinitialise quand ils dépassent les bords
        } else {
            stroke(255, 255);
            strokeWeight(3); // Taille du point
            point(points[i].x, points[i].y, 2, 2); // Affiche les points
        }
    }
 

}

let shinePoints = [];

function scene3() {
    push();
    translate(0, 300)
    noStroke(); 
    displayText("Far, far away of everything that we know, \n some dust powder was flowting endlessly through the nothingness of the sky.");
    pop(); 
   
    if (points.length === 0) {
        wi = height;
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
    
            // 10% des points brillent
            shinePoints.push(random() < 0.1);
        }
    }
    
    for (let i = 0; i < points.length; i++) {
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU; ///ATTRACTION DEPLACEMENT
        points[i].add(p5.Vector.fromAngle(angle).mult(5)); ///VITESSE
    
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height));
            shinePoints[i] = random() < 0.04; // on redéfinit si c’est shiny
        } else {
            if (shinePoints[i]) {
                stroke(255);
                strokeWeight(1);
    
                // Longueur animée des rayons
                let len = map(sin(frameCount * 0.04+ i), -1, 1, 2, 10);
    
                // 4 petits traits autour du point
                line(points[i].x, points[i].y - len, points[i].x, points[i].y - len * 2);
                line(points[i].x, points[i].y + len, points[i].x, points[i].y + len * 2);
                line(points[i].x - len * 2, points[i].y, points[i].x - len, points[i].y);
                line(points[i].x + len, points[i].y, points[i].x + len * 2, points[i].y);
    
                // Le point au centre
                strokeWeight(3);
                point(points[i].x, points[i].y);
            } else {
                stroke(255);
                strokeWeight(3);
                point(points[i].x, points[i].y);
            }
        }
    }
    

   
}


function scene4() {
    let n = 1000; 
    background(0); // Fond noir
    push();
    translate(0, 300);
    noStroke(); 
    displayText("In the absence of air, time, light or destination, \n thoses particles were calmlydancing without any perturbations...");
    pop();

    if (points.length === 0) {
        wi = height;
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
    
            // 10% des points brillent
            shinePoints.push(random() < 0.1);
        }
    }
    
    for (let i = 0; i < points.length; i++) {
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU; ///ATTRACTION DEPLACEMENT
        points[i].add(p5.Vector.fromAngle(angle).mult(2)); ///VITESSE
    
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height));
            shinePoints[i] = random() < 0.04; // on redéfinit si c’est shiny
        } else {
            if (shinePoints[i]) {
                stroke(255);
                strokeWeight(1);
    
                // Longueur animée des rayons
                let len = map(sin(frameCount * 0.04+ i), -1, 1, 2, 10);
    
                // 4 petits traits autour du point
                line(points[i].x, points[i].y - len, points[i].x, points[i].y - len * 2);
                line(points[i].x, points[i].y + len, points[i].x, points[i].y + len * 2);
                line(points[i].x - len * 2, points[i].y, points[i].x - len, points[i].y);
                line(points[i].x + len, points[i].y, points[i].x + len * 2, points[i].y);
    
                // Le point au centre
                strokeWeight(3);
                point(points[i].x, points[i].y);
            } else {
                stroke(255);
                strokeWeight(3);
                point(points[i].x, points[i].y);
            }
        }
    }

    
}

function scene5() {
    background(0); 
    push();
    translate(0, 300)
    noStroke(); 
    displayText("The vacuum is vast, cold, and undisturbed.");
    pop();

    for (let i = 0; i < points.length; i++) {
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU; ///ATTRACTION DEPLACEMENT
        points[i].add(p5.Vector.fromAngle(angle).mult(1)); ///VITESSE
    
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height));
            shinePoints[i] = random() < 0.08; // on redéfinit si c’est shiny
        } else {
            if (shinePoints[i]) {
                stroke(255);
                strokeWeight(1);
    
                // Longueur animée des rayons
                let len = map(sin(frameCount * 0.04+ i), -1, 1, 2, 10);
    
                // 4 petits traits autour du point
                line(points[i].x, points[i].y - len, points[i].x, points[i].y - len * 2);
                line(points[i].x, points[i].y + len, points[i].x, points[i].y + len * 2);
                line(points[i].x - len * 2, points[i].y, points[i].x - len, points[i].y);
                line(points[i].x + len, points[i].y, points[i].x + len * 2, points[i].y);
    
                // Le point au centre
                strokeWeight(3);
                point(points[i].x, points[i].y);
            } else {
                stroke(255);
                strokeWeight(3);
                point(points[i].x, points[i].y);
            }
        }
    }

}



let pointsForScene7 = []; 

function scene6() {
    background(0); // Fond noir
    push();
    translate(0, 300);
    noStroke();
    displayText("But beyond the apparent calm, something is brewing...");
    pop();

    if (points.length === 0) {
        wi = height; // Taille du champ de particules
        // Crée les points une fois au début
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
        }
    }

    for (let i = 0; i < points.length; i++) {
        // Utilise le bruit pour calculer les angles
        let angle = noise(points[i].x * 0.0005, points[i].y * 0.0005, frameCount * 0.0005) * TAU * 1000;
        points[i].add(p5.Vector.fromAngle(angle).mult(1)); // Déplace les points

        // Ne réinitialise pas les points brusquement, mais les laisse se déplacer continuellement
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height)); // Réinitialise quand ils dépassent les bords
        } else {
            stroke(255, 255);
            point(points[i].x, points[i].y); // Affiche les points
        }
    }
}

let explosion; // à mettre en haut, en variable globale

function scene7() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText("All of a sudden, it erupts.");
    pop();

    if (!explosion) {
        explosion = new Explosion(points);  // Pas besoin de cloner, les points sont déjà là
    }

    explosion.update();  // Met à jour l'explosion

    // Affichage des points dans l'explosion
    for (let pt of explosion.points) {
        stroke(255, 255);
        point(pt.x, pt.y);
    }
}

let explosion2; 

function scene8() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText("A solar flare, a monstrous wave of electromagnetic force, \n bursts into space, sending shockwaves across the cosmos."); // Affiche du texte
    pop();

    if (!explosion2) {
        let clonedFromExplosion = explosion.points.map(p => p.copy());
        explosion2 = new Explosion2(clonedFromExplosion);
    }

    explosion2.update();

    for (let pt of explosion2.points) {
        stroke(255, 255);
        point(pt.x, pt.y);
    }

}



let explosion2bis; 

function scene9() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText("Particles collide chaotically, fusing together under immense pressure."); // Affiche du texte
    pop();


    if (!explosion2bis) {
        let clonedFromExplosion = explosion2.points.map(p => p.copy());  // Cloner les points de l'explosion 2
        explosion2bis = new Explosion2bis(clonedFromExplosion);  // Initialiser explosion2bis
    }

    // Mettre à jour l'explosion (les points sont mis à jour ici)
    explosion2bis.update();

}
    

let explosion3; 

function scene10() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText("The ballet of dust is shattered. In its place, a dense,  \n solid core begins to form, compressed by forces it cannot comprehend."); // Affiche du texte
    pop();

    if (!explosion3) {
        let clonedFromExplosion = explosion2.points.map(p => p.copy()); // Utiliser les points de la scène 8
        explosion3 = new Explosion3(clonedFromExplosion);  // Créer Explosion3 avec les mêmes points
    }

    explosion3.update();

    // Affichage des particules
    for (let pt of explosion3.points) {
        stroke(255, 255);
        //point(pt.pos.x, pt.pos.y); // Affiche chaque particule à sa position
        point(pt.x, pt.y); // Afficher chaque point
    }

}




let meteor = [];


function scene11() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText("In the wake of the storm, the dust cloud is fading away. Where there was once only drifting nothingness, \n there is now something, a meteorite, raw and unpolished."); // Affiche du texte
    pop();

    // Créer de nouvelles météorites si nécessaire
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


    if (points.length === 0) {
        wi = height; // Taille du champ de particules
        // Crée les points une fois au début
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
        }
    }



    for (let i = 0; i < points.length; i++) {
        let p = points[i];

        // Déplacement des particules en Z pour donner un effet de mouvement
        p.z -= 2; // Vitesse de déplacement en Z (plus le chiffre est grand, plus la vitesse est lente)
        
        // Si la particule sort de l'écran, on la réinitialise
        if (p.z <= 0) {
            p.z = random(-500, 300); // Remise à une position aléatoire plus proche
        }

        // Calcul de la taille et de la transparence en fonction de la position en Z
        let scale = map(p.z, 50, 300, 2, 0.5); // La taille diminue à mesure que la particule approche
        let alpha = map(p.z, 50, 300, 255, 0); // L'alpha diminue aussi avec la profondeur

        // Affichage de la particule avec la perspective
        noStroke();
        fill(255, alpha);
        ellipse(p.x, p.y, scale, scale); // Utilisation d'un ellipse pour la particule
    }
}


let lineMvnt = [];
let speed = 7;

function scene12() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText("Small, fragile, yet imbued with the momentum of the cataclysm that forged it. Pulsar is born. \n And the universe, which had so long ignored its existence, has now cast it into motion.");
    pop();


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


    if (lineMvnt.length === 0 && points.length > 0) {
        for (let i = 0; i < points.length; i++) {
            let p = points[i];
            let m = new MvntCiel();
            m.x = p.x;
            m.y = p.y;
            m.z = random(width / 2);
            m.pz = m.z;
            lineMvnt.push(m);
        }
    }

    // Mise à jour et affichage des lignes
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
        lineMvnt.push(new MvntCiel());
    }

    pop();
}

function scene13() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText("Gravitational forces pull and twist its trajectory, it travels and discorver lifeless planets or hostile moons. \n Pulled by unseen hands, Pulsar is thrown into the void.");
    pop();

}

function scene14() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText(""); // Affiche du texte
    pop();

}

function scene15() {
    background(0);
    push();
    translate(0, 300);
    noStroke();
    displayText(""); // Affiche du texte
    pop();

}

function scene16() {


}

function scene17() {


}

function scene18() {


}

function scene19() {


}

function scene20() {


}


