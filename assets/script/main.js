let countLimit = 20;

let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           this.state = Math.floor(Math.random() * 2);
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           let result = "";

           if (this.state === 0) {
               result = "Heads";
           }
           else {
               result = "Tails";
           }

           return result;
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = "assets/images/heads.png";
        }
        else {
            image.src = "assets/images/tails.png";
        }

        image.height = "100";
        image.width = "100";
        return image;
    }
};

/*for (let counter = 0; counter < 20; counter++) {
    coin.flip();
    console.log(coin.toString());
}*/

display20Flips();
display20Images();

function display20Flips() {
    let flipString = "";

    document.body.innerHTML = countLimit + " flips as text: <br>";
    for (let flipCount = 0; flipCount < countLimit; flipCount++) {
        coin.flip();
        let newDiv = document.createElement("div");
        newDiv.innerHTML = coin.toString();
        document.body.append(newDiv);
    }

}

function display20Images() {
    document.body.innerHTML += "<br><br>" + countLimit + " flips as images: <br>";

    for (let flipCount = 0; flipCount < countLimit; flipCount++) {
        coin.flip();

        let newImage = coin.toHTML();
        document.body.append(newImage);
    }
}