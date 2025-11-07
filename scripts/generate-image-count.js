const fs = require('fs');
const path = require('path');

// Scan the public folder for stepper-*.png files
const publicDir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(publicDir);

// Find all stepper-N.png files
const stepperFiles = files.filter(file =>
  /^stepper-\d+\.png$/.test(file)
);

// Extract numbers and find the highest
const numbers = stepperFiles.map(file => {
  const match = file.match(/stepper-(\d+)\.png/);
  return match ? parseInt(match[1]) : 0;
});

const maxImageNumber = numbers.length > 0 ? Math.max(...numbers) : 0;

// Generate the config file
const configContent = `// Auto-generated file - do not edit manually
// Run 'npm run generate-images' to update

export const IMAGE_COUNT = ${maxImageNumber};
`;

// Write to lib folder
const configPath = path.join(__dirname, '..', 'lib', 'imageConfig.ts');
fs.writeFileSync(configPath, configContent);

console.log(`✅ Found ${stepperFiles.length} stepper images (max number: ${maxImageNumber})`);
console.log(`📝 Generated config at lib/imageConfig.ts`);
