import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formValues, setFormValues] = useState({ email: '', password: '', favClass: '1' });
  const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: true });

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const isPasswordValid = newPassword.length >= 9 && /[A-Za-z].*\d|\d.*[A-Za-z]/.test(newPassword);
    setFormValues({ ...formValues, password: newPassword });
    setValidationStates({ ...validationStates, passwordState: isPasswordValid });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    // Validar el correo electrónico aquí antes de enviar el formulario
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
    setValidationStates({ ...validationStates, emailState: isEmailValid });

    // Si ambos campos son válidos, realizar la acción de envío o mostrar un mensaje de error
    if (isEmailValid && validationStates.passwordState) {
      // Llamar a la función de envío aquí
      alert('Formulario enviado con éxito');
    } else {
      alert('Por favor, completa los campos correctamente.');
    }
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            isInvalid={!validationStates.emailState}
          />
          <Form.Control.Feedback type="invalid">
            Ingresa un correo electrónico válido.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
            isInvalid={!validationStates.passwordState}
          />
          <Form.Control.Feedback type="invalid">
            Tu contraseña debe tener al menos 9 caracteres y contener números y letras.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange} value={formValues.favClass}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologías web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
