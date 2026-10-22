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