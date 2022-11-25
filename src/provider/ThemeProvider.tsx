import { ReactNode, useState, FC } from 'react'
import { Theme, ThemeСontext } from '../contents'
import { changeCssRootVariables } from '../model/changeCssRootVariables'
import { storage } from '../model/storage'

interface Props {
   children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children, ...props }) => {
   const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT)

   changeCssRootVariables(theme)

   function changeTheme(theme: Theme) {
      storage.setItem('theme', theme)
      setTheme(theme)
      changeCssRootVariables(theme)
   }

   return (
      <ThemeСontext.Provider
         value={{
            theme,
            changeTheme,
         }}
         {...props}
      >
         {children}
      </ThemeСontext.Provider>
   )
}
