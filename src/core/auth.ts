import { LoginState } from './loginState';

export const fakeAuthenticationProvider = {
	isAuthenticated: false,
	username: '',
	signIn: (username: string, password: string, callback: (status: LoginState) => void) => {
		if (username === 'Adrian') {
			fakeAuthenticationProvider.username = username;
			setTimeout(() => {
				fakeAuthenticationProvider.isAuthenticated = true;
				callback(LoginState.SUCESS);
			}, 100);
		} else {
			setTimeout(() => {
				callback(LoginState.FAILURE);
			}, 100);
		}
	},
	signOut: () => {
		fakeAuthenticationProvider.isAuthenticated = false;
		setTimeout(() => {
			console.log('Logging out');
		}, 100);
	}
};
