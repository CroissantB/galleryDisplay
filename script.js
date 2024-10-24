fetch('images.txt')  // Replace 'images.txt' with the path to your file
            .then(response => response.text())
            .then(data => {
                const imageFiles = data.trim().split('\n');  // Split the file content into an array of image names
                console.log(imageFiles)
                const imageFolder = 'Displayed Pictures/';  // Folder where images are stored
                const container = document.getElementById('gallery-container');
                
                imageFiles.forEach(imageFile => {
                    // Create hyperlink for each image
                    const link = document.createElement('a');
                    link.href = `display.html?img=${imageFile}`;  // Pass image name to display.html
                    
                    // Create image element
                    const img = document.createElement('img');
                    img.src = imageFolder + imageFile;
                    img.alt = imageFile;
                    img.style.width = '30%';
                    img.style.margin = '10px';
                    
                    // Append the image to the link and the link to the container
                    link.appendChild(img);
                    container.appendChild(link);
                });
            })
            .catch(error => console.error('Error loading image list:', error));

/*const imageFiles = [
    'img0.jpg',
    'img1.jpg',
    // Add other image file names here
];

// Folder where images are stored (relative path)
const imageFolder = 'Displayed Pictures/';

// Get the container to append images
const container = document.getElementById('image-container');

// Loop through the image names and create <img> elements
imageFiles.forEach(imageFile => {
// Create hyperlink
const link = document.createElement('a');
link.href = `display.html?img=${imageFile}`;  // Pass the image file as a query parameter
            
// Create image element
const img = document.createElement('img');
img.src = imageFolder + imageFile;
img.style.width = '30%';  // Set width or other styles as desired
img.style.margin = '10px';
            
// Append the image to the link
link.appendChild(img);
            
// Append the link to the container
container.appendChild(link);
});*/