const pdfParse = require("pdf-parse");

/**
 * Accepts a Buffer (from multer memoryStorage) and extracts raw text.
 */
const extractTextFromPDF = async (buffer) => {
  const data = await pdfParse(buffer);
  return data.text.trim();
};

module.exports = { extractTextFromPDF };
