const previewDiv = document.getElementById('image');
const originalText = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";

previewDiv.innerHTML = originalText;

function upDate(previewPic) {
    const altText = previewPic.alt;
    const imageSource = previewPic.src;
    
    previewDiv.innerHTML = altText;
    previewDiv.style.backgroundImage = `url('${imageSource}')`;
    previewDiv.style.color = "transparent"; 
}

function unDo() {
    previewDiv.style.backgroundImage = 'url("")';
    previewDiv.style.color = "#333"; 
    previewDiv.innerHTML = originalText;
}