import { useEffect } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInput } from 'components/FormInput';
import { useRecoilState } from 'recoil';
import { signUpStateAtom } from 'atom';

interface IFormValues {
  email: string;
  id: string;
  nickname: string;
  phone: string;
  password?: string;
  password2?: string;
}

export function SignUp() {
  const [info, setInfo] = useRecoilState(signUpStateAtom);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      phone: '010-',
    },
    mode: 'onChange', //버튼이 눌리기 전에도 정규식 검사
  });

  const onValid: SubmitHandler<IFormValues> = ({
    email,
    id,
    nickname,
    phone,
    password,
    password2,
  }) => {
    setInfo(prev => [
      { email, id, nickname, phone, password, password2 },
      ...prev,
    ]);
    reset();
    setFocus('email');
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      <h1>회원가입 리스트</h1>
      <div>
        <Form onSubmit={handleSubmit(onValid)}>
          <FormInput
            register={register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '이메일 형식이 아닙니다.',
              },
            })}
            placeholder="이메일을 입력해주세요"
            forId="email-id"
          />
          {<p>{errors?.email?.message}</p>}
          <FormInput
            register={register('id', {
              required: '아이디를 입력해주세요',
              validate: {
                firstVail: value =>
                  value.includes('ksj0838414')
                    ? '이미 존재하는 아이디 입니다.'
                    : true,
                secondVail: value =>
                  value.includes('ksj0838424')
                    ? '이미 존재하는 아이디 입니다.'
                    : true,
              },
              pattern: {
                value: /^(?=.*[a-z0-9])[a-z0-9]{3,16}$/,
                message: '영문자로 시작하는 영문자 또는 숫자 3~16자',
              },
              minLength: {
                value: 3,
                message: '5글자 이상으로 입력해주세요',
              },
            })}
            placeholder="아이디를 입력해주세요"
            forId="id-id"
          />
          {<p>{errors?.id?.message}</p>}
          <FormInput
            register={register('nickname', {
              required: '닉네임을 입력해주세요',
              pattern: {
                value: /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,16}$/,
                message: '2자 이상 16자 이하, 영어/한글/숫자',
              },
              minLength: {
                value: 2,
                message: '2글자 이상으로 입력해주세요',
              },
            })}
            placeholder="닉네임을 입력해주세요"
            forId="nickname-id"
          />
          {<p>{errors?.nickname?.message}</p>}
          <FormInput
            register={register('phone', {
              required: '전화번호를 입력해주세요',
              pattern: {
                value: /^0[0-9]{2}-[0-9]{3,4}-[0-9]{4}$/,
                message: `'-'을 포함하여 입력해주세요`,
              },
            })}
            placeholder="전화번호를 입력해주세요"
            forId="phone-id"
          />
          {<p>{errors?.phone?.message}</p>}
          <FormInput
            register={register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/,
                message:
                  '8자리 이상의 영문/숫자/특수문자(공백 제외)만 입력가능합니다',
              },
              minLength: {
                value: 8,
                message: '8글자 이상 으로 입력해주세요',
              },
            })}
            placeholder="비밀번호를 입력해주세요"
            inputType="password"
            forId="password-id"
          />
          {<p>{errors?.password?.message}</p>}
          <FormInput
            register={register('password2', {
              required: '비밀번호를 다시 입력해주세요',
              validate: value =>
                value === watch('password') || '비밀번호가 일치하지 않습니다.',
              minLength: {
                value: 8,
                message: '8글자 이상 으로 입력해주세요',
              },
            })}
            placeholder="비밀번호를 다시 입력해주세요"
            inputType="password"
            forId="repeat password"
          />
          {<p>{errors?.password2?.message}</p>}

          <RegisterButton>등록</RegisterButton>
        </Form>
      </div>

      <hr />
      <ul>
        {info.map(v => (
          <li key={v.id}>
            <p>닉네임: {v.nickname}</p>
            <p>아이디: {v.id}</p>
            <p>이메일: {v.email}</p>
            <p>전화번호: {v.phone}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

const Form = styled.form`
  ${({ theme }) => theme.FlexCol};
`;

const RegisterButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.bgColor2};
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color2};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
