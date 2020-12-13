type UIState = {
  loggerVisible: boolean
  logs: string[]
  show: boolean
  maxLines: number
}

export const state: UIState = {
  loggerVisible: true,
  logs: [],
  show: false,
  maxLines: 10,
}
