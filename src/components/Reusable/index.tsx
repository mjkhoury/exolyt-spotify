import styled from '@emotion/styled'

interface TitleProps {
  uppercase?: boolean
}

export const Title = styled.h1<TitleProps>`
  font-size: ${({ theme }) => theme.fontSizes.title}px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  .secondary {
    color: ${({ theme }) => theme.colors.secondary};
  }
  text-transform: ${({ uppercase }) =>
    uppercase ? 'uppercase' : 'capitalize'};
`
