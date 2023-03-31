import React from 'react';

import styled from 'styled-components';

import useHeaderHook from '../hooks/useHeaderHook';

const HeaderComponent = () => {

    const {
        clickLogoutHandler,
        loginDisplay,
        clickTop,
        authCheck,
        dashboradDisplay,
        meMeta
    } = useHeaderHook();

    return (
        <Wrapper>
            <Ul>
                <Li onClick={clickTop}>
                    TOP
                </Li>
                {
                    !authCheck &&
                    <Li onClick={loginDisplay}>
                        login
                    </Li>
                }
                
                {
                    authCheck &&
                    <Li onClick={clickLogoutHandler}>
                        logout
                    </Li>
                }
                {
                    authCheck &&
                    <Li onClick={dashboradDisplay}>
                        DashBorad
                    </Li>
                }
                {
                    authCheck &&
                    <Li>
                        「{ meMeta.name }」でログイン中
                    </Li>
                }
            </Ul>
        </Wrapper>
    );
}


// styled
const Wrapper = styled.div`
    background-image: linear-gradient(to left, #27acd9 0%, #009129a4 100%);
`;

const Ul = styled.ul`
    margin: 0;
    height: 10%;
    display: flex;
    justify-content: left;
`;

const Li = styled.li`
    list-style: none;
    margin: 0 1rem 0 1rem;
    color: white;
    cursor: pointer;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;


export default HeaderComponent;