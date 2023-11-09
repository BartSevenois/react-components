/** Imports */
import fieldValidation from "./fieldValidation.js";

const validationFunctions = {

  required(value, schemaVal) {

    if (schemaVal) return fieldValidation(value).filled().validate();
    else return [];

  },

  email(value, schemaVal) {

    const errors = fieldValidation(value).email().validate();

    if (schemaVal) {

      return errors;

    } else if (!schemaVal) {

      if (errors.length === 0) return [ 'email' ];

    }
    
  },

  charsLong(value, min) {

    return fieldValidation(value).charsLong(min).validate();

  },

  capitalLetter(value, min) {
    
    return fieldValidation(value, min).capitalLetter(min).validate();
    
  },

  realName(value, schemaVal) {

    const errors = fieldValidation(value).realName().validate();

    if (schemaVal) return errors;

    else if (!schemaVal) {

      if (errors.length === 0) return [ 'realName' ];

    }

  }

};

const formValidation = (data, schema) => {

  const errors = {};

  for (const field in schema) {

    for (const key in schema[field]) {

      if (validationFunctions[key]) {

          if (!data[field]) data[field] = '';

          const error = validationFunctions[key](data[field], schema[field][key]);
          
          if (error.length > 0) {

            if (!errors[field]) errors[field] = [];

            Array.prototype.push.apply(errors[field], error);

          }

      }

    }

  }

  return errors;

};

export default formValidation;