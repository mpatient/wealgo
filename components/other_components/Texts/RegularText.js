import React from 'react';
import styled from 'styled-components/native';
import {StatusBarHeight} from '../shared';
import {colors} from '../colors';
const {tertiary} = colors;

const StyledText = styled.Text`
font-size: 15px;
color: ${tertiary};
text-align: left;
`

const RegularText = (props) =>{
    return <StyledText{...props}>{props.children}</StyledText>
}

export default RegularText;