import React from 'react';

const types = {
  email: {
    regex: /\S+@\S+\.\S+/,
    message: 'Preencha um e-mail válido para Login',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'Sua senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma minúsucla e um dígito.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  const validate = function (value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      console.log('oi');
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = function ({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
