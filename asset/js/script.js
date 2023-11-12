document.addEventListener('DOMContentLoaded', function () {
    // Slider 1
    const slider1 = document.getElementById('slider1');
    const thumbnails1 = document.getElementById('thumbnails1');

    // Slider 2
    const slider2 = document.getElementById('slider2');
    const thumbnails2 = document.getElementById('thumbnails2');

    // Slider 3
    const slider3 = document.getElementById('slider3');
    const thumbnails3 = document.getElementById('thumbnails3');

    // Slider 4
    const slider4 = document.getElementById('slider4');
    const thumbnails4 = document.getElementById('thumbnails4');

    // Slider 5
    const slider5 = document.getElementById('slider5');
    const thumbnails5 = document.getElementById('thumbnails5');

    // Slider 6
    const slider6 = document.getElementById('slider6');
    const thumbnails6 = document.getElementById('thumbnails6');

    // Fungsi untuk membuat slider
    function createSlider(sliderElement, thumbnailElement) {
        const images = sliderElement.querySelectorAll('img');
        const thumbnails = thumbnailElement.querySelectorAll('.thumbnail');
        let currentImage = 0;

        function showImage(index) {
            images.forEach(img => (img.style.display = 'none'));
            images[index].style.display = 'block';
        }

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', function () {
                currentImage = index;
                showImage(currentImage);
            });
        });

        function startSlider() {
            showImage(currentImage);
            currentImage = (currentImage + 1) % images.length;
        }

        setInterval(startSlider, 3000); // Ganti gambar setiap 3 detik
    }

    // Terapkan fungsi slider pada elemen-elemen yang diinginkan
    createSlider(slider1, thumbnails1);
    createSlider(slider2, thumbnails2);
    createSlider(slider3, thumbnails3);
    createSlider(slider4, thumbnails4);
    createSlider(slider5, thumbnails5);
    createSlider(slider6, thumbnails6);
    // ... (Tambahkan elemen slider dan thumbnail yang lain jika diperlukan) ...
});