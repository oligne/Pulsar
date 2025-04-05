function setup() {
    createCanvas(windowWidth, windowHeight);
    background(30);
    loadScene(0);


    stars = new Array(floor(windowWidth+windowHeight));
    for(let i=0; i<stars.length; i++){
        stars[i] = new Star();
    }  

    stars2 = new Array(floor(windowWidth+windowHeight));
    for(let i=0; i<stars2.length; i++){
        stars2[i] = new Star2();
    }  

    for (let i = 0; i < numParticles; i++) {
        // Crée et ajoute des particules à la scène
        let loc = createVector(random(width), random(height));
        let dir = createVector(1, 1);
        let speed = random(0.5, 0.75);
        particles.push(new Particle(loc, dir, speed));
    }

    if (currentScene === 9) {
        particlesScene9 = new Array(255).fill().map(() => [
            random(width),   // Position x
            random(height),  // Position y
            random(-1, 1),   // Vitesse x
            random(-1, 1)    // Vitesse y
        ]);
    }
    
    if (currentScene === 10) {
        particlesScene9 = new Array(255).fill().map(() => [
            random(width/4),   // Position x
            random(height/4),  // Position y
            random(-1, 1),   // Vitesse x
            random(-1, 1)    // Vitesse y
        ]);
    }

    if (currentScene === 14) {
        for (let i = 0; i < 100; i++) {
            drifters.push(new Drifter());
          }

          console.log("Drifters initialized:", drifters.length);
    }

} 






function draw() {
    background(0, 2000); // Légère persistance
    
    
        let scene = scenes[currentScene];
    

        if (scene.sketch) {
            scene.sketch(); // On appelle la scène active
        }

        if (currentScene === 7 || currentScene === 8) {
            handleParticleUpdates();
        }

    }
    
    function handleParticleUpdates() {
        for (let p of particles) {
            //p.update();
            p.show();
        }

        }

     
    


function mousePressed() {
    currentScene = (currentScene + 1) % scenes.length;
    loadScene(currentScene);
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
    // Supprimer le bouton une fois que l'utilisateur clique dessus
    enterButton.hide();
    loadScene(0); // Charger la première scène

    userStartAudio().then(() => {
        loadScene(0);
        if (sound) sound.play();
    }).catch(e => console.warn("Audio context issue:", e));

    enterButton.remove(); // Supprime complètement le bouton après le clic
    enterButton.style('display', 'none');

    if (scenes !== scene7) {
        mouseEffectActive = false;
    }
    if (scenes !== scene8) {
        mouseEffectActive = false;
    }

}



class Star{
	constructor(){
		this.x = random(0,width);
		this.y = random(0,height);
		this.z = random(0,500);
		this.rad = map(this.z, 0, 500, 1, 0.1);
		this.shineAppear = false;
		this.lenMAX = map(this.z, 0, 500, 30, 4);
		this.len = this.lenMAX;
	}
	update(){
		this.x += map(this.z, 0, 500, 2.0, 0.1)*map(mouseX, 0, width, -3, 3);
		this.y += map(this.z, 0, 500, 2.0, 0.1)*map(mouseY, 0, height, -3, 3);		
		
		if(this.x<0){
			this.x = width;
		}
		if(this.x>width){
			this.x = 0;
		}
		if(this.y<0){
			this.y = height;
		}
		if(this.y>height){
			this.y = 0;
		}
		
		
		if(this.len < this.lenMAX){
			this.len += 1;
		}
	}

	show(){
		//noStroke();
        strokeWeight(1); // Taille du point
		fill(255);
		ellipse(this.x, this.y, this.rad, this.rad);		
		
		if(this.len < this.lenMAX){
			stroke(255);
			line(this.x, this.y-this.len, this.x, this.y-this.lenMAX);
			line(this.x, this.y+this.len, this.x, this.y+this.lenMAX);
			line(this.x-this.lenMAX, this.y, this.x-this.len, this.y);
			line(this.x+this.lenMAX, this.y, this.x+this.len, this.y);
		}
	}
    
	shine(){
		if(this.len >= this.lenMAX){
			this.len = 1;
		}
	}
	
}

let speed = 0.2


class Star2 {
    constructor() {
      this.x = random(-width / 2, width / 2);
      this.y = random(-height / 2, height / 2);
      this.z = random(width / 2);
      this.pz = this.z;
    }
  
    update2() {
      this.z = z - 0.1;
  
      if (this.z < 1) {
        this.z = width / 2;
        this.x = random(-width / 2, width / 2);
        this.y = random(-height / 2, height / 2);
        this.pz = this.z;
      }
    }
  
    show2() {
      fill(255);
      noStroke();
  
      // Position actuelle (calculée à partir de z)
      let sx = map(this.x / this.z, 0, 1, 0, width / 2);
      let sy = map(this.y / this.z, 0, 1, 0, height / 2);
  
      // Taille en fonction de la profondeur
      let r = map(this.z, 0, width / 2, 16, 0);
      // ellipse(sx, sy, r, r); // si tu veux dessiner un cercle
  
      // Position précédente
      let px = map(this.x / this.pz, 0, 1, 0, width / 2);
      let py = map(this.y / this.pz, 0, 1, 0, height / 2);
  
      this.pz = this.z;
  
      // Dessiner une traînée
      stroke(255);
      line(px, py, sx, sy);
    }
  }
  






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



function corrigerWEBGL(){
	translate(window.width/2*(-1),window.height/2*(-1)) 
	//translate(-width / 2, -height / 2)
    translate(width / 2, height / 3)
}





let clickDuration = 1000; // Durée de l'effet (en millisecondes)
let clickTime = 0; // Temps du clic
let effectActive = false; // Si l'effet est actif


class Particle {
    constructor(loc, dir, speed) {
        this.loc = loc; // Position initiale
        this.vel = createVector(0, 0); // Vitesse initiale
        this.acc = createVector(0, 0); // Accélération initiale
        this.dir = dir; // Direction initiale
        this.speed = speed; // Vitesse de déplacement
        this.noiseOffset = random(1000); // Décalage unique pour chaque particule
    }

    // Met à jour la position avec bruit de Perlin
    updatePosition() {
        // Utilisation du bruit de Perlin pour déterminer la direction
        let angle = noise(this.loc.x * noiseScale + this.noiseOffset, 
                          this.loc.y * noiseScale + this.noiseOffset) * TWO_PI * 4;
        let force = p5.Vector.fromAngle(angle); // Vecteur de force
        this.acc.add(force); // Applique la force à l'accélération
        this.vel.add(this.acc); // Applique l'accélération à la vitesse
        this.vel.limit(this.speed); // Limite la vitesse
        this.loc.add(this.vel); // Met à jour la position
        this.acc.mult(0); // Réinitialise l'accélération
    }

    // Affiche la particule sous forme de point
    show() {
        stroke(255); // Couleur de la particule
        strokeWeight(2); // Taille du point
        point(this.loc.x, this.loc.y); // Affiche la particule
    }

    mouseDetect() {
    let mousePos = createVector(mouseX, mouseY);
        let distance = this.loc.dist(mousePos);

        // Si la souris est pressée et que l'effet n'est pas encore activé
        if (mouseIsPressed && !effectActive) {
            clickTime = millis(); // Enregistre l'heure du clic
            effectActive = true; // Active l'effet
        }

        // Si l'effet est activé et que la durée est passée, désactive-le
        if (effectActive && millis() - clickTime > clickDuration) {
            effectActive = false; // Désactive l'effet après la durée
        }

        let force = p5.Vector.sub(mousePos, this.loc); // Direction vers la souris
        let forceMag = 0;

        if (effectActive) {
            forceMag = this.speed * (1 / -distance) * 4000; // Force d'attraction forte
        } else {
            forceMag = this.speed * (1 / distance) * 2000; // Force d'attraction plus faible
        }

        force.setMag(forceMag); // Applique la force
        this.vel.add(force); // Ajoute la force à la vitesse

        this.loc.add(this.vel); // Met à jour la position
    }


    mouseDetectBis() {
        let mousePos = createVector(mouseX, mouseY);
            let distance = this.loc.dist(mousePos);
    
            // Si la souris est pressée et que l'effet n'est pas encore activé
            if (mouseIsPressed && !effectActive) {
                clickTime = millis(); // Enregistre l'heure du clic
                effectActive = true; // Active l'effet
            }
    
            // Si l'effet est activé et que la durée est passée, désactive-le
            if (effectActive && millis() - clickTime > clickDuration) {
                effectActive = false; // Désactive l'effet après la durée
            }
    
            let force = p5.Vector.sub(mousePos, this.loc); // Direction vers la souris
            let forceMag = 0;
    
            if (effectActive) {
                forceMag = this.speed * (1 / distance) * 4000; // Force d'attraction forte
            } else {
                forceMag = this.speed * (1 / -distance) * 2000; // Force d'attraction plus faible
            }
    
            force.setMag(forceMag); // Applique la force
            this.vel.add(force); // Ajoute la force à la vitesse
    
            this.loc.add(this.vel); // Met à jour la position
        }

    mouseDetect2() {
        let mousePos2 = createVector((windowWidth/2), (windowHeight/2));
            let distance = this.loc.dist(mousePos2);
    
            // // Si la souris est pressée et que l'effet n'est pas encore activé
            // if (mouseIsPressed && !effectActive) {
            //     clickTime = millis(); // Enregistre l'heure du clic
            //     effectActive = true; // Active l'effet
            // }
    
            // // Si l'effet est activé et que la durée est passée, désactive-le
            // if (effectActive && millis() - clickTime > clickDuration) {
            //     effectActive = false; // Désactive l'effet après la durée
            // }
    
            let force = p5.Vector.sub(mousePos2, this.loc); // Direction vers la souris
            let forceMag = 0;
    
            if (effectActive) {
                forceMag = this.speed * (1 / -distance) * 4000; // Force d'attraction forte
            } else {
                forceMag = this.speed * (1 / distance) * 2000; // Force d'attraction plus faible
            }
    
            force.setMag(forceMag); // Applique la force
            this.vel.add(force); // Ajoute la force à la vitesse
    
            this.loc.add(this.vel); // Met à jour la position
        }
}




    function resetParticles() {
        particles2 = [];  // Réinitialise le tableau des particules
        for (let i = 0; i < numParticles; i++) {
            particles2.push(new Particle(random(width), random(height)));  // Crée de nouvelles particules
        }
    }


    let particlesScene9 = []; 
    let particlesScene10 = [];

    const targetDamping = 0.72;
    const targetChaseForce = 2;
    let damping = targetDamping;
    let chaseForce = targetChaseForce;
    const distanceToDrawLine = 100;



    function createParticle(x, y) {
        return {
            position: createVector(x, y),
            velocity: createVector(random(-1, 1), random(-1, 1)),
            acceleration: createVector(0, 0),
            mass: random(1, 5), // Masse de la particule pour plus de réalisme
            update: function() {
                // Applique l'accélération à la vitesse, puis la vitesse à la position
                this.velocity.add(this.acceleration);
                this.position.add(this.velocity);
                this.acceleration.mult(0); // Réinitialise l'accélération
                
                // Applique la friction (damping)
                this.velocity.mult(damping);
            },
            applyForce: function(other) {
                // Calcule la force de poursuite entre deux particules
                let dir = createVector(other.position.x - this.position.x, other.position.y - this.position.y);
                let dist = dir.mag();
                if (dist > 0 && dist < 50) { // Force de poursuite si la distance est suffisamment proche
                    dir.normalize();
                    dir.mult(chaseForce / dist); // Applique la force de poursuite
                    this.acceleration.add(dir);
                }
            },
            show: function() {
                fill(255, 150); // Couleur des particules
                //noStroke();
                strokeWeight(1); // Taille du point
                ellipse(this.position.x, this.position.y, 2, 2); // Dessine la particule
            }
        };
    }


    const targetDamping2 = 0.1;
    const targetChaseForce2 = 100;
    let damping2 = targetDamping2;
    let chaseForce2 = targetChaseForce2;
    const distanceToDrawLine2 = 1;




    function createParticle2(x, y) {
        return {
            position: createVector(x, y),
            velocity: createVector(random(-5, 5), random(-5, 5)),
            acceleration: createVector(0, 0),
            mass: random(5, 10), // Masse de la particule pour plus de réalisme
            update: function() {
                // Applique l'accélération à la vitesse, puis la vitesse à la position
                this.velocity.add(this.acceleration);
                this.position.add(this.velocity);
                this.acceleration.mult(0); // Réinitialise l'accélération
                
                // Applique la friction (damping)
                this.velocity.mult(damping2);
            },
            applyForce: function(other) {
                // Calcule la force de poursuite entre deux particules
                let dir = createVector(other.position.x - this.position.x, other.position.y - this.position.y);
                let dist = dir.mag();
                if (dist > 0 && dist < 100) { // Force de poursuite si la distance est suffisamment proche
                    dir.normalize();
                    dir.mult(chaseForce2 / dist); // Applique la force de poursuite
                    this.acceleration.add(dir);
                }
            },
            show: function() {
                fill(255); // Couleur des particules
                strokeWeight(1); // Taille du point
                //noStroke();
                ellipse(this.position.x, this.position.y, 2, 2); // Dessine la particule
            }
        };
    }


    
    function drawDrifters() {
        for (let i = drifters.length - 1; i >= 0; i--) {
          let d = drifters[i];
          d.update();
          d.show();
          if (d.finished()) {
            drifters[i] = new Drifter();
          }
        }
      }


      
      class Drifter {
        constructor() {
          this.x = width / 2 + random(-50, 50);
          this.y = height / 2 + random(-50, 50);
          this.vx = random(-0.5, 0.5);
          this.vy = random(-1, 1);
          this.alpha = 255;
          //this.size = random(4, 10);
          this.size = 2;
        }
      
        finished() {
          return this.alpha < 0;
        }
      
        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.alpha -= 1.5;
        }
      
        show() {
          noStroke();
          fill(200, 180, 255, this.alpha);
          ellipse(this.x, this.y, this.size);
        }
      }
