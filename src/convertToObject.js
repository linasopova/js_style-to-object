'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const stylesMap = {};
  const stylesDeclarations = sourceString.split(';');

  stylesDeclarations.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((string) => string.trim());

    stylesMap[key] = value;
  });

  return stylesMap;
}

module.exports = convertToObject;
