const fs = require('fs');
const { EXTRA_I18N } = require('./extra_i18n.js');
const script = fs.readFileSync('script.js', 'utf8');

const vm = require('vm');
const sandbox = { localStorage: { getItem: () => null, setItem: () => null } };
vm.createContext(sandbox);

// Execute up to where I18N and helper are defined
const splitPoint = script.indexOf('let isListening = false;');
const setupCode = script.substring(0, splitPoint);
vm.runInContext(setupCode, sandbox);

const I18N = sandbox.I18N;

const files = ['index.html', 'find-schemes.html', 'results.html', 'scheme-details.html'];
const missingHi = new Set();
const missingEn = new Set();

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const regex = /data-i18n(?:-html|-placeholder|-title|-aria-label)?=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const key = match[1];
    if (!I18N['hi-IN'] || I18N['hi-IN'][key] === undefined) {
      missingHi.add(file + ': ' + key);
    }
    if (!I18N['en-IN'] || I18N['en-IN'][key] === undefined) {
      missingEn.add(file + ': ' + key);
    }
  }
});

console.log('Missing Hindi keys:');
if (missingHi.size === 0) {
  console.log('NONE! 100% COVERED!');
} else {
  missingHi.forEach(k => console.log(' - ' + k));
}

console.log('Missing English keys:');
if (missingEn.size === 0) {
  console.log('NONE! 100% COVERED!');
} else {
  missingEn.forEach(k => console.log(' - ' + k));
}
