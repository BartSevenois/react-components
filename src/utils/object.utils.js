export const deepMergeObjects = (target, source) => {
  // Iterate through all keys of the source object
  for (const key in source) {
    // Check if the key exists in the source object
    if (source.hasOwnProperty(key)) {
      // If the key exists in source and is an object, merge it recursively
      if (source[key] instanceof Object && !(source[key] instanceof Array)) {
        // If the key exists in the target object and is an object, merge recursively
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMergeObjects(target[key], source[key]);
      } else {
        // Otherwise, set the value in the target object
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
}