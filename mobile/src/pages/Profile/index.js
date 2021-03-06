import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container, Title, Separator, Form, FormInput,
	SubmitButton, LogoutButton } from './style';

export default function Profile({ navigation }) {
  const profile = useSelector(store => store.user.profile);
  const dispatch = useDispatch();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
  	setOldPassword('');
  	setPassword('');
  	setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
  	dispatch(updateProfileRequest({
  		name, email, oldPassword, password,
  		confirmPassword
  	}));
  }

  function handleLogout() {
  	dispatch(signOut());
  }

	return(
		<Background>
			<Container>
				<Title>Meu perfil</Title>

				<Form>
					<FormInput
						icon='account-outline'
						autoCorrect={false}
						autoCapitalize='none'
						placeholder='Nome completo'
						returnKeyType='next'
						onSubmitEditing={ () => emailRef.current.focus() }
						value={ name }
						onChangeText={ setName }
					/>
					<FormInput
						icon='email-outline'
						keyboardType='email-address'
						autoCorrect={false}
						autoCapitalize='none'
						placeholder='Digite seu e-mail'
						ref={ emailRef }
						returnKeyType='next'
						onSubmitEditing={ () => oldPasswordRef.current.focus() }
						value={ email }
						onChangeText={ setEmail }
					/>
					<Separator/>
					<FormInput
						icon='lock-outline'
						secureTextEntry
						placeholder='Sua senha atual'
						ref={ oldPasswordRef }
						returnKeyType='next'
						onSubmitEditing={ () => passwordRef.current.focus() }
						value={ oldPassword }
						onChangeText={ setOldPassword }
					/>
					<FormInput
						icon='lock-outline'
						secureTextEntry
						placeholder='Sua nova senha'
						ref={ passwordRef }
						returnKeyType='next'
						onSubmitEditing={ () => confirmPasswordRef.current.focus() }
						value={ password }
						onChangeText={ setPassword }
					/>
					<FormInput
						icon='lock-outline'
						secureTextEntry
						placeholder='Confirme sua senha nova'
						ref={ confirmPasswordRef }
						returnKeyType='send'
						onSubmitEditing={ handleSubmit }
						value={ confirmPassword }
						onChangeText={ setConfirmPassword }
					/>
					<SubmitButton onPress={ handleSubmit }>Atualizar perfil</SubmitButton>
					<LogoutButton onPress={ handleLogout }>Sair do GoBarber</LogoutButton>
				</Form>
			</Container>
		</Background>
	);
}
