import React, { useState } from "react";

import validation from "../../../utils/formValidation";
import { isValidCssColor } from "../../../utils/styleHelpers";

import TextInput from "../../Elements/TextInput/TextInput";
import Button from "../../Elements/Button/Button";
import Textarea from "./../../Elements/Textarea/Textarea";
import Typography from "./../../Elements/Typography/Typography";

const validationSchema = {
  firstname: { required: true },
  lastname: { required: true },
  email: { required: true, email: 'true' },
  phone: { required: true },
  subject: { required: true },
  message: { required: true },
};

const EmailFrom = ({
  type = 'default',
  color = 'default',
  title,
  description,
  section
}) => {

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors ] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  if (!['default', 'border', 'underline'].includes(type)) type = 'default';
  if (!['default', 'primary', 'secondary'].includes(color) && !isValidCssColor(color)) color = 'default';

  const onChange = (e) => {
    const newData = { ...data };

    newData[e.target.name] = e.target.value;

    setData(newData);
  }
  const onSend = () => {
    const validations = validation(data, validationSchema);
    
    if (Object.keys(validations).length > 0) {
      const newErrors = { ...errors };

      for(const key in errors) {
        if (key in validations) {
          if (validations?.[key].includes('filled')) newErrors[key] = 'Veld vereist'
          else if (validations?.[key].includes('email')) newErrors[key] = 'E-mail niet geldig';
        } else {
          newErrors[key] = '';
        }
        
      }

      setErrors(newErrors);
    }
    else if (Object.keys(validations).length === 0) {

      alert('Email send');

      const cleanData = {
        lastname: '',
        firstname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };

      setData(cleanData);
      setErrors(cleanData);
    }

  };

  return(
    <div>
      {
        (!title) ? null :
        <div>
          <Typography type="h2">{title}</Typography>
        </div>
      }
      {
        (!description) ? null :
        <div>
          <Typography className="!mb-8">{description}</Typography>
        </div>
      }
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {/** Firstname */}
        <TextInput 
          onChange={onChange}
          value={data.firstname}
          label="Voornaam" width="full"
          name="firstname" color={color}
          type={type}
          error={errors.firstname}
          section={section}
        />
        {/** Lastname */}
        <TextInput
          onChange={onChange}
          value={data.lastname}
          label="Achternaam"
          width="full"
          name="lastname"
          color={color} type={type}
          error={errors.lastname}
          section={section}
        />
        {/** Email */}
        <TextInput
          onChange={onChange}
          value={data.email}
          label="Email"
          width="full"
          name="email"
          color={color}
          type={type}
          error={errors.email}
          section={section}
        />
        {/** Phone */}
        <TextInput
          onChange={onChange}
          value={data.phone}
          label="Gsm" width="full"
          name="phone"
          color={color}
          type={type}
          error={errors.phone}
          section={section}
        />
      </div>
      {/** Subject */}
      <div className="mt-8">
        <TextInput
          onChange={onChange}
          value={data.subject}
          label="Onderwerp"
          width="full"
          name="subject"
          color={color}
          type={type}
          error={errors.subject}
          section={section}
        />
      </div>
      {/** Message */}
      <div className="mt-8">
        <Textarea
          onChange={onChange}
          value={data.message}
          label="Bericht"
          name="message"
          color={color}
          type={type}
          error={errors.message}
          section={section}
        />
      </div>
      <div className="mt-8">
        <Button color="primary" onClick={onSend} label="Verzenden"/>
      </div>
    </div>
  );
};

export default EmailFrom;