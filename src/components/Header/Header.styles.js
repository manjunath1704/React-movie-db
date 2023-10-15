import styled from 'styled-components';

export const Wrapper = styled.div`
backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(8px) saturate(180%);
background-color: rgba(1, 1, 1, 0.75);
border: 1px solid rgba(255, 255, 255, 0.125);
padding: 0 20px;
position: fixed;
top:0;
width:100%;
z-index:999;
`;

export const Content = styled.div`
display:flex;
justify-content: space-between;
max-width: var(--max-width);
padding: 20px 0;
margin: 0 auto;
`;

export const LogoImg = styled.img`
width:200px;

@media screen and (max-width:500px){
    width:150px;
}
`;

export const TMDBLogoImg = styled.img`
width:100px;

@media screen and (max-width:500px){
    width:80px;
}`
;

