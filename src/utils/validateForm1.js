const validateForm = (formData) => {
  const newErrors = {};

  formData.first_name === '' ? (newErrors.first_name = 'Your First Name is required') : '';
  
  formData.last_name === '' ? (newErrors.last_name = 'Your Last Name is required') : '';

  formData.email === '' ? (newErrors.email = 'Email is required') : '';


  formData.email.includes('@gmail.com') || formData.email.includes('@yahoo.com') ? '' : (newErrors.email = 'Email is invalid');
  
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(formData.password)) {
    newErrors.password = 'Password must be at least 6 characters and include a number';
  }
  

  return newErrors;
};

export default validateForm;