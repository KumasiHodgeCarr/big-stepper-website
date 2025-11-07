// Automatically includes all stepper images
// Just add images to /public folder as stepper-N.png (numbered 1, 2, 3, etc.)
// Run 'npm run generate-images' to detect new images

import { IMAGE_COUNT } from './imageConfig';

export function getStepperImages() {
  const images = [];

  // Loop through all detected images
  for (let i = 1; i <= IMAGE_COUNT; i++) {
    images.push({
      src: `/stepper-${i}.png`,
      alt: `Big Stepper ${i}`,
      id: i
    });
  }

  return images;
}

export const stepperImagesCount = IMAGE_COUNT;
