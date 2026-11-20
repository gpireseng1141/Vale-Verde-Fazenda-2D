import { cp, mkdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const target = new URL('../www/', import.meta.url);
await mkdir(target, { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js', 'manifest.webmanifest', 'sw.js', 'icon.svg']) {
  await cp(new URL(file, root), new URL(file, target));
}
console.log('Arquivos web atualizados em www/.');