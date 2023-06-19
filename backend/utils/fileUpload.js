const multer = require("multer");

// Define file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    ); // Set the filename for the uploaded file, appending the current date and time to ensure uniqueness
  },
});

// Specify file format that can be saved
function fileFilter(req, file, cb) {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true); // Accept the file if its MIME type matches one of the specified image formats
  } else {
    cb(null, false); // Reject the file if its MIME type doesn't match any of the specified image formats
  }
}

const upload = multer({ storage, fileFilter }); // Create a Multer instance with the defined storage and file filter configuration

// File Size Formatter
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes"; // Return "0 Bytes" if the file size is 0
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  ); // Convert the file size in bytes to a human-readable format (e.g., "2.5 MB")
};

module.exports = { upload, fileSizeFormatter }; // Export the upload middleware and fileSizeFormatter function for use in other parts of the application
