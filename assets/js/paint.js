// create array of paint Colors
let paintColors = ["Lime Green", "Medium Brown", "Royal Blue", "Solid Red", "Solid White", "Solid Black", "Solid Cyan", "Solid Purple", "Solid Yellow"];
// create array of paint Prices (same index as paint color)
let paintPrices = ["$14.99", "$11.14", "$22.99", "$13.42", "$21.98", "$4.99", "$8.22", "$11.99", "$14.99"];

// function to add event listeners to each image
function configureListeners() {
    let images = document.querySelectorAll("img"); 
     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        images[i].addEventListener("mouseover", addOpacity) // when mouse hovers over image, add Opacity
        images[i].addEventListener("mouseleave", removeOpacity);  // when mouse leaves an images, remove Opacity 
    } 
}

// function that adds Opacity
function addOpacity(event) {
    // add appropriate CSS class (dim class changes opacity to 0.1555)
    event.target.classList.add("dim"); // add dim class to the target (paint square that is moused over)
    getProductInfo(event.target.id); // get the product information for the paint square you are mousing over    
}

// function that removes opacity
function removeOpacity(event) {
     //remove appropriate CSS class
     event.target.classList.remove("dim");

     // select the color price element
    let element = document.getElementById('color-price');
        element.textContent = ''; // remove text from the element (no longer display info)
        
    // select the color name element
    let color = document.getElementById('color-name');
        color.textContent = ''; // remove text from the element (no longer display info)

    
    event.preventDefault(); // do not run default action
}

// function that gets the targeted product information (takes the id of the targeted image)
function getProductInfo(paintColor) {
    let price; // create variable for the paint price
    let colorName;  // create variable for the color name
    
    // switch based on the target id of the image
    switch (paintColor) { 
        // Lime Green
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price
            price = paintPrices[0]; // set the price variable to the targeted paint price (from array)
            colorName = paintColors[0]; // set the color name to the targeted paint color (from array)
            updatePrice(colorName, price); // update the HTML elements for price and color      
            break;  
        // Medium Brown
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price 
            price = paintPrices[1];
            colorName = paintColors[1];
            updatePrice(colorName, price);    
            break; 
        // Royal Blue
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = paintPrices[2];
            colorName = paintColors[2];
            updatePrice(colorName, price); 
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price
            price = paintPrices[3];
            colorName = paintColors[3];
            updatePrice(colorName, price);   
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            price = paintPrices[4];
            colorName = paintColors[4];
            updatePrice(colorName, price);        
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price 
            price = paintPrices[5];
            colorName = paintColors[5];
            updatePrice(colorName, price);        
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            price = paintPrices[6];
            colorName = paintColors[6];
            updatePrice(colorName, price);  
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price
            price = paintPrices[7];
            colorName = paintColors[7];
            updatePrice(colorName, price);    
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = paintPrices[8];
            colorName = paintColors[8];
            updatePrice(colorName, price); 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById("color-price"); // select element with corresponding id
        colorPrice.innerHTML = price;// display price

        
        let color = document.getElementById("color-name")// select element with corresponding id
        //display color name
        color.innerHTML = colorName;
    }
    
}
