class Robot {
    constructor(name, lifePoints, mobility, position, picture) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.mobility = mobility;
        this.position = position;
        this.picture = picture;
    }

    introduce() {
        if(this.mobility == 1) {
            console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " case par seconde. " + "Je suis à la case de coordonnées (" + this.position.a + "," + this.position.b + ").");
        } else {
            console.log("Bonjour, je m'appelle " + this.name + ". J'ai " + this.lifePoints + " points de vie et je me déplace à " + this.mobility + " cases par seconde. " + "Je suis à la case de coordonnées (" + this.position.a + "," + this.position.b + ").");
        }
    }

    move() {
        if(this.mobility == 1) {
            var bas = prompt("Allez en bas ? (" + this.mobility + " case maximum)");
            /*var bas = prompt("Allez en bas ? (" + this.mobility + " case maximum)");
            var gauche = prompt("Allez à gauche ? (" + this.mobility + " case maximum)");
            var haut = prompt("Allez en haut ? (" + this.mobility + " case maximum)");*/
        } else {
            var bas = prompt("Allez en bas ? (" + this.mobility + " cases maximum)");
            /*var bas = prompt("Allez en bas ? (" + this.mobility + " cases maximum)");
            var gauche = prompt("Allez à gauche ? (" + this.mobility + " cases maximum)");
            var haut = prompt("Allez en haut ? (" + this.mobility + " cases maximum)");*/
        }


        if(bas != undefined && bas <= this.mobility) {
            this.position.a = this.position.a + parseInt(bas);
            //console.log(this.position.a);
        }

        /*if(bas != undefined && bas <= this.mobility) {
            this.position.b = this.position.b + parseInt(bas);
            //console.log(this.position.b);
        }

        if(gauche != undefined && gauche <= this.mobility) {
            this.position.a = this.position.a - parseInt(gauche);
            //console.log(this.position.a);
        }

        if(haut != undefined && haut <= this.mobility) {
            this.position.b = this.position.b - parseInt(haut);
            //console.log(this.position.b);
        }*/

        /*if(this.position[0] == -1) {
            this.position[0] = 9;
        }

        if(this.position[1] == -1) {
            this.position[1] = 9;
        }

        if(this.position[1] == 10) {
            this.position[0] = this.position[0] + 1;
            this.position[1] = 0;
        }*/

        if(this.position.a < 0) {
            this.position.a = 0;
        }

        if(this.position.b < 0) {
            this.position.b = 0;
        }
    }

    seDeplacerAleatoirement(nombreDeplacement) {
        for(var x = 0; x < nombreDeplacement; x++) {
            this.move();
            this.introduce();
        }
    }
}



