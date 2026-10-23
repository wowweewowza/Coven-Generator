function changeLayer(layerId, imagePath) {
    const layer = document.getElementById(layerId);
    if (imagePath === "") {
        layer.src = ""; // Empty so it hides the png
        layer.style.display = "none";
    } else {
        layer.src = imagePath; // Updates to selected png
        layer.style.display = "block";
    }
}

async function downloadSymbol() {
    const imageLayers =[
        document.getElementById('base').value,
        document.getElementById('type').value,
        document.getElementById('containability').value,
        document.getElementById('ease_of_use').value,
        document.getElementById('danger_level').value
    ];

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous'; 
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    };

    try {
        const images = await Promise.all(imageSources.map(loadImage));

        canvas.width = images[0].naturalWidth;
        canvas.height = images[0].naturalHeight;

        images.forEach((img) => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        });

        canvas.toBlob((blob) => {
            const link = document.createElement('a');
            link.download = 'custom-combination.png';
            link.href = URL.createObjectURL(blob);
            link.click();
            URL.revokeObjectURL(link.href);
        }, 'image/png');
    } catch (error) {
        console.error("Error generating dynamic image:", error);
    }
}