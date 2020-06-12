import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Tooltip as ReakitTooltip } from 'reakit/Tooltip'
import { system } from '@welcome-ui/system'

export const Tooltip = styled(ReakitTooltip)`
  ${th('tooltips')};
  ${system};
`
