const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const dirV1 = path.join(__dirname, 'matrix-holding-1', 'dist');
const dirV2 = path.join(__dirname, 'matrix-holding-2', 'dist');
const dirV3 = path.join(__dirname, 'matrix-holding-3', 'dist');
const dirPublic = path.join(__dirname, 'public');

// Serve static assets
app.use('/v1', express.static(dirV1));
app.use('/v2', express.static(dirV2));
app.use('/v3', express.static(dirV3));
app.use(express.static(dirPublic));

// SPA Fallback cho Version 1
app.get('/v1/*', (req, res) => {
  const file = path.join(dirV1, 'index.html');
  if (fs.existsSync(file)) {
    res.sendFile(file);
  } else {
    res.status(503).send('Version 1 chưa được build. Vui lòng chạy npm run build:v1');
  }
});

// SPA Fallback cho Version 2
app.get('/v2/*', (req, res) => {
  const file = path.join(dirV2, 'index.html');
  if (fs.existsSync(file)) {
    res.sendFile(file);
  } else {
    res.status(503).send('Version 2 chưa được build. Vui lòng chạy npm run build:v2');
  }
});

// SPA Fallback cho Version 3
app.get('/v3/*', (req, res) => {
  const file = path.join(dirV3, 'index.html');
  if (fs.existsSync(file)) {
    res.sendFile(file);
  } else {
    res.status(503).send('Version 3 chưa được build. Vui lòng chạy npm run build:v3');
  }
});

// Root Portal
app.get('/', (req, res) => {
  res.sendFile(path.join(dirPublic, 'index.html'));
});

// Fallback all others to Portal
app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`- Portal:    http://localhost:${PORT}/`);
  console.log(`- Version 1: http://localhost:${PORT}/v1/`);
  console.log(`- Version 2: http://localhost:${PORT}/v2/`);
  console.log(`- Version 3: http://localhost:${PORT}/v3/`);
});