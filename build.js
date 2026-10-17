const fs = require('fs');
const path = require('path');

console.log('[Divina Derma Build] Iniciando build de produção...');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

// Garante que o diretório dist exista
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Arquivos raiz a serem copiados para dist
const filesToCopy = [
  'index.html',
  'style.css',
  'script.js',
  'config.js'
];

filesToCopy.forEach(file => {
  const src = path.join(rootDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  ✓ Copiado: ${file} -> dist/${file}`);
  } else {
    console.warn(`  ! Arquivo não encontrado: ${file}`);
  }
});

// Função recursiva para copiar diretórios (como images e public)
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`  ✓ Copiado ativo: ${path.relative(rootDir, srcPath)} -> ${path.relative(rootDir, destPath)}`);
    }
  }
}

// Copia pastas de imagens
copyDirSync(path.join(rootDir, 'images'), path.join(distDir, 'images'));
copyDirSync(path.join(rootDir, 'public'), path.join(distDir, 'public'));

// Também garante que index.html esteja em public/ para casos de Vercel com Output Directory = public
const publicDir = path.join(rootDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (fs.existsSync(path.join(rootDir, 'index.html'))) {
  fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(publicDir, 'index.html'));
  if (fs.existsSync(path.join(rootDir, 'style.css'))) fs.copyFileSync(path.join(rootDir, 'style.css'), path.join(publicDir, 'style.css'));
  if (fs.existsSync(path.join(rootDir, 'script.js'))) fs.copyFileSync(path.join(rootDir, 'script.js'), path.join(publicDir, 'script.js'));
  if (fs.existsSync(path.join(rootDir, 'config.js'))) fs.copyFileSync(path.join(rootDir, 'config.js'), path.join(publicDir, 'config.js'));
}

console.log('[Divina Derma Build] Build de produção concluído com sucesso total!');
