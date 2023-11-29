import styled, { css } from "styled-components";

type buttonProps = {
  mode?: 'primary' | 'secondary' | 'destructive';
  size?: 'large' | 'small' ;
  children: string;
}

const StyledButton = styled.button` 
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-items: center;
  color: yellow;
  ${props => 
      (props.mode == 'primary') && css`
      width: 500px;
    `}
      
`



const Button: React.FC<buttonProps> = ({mode = 'primary', size = 'small', children}) => {
  return (
    <StyledButton onClick={()=>console.log('312321321')}>{children}</StyledButton>
  )
}


export default Button;