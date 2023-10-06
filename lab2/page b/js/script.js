var imgs = ["images/main/image-1.jpg","images/main/image-2.jpg","images/main/image-3.jpg"];
var currentIndex = 0;
 function showImage(index) {
     var image = document.getElementById('img1');
     image.src = imgs[index];
 }

 function next_Click() {
     currentIndex++;
     if (currentIndex>=imgs.length){
         currentIndex = 0;
     }
     showImage(currentIndex);
 }
function prev_Click() {
    currentIndex--;
    if (currentIndex < 0){
        currentIndex=imgs.length-1;
    }
    showImage(currentIndex);
}
