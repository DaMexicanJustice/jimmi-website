import fs from 'fs';

export const getEmployeeData = async () => {
  return new Promise((resolve, reject) => {
    // reading local json file
    fs.readFile(
      process.cwd() + "/public/json/employees.json",
      "utf8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          // Parsing JSON string object to JS object
          resolve(JSON.parse(data));
        }
      }
    );
  });
};
