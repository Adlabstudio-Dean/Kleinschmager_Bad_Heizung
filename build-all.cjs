const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const tenantsDir = path.join(__dirname, 'tenants');
const deployDir = path.join(__dirname, 'deployments');

if (!fs.existsSync(deployDir)) {
  fs.mkdirSync(deployDir);
}

const files = fs.readdirSync(tenantsDir).filter(f => f.endsWith('.json'));

for (const file of files) {
  const tenantName = file.replace('.json', '');
  console.log(`\n======================================`);
  console.log(`Building tenant: ${tenantName}`);
  console.log(`======================================\n`);

  try {
    // Build statically using VITE_TENANT env variable
    execSync(`VITE_TENANT=${tenantName} npm run build`, { stdio: 'inherit' });
    
    const distPath = path.join(__dirname, 'dist');
    const outPath = path.join(deployDir, tenantName);
    
    // Copy dist folder to deployments
    if (fs.existsSync(outPath)) {
      fs.rmSync(outPath, { recursive: true, force: true });
    }
    fs.cpSync(distPath, outPath, { recursive: true });
    
    console.log(`✅ Successfully built and deployed to /deployments/${tenantName}`);
  } catch (err) {
    console.error(`❌ Failed to build ${tenantName}`, err);
  }
}
