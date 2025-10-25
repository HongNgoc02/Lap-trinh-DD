// file: metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Thêm 'wasm' vào danh sách assetExts
// để Metro biết cách xử lý file .wasm
config.resolver.assetExts.push('wasm');

module.exports = config;