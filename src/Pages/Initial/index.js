import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

import Header from '../../Components/Header';

import {
	Container,
	Dashboard,
	Input,
	Button,
	TextButton,
	ValuesDisplay,
	HeaderDisplay,
	DisplayTextValue,
	DisplayMainTextValue,
	ResultDisplay,
	DisplayTextResult,
	DisplayMainTextResult,
	ErrorMessage,
} from './styles';

const Initial = () => {
	const [currency, setCurrency] = useState('');
	const [value, setValue] = useState('');
	const [bitcoinValue, setBitcoinValue] = useState('');
	const [showResultField, setShowResultField] = useState(false);
	const [inputError, setInputError] = useState(null);

	async function handleSubmiteValue() {
		if (!currency || !value) {
			setShowResultField(false);
			setInputError('Informe os dados');
			return;
		}

		try {
			const response = await axios.get(
				`https://blockchain.info/tobtc?currency=${currency}&value=${value}`,
			);

			setInputError(null);
			setBitcoinValue(response.data);
			setShowResultField(true);
		} catch (err) {
			setShowResultField(false);
			setInputError('Ocorreu um erro na busca');
		}
	}

	return (
		<Container>
			<Header />
			<Dashboard>
				<Input
					placeholder="Moeda"
					keyboardAppearance="dark"
					maxLength={3}
					onChangeText={(text) => setCurrency(text.toUpperCase())}
				/>
				<Input
					placeholder="Informe o valor"
					keyboardAppearance="dark"
					keyboardType="numeric"
					onChangeText={(text) => setValue(text)}
				/>

				<Button onPress={handleSubmiteValue}>
					<TextButton>Buscar</TextButton>
				</Button>

				{showResultField && (
					<>
						<ValuesDisplay>
							<HeaderDisplay>
								<DisplayTextValue>moeda</DisplayTextValue>
								<Icon name="money-bill-alt" size={21} color="#2d2e2d" />
							</HeaderDisplay>
							<DisplayMainTextValue>{currency}</DisplayMainTextValue>
						</ValuesDisplay>

						<ValuesDisplay>
							<HeaderDisplay>
								<DisplayTextValue>valor</DisplayTextValue>
								<Icon name="piggy-bank" size={21} color="#2d2e2d" />
							</HeaderDisplay>
							<DisplayMainTextValue>{value}</DisplayMainTextValue>
						</ValuesDisplay>

						<ResultDisplay>
							<HeaderDisplay>
								<DisplayTextResult>bitcoins</DisplayTextResult>
								<Icon name="bitcoin" size={21} color="#fff" />
							</HeaderDisplay>
							<DisplayMainTextResult>{bitcoinValue}</DisplayMainTextResult>
						</ResultDisplay>
					</>
				)}
				{inputError && <ErrorMessage>{inputError}</ErrorMessage>}
			</Dashboard>
		</Container>
	);
};

export default Initial;
