const scenes = [
    { text: "Scene 1: Introduction", audio: "audio/universe1.mp3", sketch: scene1 },
    { text: "Scene 2: Action", audio: "audio/universe1.mp3", sketch: scene2 },
    { text: "Scene 3: Action", audio: "audio/universe1.mp3", sketch: scene3 },
    { text: "Scene 4: Action", audio: "audio/universe1.mp3", sketch: scene4 },
    { text: "Scene 5: Action", audio: "audio/universe1.mp3", sketch: scene5 },
    { text: "Scene 6: Action", audio: "audio/universe1.mp3", sketch: scene6 },
    { text: "Scene 7: Action", audio: "audio/universe2.mp3", sketch: scene7 },
    { text: "Scene 8: Action", audio: "audio/universe2.mp3", sketch: scene8 },
    { text: "Scene 9: Action", audio: "audio/universe2.mp3", sketch: scene9 },
    { text: "Scene 7: Action", audio: "audio/universe2.mp3", sketch: scene10 },
    { text: "Scene 8: Action", audio: "audio/universe2.mp3", sketch: scene11 },
    { text: "Scene 8: Action", audio: "audio/universe2.mp3", sketch: scene12 },
    { text: "Scene 8: Action", audio: "audio/universe2.mp3", sketch: scene13 },
    { text: "Scene 8: Action", audio: "audio/universe2.mp3", sketch: scene14 },
    { text: "Scene 8: Action", audio: "audio/universe2.mp3", sketch: scene15 }
];


let mouseEffectActive = false;

let currentScene = 0;
let sound;
let enterButton;

let points = [];
let points2 = [];
let n = 1000; // Nombre de points
let wi;

///SCENE 04
let stars;




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
        // Utilise le bruit pour calculer les angles
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU * 10;
        points[i].add(p5.Vector.fromAngle(angle).mult(1)); // Déplace les points

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

translate(0, 300)
displayText("Once upon a time, somewhere into the large void of the universe...");


if (points.length === 0) {
        wi = height; // Taille du champ de particules
        // Crée les points une fois au début
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
        }
    }

    for (let i = 0; i < points.length; i++) {
        // Utilise le bruit pour calculer les angles
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU * 10;
        points[i].add(p5.Vector.fromAngle(angle).mult(1)); // Déplace les points

        // Ne réinitialise pas les points brusquement, mais les laisse se déplacer continuellement
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height)); // Réinitialise quand ils dépassent les bords
        } else {
            ///stroke(255, 255);
            point(points[i].x, points[i].y, 2, 2); // Affiche les points
        }
    }

}

function scene3() {
    translate(0, 300)
    displayText("Far, far away of everything that we know, \n some dust powder was flowting endlessly through the nothingness of the sky.");

    
    if (points.length === 0) {
        wi = height; // Taille du champ de particules
        // Crée les points une fois au début
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
        }
    }

    for (let i = 0; i < points.length; i++) {
        // Utilise le bruit pour calculer les angles
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU * 1;
        points[i].add(p5.Vector.fromAngle(angle).mult(1)); // Déplace les points

        // Ne réinitialise pas les points brusquement, mais les laisse se déplacer continuellement
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height)); // Réinitialise quand ils dépassent les bords
        } else {
            //stroke(255, 255);
            point(points[i].x, points[i].y); // Affiche les points
        }
    }
    

}

function scene4() {
    background(0); // Fond noir
    translate(0, 300);
    displayText("In the absence of air, time, light or destination, \n thoses particles were calmlydancing without any perturbations...");
    corrigerWEBGL(); 

    for(let i=0; i<stars.length; i++){
        stars[i].update();
        stars[i].show();
        
        if(random(0,4000)<1){
            stars[i].shine();
        }
    }


}

function scene5() {
    ///background(0); // Fond noir
    translate(0, 300)
    displayText("The vacuum is vast, cold, and undisturbed.");

   
    if (points.length === 0) {
        wi = height; // Taille du champ de particules
        // Crée les points une fois au début
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-100, 100), random(-100, 100)));
        }
    }

    for (let i = 0; i < points.length; i++) {
        // Utilise le bruit pour calculer les angles
        let angle = noise(points[i].x * 0.0001, points[i].y * 0.0001, frameCount * 0.0001) * TAU * 1;
        points[i].add(p5.Vector.fromAngle(angle).mult(5)); // Déplace les points

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

function scene6() {
    background(0); // Fond noir
    translate(0, 300)
    displayText("But beyond the apparent calm, something is brewing...");

    if (points.length === 0) {
        wi = height; // Taille du champ de particules
        // Crée les points une fois au début
        for (let i = 0; i < n; i++) {
            points.push(createVector(random(-width, width), random(-height, height)));
        }
    }

    for (let i = 0; i < points.length; i++) {
        // Utilise le bruit pour calculer les angles
        let angle = noise(points[i].x * 0.0005, points[i].y * 0.005, frameCount * 0.005) * TAU * 1000;
        points[i].add(p5.Vector.fromAngle(angle).mult(5)); // Déplace les points

        // Ne réinitialise pas les points brusquement, mais les laisse se déplacer continuellement
        if (abs(points[i].x) > width || abs(points[i].y) > height) {
            points[i] = createVector(random(-width, width), random(-height, height)); // Réinitialise quand ils dépassent les bords
        } else {
            stroke(255, 255);
            point(points[i].x, points[i].y); // Affiche les points
        }
    }

    }
    
// Variables globales pour les particules
let numParticles = 3000; 
let particles = [];
let noiseScale = 0.01;
let fade = 100;


 function scene7() {
        background(0); // Fond noir
        translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
        displayText("And then, suddenly, it erupts."); // Affiche du texte
        corrigerWEBGL(); // Placeholder pour la correction WEBGL (si nécessaire)
        
        fill(255, fade); // Définit la couleur des particules avec une transparence
        
        // Met à jour et affiche chaque particule
        for (let p of particles) {
            p.mouseDetectBis(); // Ajoute l'interaction avec la souris
            p.updatePosition(); // Met à jour la position avec bruit
            p.show(); // Affiche la particule
        }

}



function scene8() {
    background(0); // Fond noir
    translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
    displayText("A solar flare, a monstrous wave of electromagnetic force, \n bursts into space, sending shockwaves across the cosmos."); // Affiche du texte
    corrigerWEBGL(); // Placeholder pour la correction WEBGL (si nécessaire)
    
    fill(255, fade); // Définit la couleur des particules avec une transparence
        
    // Met à jour et affiche chaque particule
    for (let p of particles) {
        p.mouseDetect(); // Ajoute l'interaction avec la souris
        p.updatePosition(); // Met à jour la position avec bruit
        p.show(); // Affiche la particule
    }


}




function scene9() {
    background(0); // Fond noir
    translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
    displayText("Particles collide chaotically, fusing together under immense pressure."); // Affiche du texte
    corrigerWEBGL(); // Placeholder pour la correction WEBGL (si nécessaire)

    for (let p of particles) {
        p.mouseDetect2(); // Ajoute l'interaction avec la souris
        p.updatePosition(); // Met à jour la position avec bruit
        p.show(); // Affiche la particule
    }

    // Si les particules ne sont pas encore créées, les initialiser
    if (particlesScene9.length === 0) {
        for (let i = 0; i < 500; i++) {
            particlesScene9.push(createParticle(random(width), random(height))); // Crée des particules aléatoires
        }
    }
    
    // Met à jour les particules
    for (let i = 0; i < particlesScene9.length; i++) {
        let p = particlesScene9[i];
        
        // Met à jour la position des particules en fonction de la vitesse et des forces
        p.update();
        
        // Dessine les particules
        p.show();
        
        // Calcule la force de poursuite entre les particules
        for (let j = 0; j < particlesScene9.length; j++) {
            if (i !== j) {
                p.applyForce(particlesScene9[j]);
            }
        }
    }
}


let fadeSpeed = 0.1

function scene10() {

    ////    https://openprocessing.org/sketch/2318127   /////
    background(0); // Fond noir
    translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
    displayText("The ballet of dust is shattered. In its place, a dense, \n solid core begins to form, compressed by forces it cannot comprehend.");
    //corrigerWEBGL(); // Placeholder pour la correction WEBGL (si nécessaire)


 // Si les particules ne sont pas encore créées, les initialiser
 if (particlesScene10.length === 0) {
    for (let i = 0; i < 200; i++) {
        particlesScene10.push(createParticle2(random(windowWidth/2+(windowWidth/2)), random(windowHeight/2+(windowHeight/2)))); // Crée des particules aléatoires
    }
}

// Met à jour les particules
for (let i = 0; i < particlesScene10.length; i++) {
    let p = particlesScene10[i];
    
    // Met à jour la position des particules en fonction de la vitesse et des forces
    p.update();
    
    // Dessine les particules
    p.show();
    
    // Calcule la force de poursuite entre les particules
    for (let j = 0; j < particlesScene10.length; j++) {
        if (i !== j) {
            p.applyForce(particlesScene10[j]);
        }
    }
}


}

function scene11() {
    background(0); // Fond noir
    translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
    displayText("In the wake of the storm, the dust cloud is fading away. Where there was once only drifting nothingness, \n there is now something, a meteorite, raw and unpolished.");


}


function scene12() {
    background(0); // Fond noir
    translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
    displayText("Small, fragile, yet imbued with the momentum of the cataclysm that forged it. Pulsar is born. \n And the universe, which had so long ignored its existence, has now cast it into motion.");



}


function scene13() {
    background(0); // Fond noir
    translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
    displayText("Gravitational forces pull and twist its trajectory, it travels and discorver lifeless planets or hostile moons. \n Pulled by unseen hands, Pulsar is thrown into the void.");




}




let drifters = [];

let stars2; 

function scene14() {
    background(0); // Fond noir
    translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
    displayText("Its path is no longer its own and It tumbles, helpless, across the cold expanse. \n No voice calls for it, no force welcomes it. It’s a passenger in the endless dark.");


    //drawDrifters();

    for(let i=0; i<stars2.length; i++){
        stars2[i].update2();
        stars2[i].show2();
        
    }



}



function scene15() {
    background(0); // Fond noir
    translate(0, 300); // Décale l'origine pour que le texte et les particules se placent correctement
    displayText("X");




}
