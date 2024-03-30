const validateTaskForm = (formData) => {
  const newErrors = {};

  formData.title === '' ? (newErrors.title = 'A task title is required 😉️') : '';

  formData.description === '' ? (newErrors.description = 'Please write more about your task 😄️') : '';

  formData.category === '' ? (newErrors.category = 'Come on, categorize your task 😄️')
    : '';

  formData.due_date === ''
    ? (newErrors.due_date = "Oops! Didn't set a task due date 🙊️")
    : '';

  formData.priority === ''
    ? (newErrors.priority = 'Please, prioritize your task!')
    : '';

  formData.status === '' ? (newErrors.status = 'Is the task completed already? 🤔️') : '';

  return newErrors;
};

export default validateTaskForm;