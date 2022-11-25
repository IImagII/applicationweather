import { createContext } from 'react'

interface Props {
   theme: Theme
   changeTheme: (theme: Theme) => void
}

export enum Theme {
   LIGHT = 'light',
   DARK = 'dark',
}
export const ThemeСontext = createContext<Props>({
   theme: Theme.LIGHT,
   changeTheme: () => {},
})
