import fs from 'fs';

if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}
fs.mkdirSync('dist');

// 把 src 下的所有文件都递归拷贝到 dist 下，但是要排除 spec.ts 文件
function copy(src, dist) {
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcFile = `${src}/${file}`;
    const distFile = `${dist}/${file}`;
    const stat = fs.statSync(srcFile);
    if (stat.isDirectory()) {
      if (file === 'test') {
        return;
      }
      fs.mkdirSync(distFile);
      copy(srcFile, distFile);
    } else {
      if (file.endsWith('.spec.ts')) {
        return;
      }
      fs.copyFileSync(srcFile, distFile);
    }
  });
}

copy('src', 'dist');
