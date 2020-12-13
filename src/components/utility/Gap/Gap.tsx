import React from 'react'
import {getSizedClassForSpacer} from '../../../services/helpers/spacerHelper'

import './styles.scss'

interface IGapProps {
  size?: number
  plusHalf?: boolean
}

// TODO: использовать bem-cn
export function Gap({size = 1, plusHalf}: IGapProps) {
  return <div className={getSizedClassForSpacer('gap', size, plusHalf)}></div>
}
