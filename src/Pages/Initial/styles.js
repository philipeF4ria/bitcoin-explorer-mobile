import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background: #3f403f;
`;

export const Dashboard = styled.View`
	flex-direction: column;
	align-items: center;
`;

export const Input = styled.TextInput`
	width: 250px;
	height: 50px;
	margin-top: 8px;
	padding: 10px;

	background: #fafafa;
`;

export const Button = styled.TouchableOpacity`
	width: 110px;
	height: 45px;
	margin-top: 8px;
	background: #f7a900;

	align-items: center;
	justify-content: center;
`;

export const TextButton = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 16px;
`;

export const ValuesDisplay = styled.View`
	width: 280px;
	height: 120px;
	margin-top: 10px;
	padding: 8px;

	background: #e3e3e3;
`;

export const DisplayTextValue = styled.Text`
	font-size: 18px;
	font-family: 'Poppins-Regular';
	color: #2d2e2d;
`;

export const DisplayMainTextValue = styled.Text`
	font-size: 26px;
	margin-top: 8px;
	color: #2d2e2d;
`;

export const ResultDisplay = styled.View`
	width: 280px;
	height: 120px;
	margin-top: 10px;
	padding: 8px;

	background: #04d361;
`;

export const DisplayMainTextResult = styled.Text`
	font-size: 26px;
	font-family: 'Poppins-Regular';
	margin-top: 8px;
	color: #fff;
`;

export const DisplayTextResult = styled.Text`
	font-size: 18px;
	color: #fff;
`;

export const HeaderDisplay = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const ErrorMessage = styled.Text`
	margin-top: 8px;
	font-size: 22px;
	font-family: 'Roboto-Medium';
	color: #c53030;
`;
