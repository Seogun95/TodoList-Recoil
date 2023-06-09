import { useState } from 'react';
import styled from 'styled-components';
import { BiLock, BiBlock } from 'react-icons/bi';
import { UseFormRegisterReturn, useFormContext } from 'react-hook-form';

interface FormInputProps {
  register?: UseFormRegisterReturn;
  placeholder?: string;
  validationRules?: Record<string, any>;
  forId: string;
  inputType?: string;
}

const capitalizeFirstLetter = (forId: string) =>
  forId.split('-')[0].toUpperCase();

export function FormInput({
  register,
  placeholder,
  forId,
  inputType = 'text',
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <InputBox>
      <Label htmlFor={forId}>{capitalizeFirstLetter(forId)}</Label>
      <InputField>
        <InputIcon>
          <BiLock />
        </InputIcon>
        <Input
          {...register}
          type={
            inputType === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : 'text'
          }
          id={forId}
          placeholder={placeholder}
          autoComplete={inputType === 'password' ? 'new-password' : 'on'}
        />
        {inputType === 'password' && (
          <ShowPasswordButton onClick={showPasswordHandler} type="button">
            <ButtonIcon>
              <BiBlock />
            </ButtonIcon>
          </ShowPasswordButton>
        )}
      </InputField>
    </InputBox>
  );
}

const InputBox = styled.div`
  /* Your styles for "input-box password-input-box" */
`;

const Label = styled.label`
  /* Your styles for "text-m" */
`;

const InputField = styled.div`
  /* Your styles for "input-field password-input-field" */
`;

const InputIcon = styled.span`
  /* Your styles for "input-icon" */
`;

const Input = styled.input`
  /* Your styles for input */
`;

const ShowPasswordButton = styled.button`
  /* Your styles for "show-password-button" */
`;

const ButtonIcon = styled.span`
  /* Your styles for "button-icon" */
`;
