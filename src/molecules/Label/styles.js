import styled, { css } from 'styled-components'

import { getVariantColor } from '../../common/styles/form'
import { get } from '../../theme/helpers'

export const Disabled = styled.div`
  display: inline-flex;
  margin-right: ${get('gutter', 'xxs')};
`

export const Required = styled.abbr`
  margin-left: ${get('gutter', 'xxs')};
  color: ${get('color', 'primary')};
`

export const Variant = styled.div(
  props => css`
    display: inline-flex;
    margin-right: ${get('gutter', 'xxs')};
    color: ${getVariantColor(props.variant)};
    fill: ${getVariantColor(props.variant)};
  `
)

export const Label = styled.label`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  ${get('textStyles', 'label')};
  color: ${get('color', 'text', 'secondary')};
`

export default Label
