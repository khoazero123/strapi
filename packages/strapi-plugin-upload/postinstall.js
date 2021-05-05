'use strict';

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'package.json');
const json = JSON.parse(fs.readFileSync(filePath));
json.name = 'strapi-plugin-upload';
fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
