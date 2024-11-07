const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

// Правильные пути для new_src структуры
const PROJECT_STRUCTURE_PATH = path.join(__dirname, '../config/project-structure.ts');
const SRC_DIR = path.join(__dirname, '/home/runner/AIDE/new_src');

// Helper functions для управления структурой проекта
function addPath(structure: any, filePath: string) {
  const pathParts = filePath.split('/');
  let current = structure.root.src;

  // Проходим по каждой части пути
  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (!current[part]) {
      current[part] = {
        description: getDirectoryDescription(part),
        files: {}
      };
    }
    current = current[part];
  }

  // Добавляем файл с описанием
  const fileName = pathParts[pathParts.length - 1];
  if (current.files) {
    current.files[fileName] = getFileDescription(fileName);
  } else {
    current[fileName] = getFileDescription(fileName);
  }
}

function removePath(structure: any, filePath: string) {
  const pathParts = filePath.split('/');
  let current = structure.root.src;
  const parents = [current];

  // Проходим по пути до предпоследнего элемента
  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (!current[part]) return;
    current = current[part];
    parents.push(current);
  }

  // Удаляем файл
  const fileName = pathParts[pathParts.length - 1];
  if (current.files) {
    delete current.files[fileName];
  } else {
    delete current[fileName];
  }

  // Удаляем пустые директории
  for (let i = parents.length - 1; i > 0; i--) {
    const parent = parents[i];
    if (Object.keys(parent.files || {}).length === 0) {
      delete parents[i - 1][pathParts[i - 1]];
    }
  }
}

function getFileDescription(fileName: string): string {
  const ext = path.extname(fileName);
  const baseName = path.basename(fileName, ext);

  // Специальные случаи
  if (fileName === 'index.tsx' || fileName === 'index.ts') return 'Module entry point';
  if (fileName === 'README.md') return 'Documentation';
  if (fileName === 'MIGRATION.md') return 'Migration guide';
  if (fileName.includes('.test.')) return 'Test file';

  // По расширению
  switch (ext) {
    case '.tsx':
      return `React component${baseName.includes('page') ? ' (Page)' : ''}`;
    case '.ts':
      if (baseName.startsWith('use')) return 'React hook';
      return 'TypeScript module';
    case '.css':
    case '.scss':
      return 'Styles';
    case '.d.ts':
      return 'Type definitions';
    default:
      return 'File';
  }
}

function getDirectoryDescription(dirName: string): string {
  const directoryTypes: Record<string, string> = {
    components: 'React components',
    hooks: 'React hooks',
    utils: 'Utility functions',
    services: 'Service layer',
    types: 'Type definitions',
    constants: 'Constants',
    tests: 'Test files',
    styles: 'Style files',
    pages: 'Page components',
    api: 'API routes',
    lib: 'Library code',
    config: 'Configuration files'
  };

  return directoryTypes[dirName] || `${dirName} module`;
}

function updateProjectStructure(filePath: string, isDelete: boolean = false) {
  try {
    const relativePath = path.relative(SRC_DIR, filePath);
    
    // Игнорируем служебные файлы и директории
    if (shouldIgnoreFile(relativePath)) return;

    // Создаем файл структуры, если он не существует
    if (!fs.existsSync(PROJECT_STRUCTURE_PATH)) {
      const initialStructure = {
        root: {
          src: {
            description: "Source root",
            files: {}
          }
        }
      };
      fs.writeFileSync(
        PROJECT_STRUCTURE_PATH,
        `export const PROJECT_STRUCTURE = ${JSON.stringify(initialStructure, null, 2)}`
      );
    }

    const structureContent = fs.readFileSync(PROJECT_STRUCTURE_PATH, 'utf-8');
    
    // Извлекаем структуру из файла, используя более надежный способ
    let structure;
    try {
      const structureString = structureContent
        .replace(/export const PROJECT_STRUCTURE = /, '')
        .replace(/;?\s*$/, '');
      structure = eval(`(${structureString})`);
    } catch (e) {
      console.error('Failed to parse structure file:', e);
      structure = { root: { src: { description: "Source root", files: {} } } };
    }
    
    if (isDelete) {
      removePath(structure, relativePath);
    } else {
      addPath(structure, relativePath);
    }
    
    // Записываем обновленную структуру
    fs.writeFileSync(
      PROJECT_STRUCTURE_PATH,
      `export const PROJECT_STRUCTURE = ${JSON.stringify(structure, null, 2)}`
    );

    console.log(`Structure updated: ${isDelete ? 'removed' : 'added'} ${relativePath}`);
  } catch (error) {
    console.error('Error updating structure:', error);
  }
}

function shouldIgnoreFile(filePath: string): boolean {
  const ignoredPatterns = [
    /node_modules/,
    /\.git/,
    /\.next/,
    /\.cache/,
    /dist/,
    /build/,
    /\.(log|env|lock)$/,
    /package(-lock)?\.json$/
  ];
  
  return ignoredPatterns.some(pattern => pattern.test(filePath));
}

// Экспортируем функции если нужно
module.exports = {
  addPath,
  removePath,
  updateProjectStructure,
  getFileDescription,
  getDirectoryDescription,
  shouldIgnoreFile
};

// Запускаем отслеживание только если файл запущен напрямую
if (require.main === module) {
  console.log('Starting structure watcher...');
  console.log(`Watching directory: ${SRC_DIR}`);
  console.log(`Structure file: ${PROJECT_STRUCTURE_PATH}`);

  chokidar.watch(SRC_DIR, {
    ignored: /(^|[\/\\])\../,
    persistent: true
  })
  .on('add', (path: string) => updateProjectStructure(path))
  .on('unlink', (path: string) => updateProjectStructure(path, true))
  .on('ready', () => console.log('Initial scan complete. Ready for changes...'));
} 