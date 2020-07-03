import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {HeaderBar, HeaderTitle} from './styles';

const Header = () => {
	return (
		<HeaderBar>
			<Icon name="bitcoin" size={32} color="#f7a900" />
			<HeaderTitle>Bitcoin Explorer</HeaderTitle>
		</HeaderBar>
	);
};

export default Header;
