export function validate(input) {
  console.log('entre');
    let errors = {};
    if (!input.username) {
      errors.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid';
    }
    return errors;
  };