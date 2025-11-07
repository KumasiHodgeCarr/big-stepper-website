// Automatically includes all stepper images
// To add more images: just add them to /public folder as stepper-N.png
// and update the count below

export function getStepperImages() {
  const images = [];
  // Update this number when you add more stepper-N.png images to /public
  const totalImages = 8;

  for (let i = 1; i <= totalImages; i++) {
    images.push({
      src: `/stepper-${i}.png`,
      alt: `Big Stepper ${i}`,
      id: i
    });
  }

  return images;
}

export const stepperImagesCount = 8; // Update this when adding more images
