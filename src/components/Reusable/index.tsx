import styled from '@emotion/styled'
import { Result } from 'antd'

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

export const Error = styled(Result)`
  margin-top: ${({ theme }) => theme.margins.double}px;
  width: max-content;
  .ant-result-title,
  .ant-result-subtitle {
    color: ${({ theme }) => theme.colors.white};
  }
`
