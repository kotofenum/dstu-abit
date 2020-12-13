export const getSizedClassForSpacer = (className: string, size: number, plusHalf?: boolean): string => {
  if (size || size === 0 || plusHalf) {
    const classNameWithSize = className + `-${size === 0 ? 0 : size || 1}${plusHalf ? '-5' : ''}`
    return classNameWithSize
  } else {
    return className
  }
}
