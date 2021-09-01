import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(props => <TouchableOpacity activeOpacity={0.7} {...props} />)`
	height: 46px;
	background: #3b9eff;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 16px;
`;
