import styled from "styled-components";

type buttonProps = {
  mode?: 'primary' | 'secondary' | 'destructive';
  size?: 'large' | 'small' ;
  children: string;
}

const StyledButton = styled.button<buttonProps> `
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-items: center;
  color: var(--white);
  border: none;
  height: ${({size}) => size === "small" ? '40px' : '48px'};

  ${({mode}) => 
   {
    switch(mode) {
      case 'primary': 
      return `
      background-color: var(--main-purple);
      &:hover {
        background-color: var(--main-purple-hover)
        }`
      
      case 'secondary':
        return `
        background-color: rgba(99, 95, 199, .1);
        color: var(--main-purple);
        &:hover {
          background-color: rgba(99, 95, 199, .25);
        }`

      case 'destructive':
        return `
        background-color: var(--red);
        &:hover {
          background-color: var(--red-hover)
         }
         `
    }
  }
  }`
      


const Button: React.FC<buttonProps> = ({mode = 'primary', size = 'small', children}) => {
  return (
    <StyledButton mode={mode} size={size} onClick={()=>console.log('312321321')}>{children}</StyledButton>
  )
}


export default Button;