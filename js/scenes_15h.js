const scenes = [
    { text: "Scene 1: Introduction", audio: "audio/universe1.mp3", sketch: scene1 },
    { text: "Scene 2: Action", audio: "audio/universe1.mp3", sketch: scene2 },
    { text: "Scene 3: Action", audio: "audio/universe1.mp3", sketch: scene3 },
    { text: "Scene 3: Action", audio: "audio/universe1.mp3", sketch: scene4 },
    { text: "Scene 3: Action", audio: "audio/universe1.mp3", sketch: scene5 },
    { text: "Scene 3: Action", audio: "audio/universe1.mp3", sketch: scene6 },
    { text: "Scene 3: Action", audio: "audio/universe1.mp3", sketch: scene7 }
];

let currentScene = 0;
let sound;
let sceneTextPrinted = false; // Variable pour contrôler l'affichage du texte
let enterButton;

let points = [];
let n = 1000; // Nombre de points
let wi;


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
            point(points[i].x, points[i].y); // Affiche les points
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
            stroke(255, 255);
            point(points[i].x, points[i].y); // Affiche les points
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

function scene4() {
    background(0); // Fond noir
    translate(0, 300)
    displayText("In the absence of air, time, light or destination, \n thoses particles were calmlydancing without any perturbations...");
    let n = 1000; // Nombre de points

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
            stroke(255, 255);
            point(points[i].x, points[i].y); // Affiche les points
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
            stroke(255, 255);
            point(points[i].x, points[i].y); // Affiche les points
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
            point(points[i].x, points[i].y); // Affiche les points
        }
    }

    
    }
    

function scene7() {
        background(0); // Fond noir
        translate(0, 300)
        displayText("And then, suddenly, it erupts.");
    
       
        
        for(let i=0; i<stars.length; i++){
            stars[i].update();
            stars[i].show();
            
            if(random(0,4000)<1){
                stars[i].shine();
            }
        }



     }
        
    

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





function displayText(txt) {
    // Choisir la couleur du texte
    fill(255, 255, 255); // Blanc
    textSize(32); // Taille du texte
    textFont('Georgia'); // Choisir une police
    textAlign(CENTER, CENTER); // Centrer le texte
    text(txt, width / 2, height / 2); // Afficher le texte au centre de l'écran
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


function startScene() {
    userStartAudio().then(() => {
        loadScene(0);
        if (sound) sound.play();
    }).catch(e => console.warn("Audio context issue:", e));

    enterButton.remove(); // Supprime complètement le bouton après le clic
    enterButton.style('display', 'none');

}