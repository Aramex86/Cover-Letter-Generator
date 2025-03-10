import path from "node:path";
import { appendFile, writeFile } from "node:fs";
import process from "node:process";
import yargs from "yargs";
import fs from "node:fs";

const { argv } = yargs(process.argv);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function writeInGlobalIndexFile(dirName, slice, pathName) {
  const globalPath = slice
    ? path.resolve(`src/${slice}/${dirName}`)
    : path.resolve(`src/${dirName}`);
  const content = `export { default as ${capitalizeFirstLetter(
    pathName
  )} } from './${capitalizeFirstLetter(pathName)}/${capitalizeFirstLetter(
    pathName
  )}';\n`;
  appendFile(`${globalPath}/index.ts`, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully in global index file");
    }
  });
}

/**
 * @description This function is used to create an index file in the atom folder
 *              and write the content in that file.
 * @param {Object} pathName - It should have the property atom which is the name of the folder
 *                            in which the index file should be created.
 * @returns {String} - If pathName is not provided, it will return "Path is required"
 */
function addIndexfile(pathName) {
  // Slice names
  const pathNames = ["atom", "molecules", "app", "entities", "features"];

  //Slice names to check and find
  const foundSliceName = pathNames.find((item) => {
    return pathName[item];
  });

  //   console.log(foundSliceName, "foundSliceName");
  console.log(pathName, "pathName");
  const folderName = `src/Shared/${capitalizeFirstLetter(
    foundSliceName
  )}/${capitalizeFirstLetter(pathName[foundSliceName])}/`;

  //   console.log(folderName, "folderName");
  // Create folder if it doesn't exist
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }

  // Paths to create
  const atomPath = path.resolve(
    `src/Shared/${foundSliceName}/${pathName[foundSliceName]}/`
  );
  const moleculePath = path.resolve(
    `src/Shared/${foundSliceName}/${pathName[foundSliceName]}/`
  );
  const entitiesPath = path.resolve(`src/Entities/${foundSliceName}/`);
  const featuresPath = path.resolve(`src/Features/${foundSliceName}/`);
  const appPath = path.resolve(`src/App/${foundSliceName}/`);

  // Content for index file
  const content = `export { default as ${capitalizeFirstLetter(
    pathName[foundSliceName]
  )} } from './${capitalizeFirstLetter(pathName[foundSliceName])}';`;

  // Content form tsx file
  const tsxContent = `
  export default function ${capitalizeFirstLetter(pathName[foundSliceName])}() {
  return (
    <div>${capitalizeFirstLetter(pathName[foundSliceName])}</div>
  )
}
`;

  if (!pathName) {
    return "Path is required";
  }

  if (Object.keys(pathName).includes("atom")) {
    writeInGlobalIndexFile("Atom", "Shared", pathName.atom);

    writeFile(
      `${atomPath}/${capitalizeFirstLetter(pathName.atom)}.tsx`,
      tsxContent,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("file written successfully in atom index file");
        }
      }
    );
    writeFile(`${atomPath}/index.ts`, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("file written successfully in atom index file");
      }
    });
  } else {
    console.log("name should be atom");
  }
  if (Object.keys(pathName).includes("molecules")) {
    writeInGlobalIndexFile("Molecules", "Shared", pathName.molecules);

    writeFile(
      `${moleculePath}/${capitalizeFirstLetter(pathName.molecules)}.tsx`,
      tsxContent,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("file written successfully in atom index file");
        }
      }
    );
    writeFile(`${moleculePath}/index.ts`, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("file written successfully in atom index file");
      }
    });
  } else {
    console.log("name should be molecule");
  }

  // if (Object.keys(pathName).includes("entities")) {
  //   writeInGlobalIndexFile("Entities", "", pathName.entities);
  //   writeFile(`${entitiesPath}/index.ts`, content, (err) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log("file written successfully in atom index file");
  //     }
  //   });
  // } else {
  //   console.log("name should be entities");
  // }
}

addIndexfile(argv);
