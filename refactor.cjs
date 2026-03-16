const fs = require('fs');
const path = require('path');

const appTsxPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appTsxPath, 'utf8');

// Replace App Component definition
content = content.replace(/export default function App\(\) \{/, 'export default function App({ config }: { config: any }) {');

// Replace Text
content = content.replace(/Maurer<span className="text-blue-600">Sanitär<\/span>/g, '{config.shortName}<span className="text-primary-600">Sanitär</span>');

// Replace phones
content = content.replace(/>0711 98 76 543</g, '>{config.phone}<');
content = content.replace(/"tel:07119876543"/g, '{"tel:" + config.phone.replace(/\\s/g, "")}');
content = content.replace(/0711 98 76 590/g, '{config.emergencyPhone}');

// Email
content = content.replace(/>info@maurer-sanitaer\.de</g, '>{config.email}<');
content = content.replace(/"mailto:info@maurer-sanitaer\.de"/g, '{"mailto:" + config.email}');

// Address
content = content.replace(/Vaihinger Str. 45, 70567 Stuttgart/g, '{config.address}');

// founding year
content = content.replace(/seit 1987/g, 'seit {config.foundingYear}');
content = content.replace(/>1987</g, '>{config.foundingYear}<');

// Remove hardcoded TIMELINE
content = content.replace(/const TIMELINE = \[[\\s\\S]*?\];/m, '');
content = content.replace(/TIMELINE\.map\(\(item, index\)/g, 'config.timeline.map((item: any, index: number)');

// Replace colors
content = content.replace(/-blue-/g, '-primary-');
content = content.replace(/-orange-/g, '-secondary-');
content = content.replace(/text-primary-100/g, 'text-primary-100'); // Just fixing any messes

fs.writeFileSync(appTsxPath, content, 'utf8');
console.log('App.tsx refactored successfully.');
