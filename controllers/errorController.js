// Register errors are mongoose native errors, so they need proper handling
export const getErrors = (err, model) => {
    // Validation errors

    if (err.name === 'ValidationError') {
      const fields = Object.keys(model.schema.tree)
      for (let i = 0; i < fields.length; i++) {
        if (err.errors[fields[i]]) {
          return err.errors[fields[i]].properties.message;
        }
      }
      // Duplicate error
    } else if (err.code === 11000) {
        const capitalized = Object.keys(err.keyValue)[0].charAt(0).toUpperCase() + Object.keys(err.keyValue)[0].slice(1)
        return `${capitalized} must be unique`;
    }
    return '';
  };

  // Login errors are manually thrown so they are much more simple
export const getLoginErrors = (err) => err.message;