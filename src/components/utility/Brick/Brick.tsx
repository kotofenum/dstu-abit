import React from 'react'
import {getSizedClassForSpacer} from '../../../services/helpers/spacerHelper'

import './styles.scss'

interface IBrickProps {
  size?: number
  plusHalf?: boolean
}

// TODO: использовать bem-cn
export function Brick({size = 1, plusHalf}: IBrickProps) {
  return <div className={getSizedClassForSpacer('brick', size, plusHalf)}></div>
}
