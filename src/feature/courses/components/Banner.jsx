import {styled} from "styled-components";


export const Banner=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 326px;
    height: 100px;
    border: 1px solid var(--border);
    background-color: var(--dark);
    border-radius: 8px;
`;

const BannerImage = styled.img`
    filter: drop-shadow(0 0 32px var(--blue));
`;
const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: white;
`;


export  function  BannerFunc({title, img}){
    return(
        <Banner>
            <BannerImage src={img} />
            <Title>{title}</Title>
        </Banner>
    )
}