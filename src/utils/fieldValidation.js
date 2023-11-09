const fieldValidation = (value) => {

  const functions = {
    validations: [],
    validationFunctions: [ 
      'filled',
      'email',
      'charsLong',
      'capitalLetter'
    ],

    /**
     * Check if the given parameter is filled in
     * @returns this
     */
    filled() {
  
      // Check if the parameter is null or undefined
      if (value === null || value === undefined) {
        this.validations.push('filled');
      }
    
      // Check if the parameter is a string and contains only whitespaces
      if (typeof value === 'string' && value.trim().length === 0) {
        this.validations.push('filled');
      }
    
      // Check if the parameter is an array and has no elements
      if (Array.isArray(value) && value.length === 0) {
        this.validations.push('filled');
      }
    
      // Check if the parameter is an object and has no own properties
      if (typeof value === 'object' && Object.keys(value).length === 0) {
        this.validations.push('filled');
      }
    
      return this;
  
    },
  
    /**
     * Checks if the given parameter is an email
     * @returns this
     */
    email() {
  
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regex.test(value)) this.validations.push('email');
  
      return this;
  
    },

    /**
     * Check if the value is min the asked characters long
     * @param {number} min 
     * @returns this
     */
    charsLong(min) {
      
      if (!(value.length >= min)) this.validations.push('charsLong');

      return this;

    },

    /**
     * Check if the value contains at least the asked capital letters
     * @param {number} min 
     * @returns this
     */
    capitalLetter(min) {
      
      if (!min) min = 1;

      const capitalLettersCount = value.replace(/[^A-Z]/g, '').length;
      
      if (!(capitalLettersCount >= min)) this.validations.push('capitalLetter');

      return this;

    },

    /**
     * Validates if the asked validations are correct or not
     */
    validate() {
      
      return this.validations;

    }
  };

  return functions;
}



export default fieldValidation;