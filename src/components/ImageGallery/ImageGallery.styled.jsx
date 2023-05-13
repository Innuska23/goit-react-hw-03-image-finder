import styled from '@emotion/styled';

export const Item = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const Wrap = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
`;

export const Text = styled.p`
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: #3f51b5;
    font-size: 22px;
`;