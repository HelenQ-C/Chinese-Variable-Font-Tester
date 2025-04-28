const weightSlider = document.getElementById('weightSlider');

const bevelSlider = document.getElementById('bevelSlider');
let hasScrolledToAlimama = false;

function scrollToAlimama() {
  const alimamaSection = document.getElementById('alimamaSection');
  if (!alimamaSection) return;

  const rect = alimamaSection.getBoundingClientRect();
  const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

  if (!inView) {
    alimamaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

bevelSlider.addEventListener('input', () => {
  updateFontSettings();
  updateSliderBackground2();
  scrollToAlimama();
});

const sizeSlider = document.getElementById('sizeSlider');
const texts = document.querySelectorAll('.font-text');

function updateFontSettings() {
  const weight = weightSlider.value;
  const bevel = bevelSlider.value;
  const fontSize = sizeSlider.value;
  
  texts.forEach(text => {
    text.style.fontVariationSettings = `"wght" ${weight}, "BEVL" ${bevel}`;
    text.style.fontSize = `${fontSize}px`;
  });
}

function updateSliderBackground() {
  const value = (weightSlider.value - weightSlider.min) / (weightSlider.max - weightSlider.min) * 100;
  weightSlider.style.background = `linear-gradient(to right, black 0%, black ${value}%, white ${value}%, white 100%)`;
}

function updateSliderBackground2() {
  const value = (bevelSlider.value - bevelSlider.min) / (bevelSlider.max - bevelSlider.min) * 100;
  bevelSlider.style.background = `linear-gradient(to right, black 0%, black ${value}%, white ${value}%, white 100%)`;
}

function updateSliderBackground3() {
  const value = (sizeSlider.value - sizeSlider.min) / (sizeSlider.max - sizeSlider.min) * 100;
  sizeSlider.style.background = `linear-gradient(to right, black 0%, black ${value}%, white ${value}%, white 100%)`;
}

sizeSlider.addEventListener('input', updateSliderBackground3);


// Attach events
weightSlider.addEventListener('input', updateFontSettings);
bevelSlider.addEventListener('input', updateFontSettings);
sizeSlider.addEventListener('input', updateFontSettings);

weightSlider.addEventListener('input', updateSliderBackground);
bevelSlider.addEventListener('input', updateSliderBackground2);

// Initialize at page load
updateFontSettings();
updateSliderBackground();
updateSliderBackground2();
updateSliderBackground3();




