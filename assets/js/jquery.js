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

function downloadSymbol() {
    const container = document.getElementById('sym-canvas');
    html2canvas(container).then(canvas => {
        const link = document.createElement('a');
        link.download = 'warning-classification.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}