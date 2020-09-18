import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'montserrat';
 } 

 .Logo{
   width:190px;
   height:42px;

 
 }
 .LogoFooter{
  width:550px;
  height:106px;

  @media screen and (max-width: 960px) {
    width: 100%;
    /* justify-items:center; */
   }
}

.TextHide1{
  display:none;
}

.TextHide2{
  display:none;
}


/*effect*/
@keyframes text{
  0%{
    margin-bottom:-3px;
  }

  38%{
    letter-spacing: 3px;
    margin-bottom: -3px;
  }

  85%{
    letter-spacing: 1px;
    margin-bottom: -3px;
  }
}



.GambarOrang{
  width:280px;
  height:528px;
  @media screen and (max-width: 768px) {
    width:140px;
    height:264px;
  }
}


.GambarOrang2{
  width:280px;
  height:528px;
  @media screen and (max-width: 768px) {
    width:140px;
    height:264px;
  }
}

.GambarOrang:hover + .TextHide1 {
  display:block;
  animation: text 2.5s 1;
}


.GambarOrang2:hover + .TextHide2 {
 display:block;
animation: text 2.5s 1;

}

.LogoFooter2{
  width:21px;
  height:15px;
}
.LogoFooter3{
  width:24px;
  height:24px;
}

 .Span1{
   color:red;
 }

.Ellipse1{
  width:150px;
  height:150px;
}

.Pict1{
  width:300px;
  height:200px;

  
  @media screen and (max-width: 960px) {
    width: 100%;
    

    &:hover {
      transform: none;
    }
  }

}

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 80px;
  padding-left: 80px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  .item2 {
    width: 200px;
    height: 200px;
    margin: 50px auto;
    padding-top: 75px;
    background: #ccc;
    text-align: center;
    color: #FFF;
    font-size: 3em;
  }
  
  AOS.init({
    duration: 1200,
  })

`;

export default GlobalStyle;
