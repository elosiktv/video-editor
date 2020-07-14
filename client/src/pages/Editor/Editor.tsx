import React, { FC } from 'react';
import styled from 'styled-components';

import Scene from '../../components/organisms/Scene';
import Video from '../../components/organisms/Video';

import Icon from '../../components/atoms/Icon';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.primary};
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    height: 500px;
`

const StyledScene = styled(Scene)`
    flex: 1.2;
`

const StyledVideo = styled(Video)`
    flex: 2;
`

const Editor: FC = () => {
    return (
        <Container>
            <Wrapper>
                <StyledScene />
                <StyledVideo />
            </Wrapper>
            <Icon name="IoIosPlay" color="white" size={30} />
        </Container>
    );
}

export default Editor;
