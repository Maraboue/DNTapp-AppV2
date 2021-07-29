import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: #303030;
  bottom: 0;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  
  
  
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    background: transparent; */
    border-radius: 50px;
    padding-top: 10px;
    
    
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
  
`;

export const FooterLink = styled.a`
  color: #008fb3;
  margin-bottom: 25px;
  font-size: 1.5em;
  text-decoration: none;
  font-family: arial;
  &:hover {
      color: cyan;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #008fb3;
  margin-bottom: 40px;
  font-weight: bold;
  
`;
