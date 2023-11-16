import React from 'react'
import styled from 'styled-components'


const Wrap = styled.div`
 background-color: ${(props) => props.theme.colors.BgColor};
 width: 100%;

`

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
    color: ${(props) => props.theme.colors.Color};
    h1{
        margin-top: 50px;
        font-size: 35px;
    }

`
function Header() {
  return (
    <Wrap>
        <Wrapper>
            <h1>부산축제정보</h1>
        </Wrapper>
    </Wrap>
  )
}

export default Header