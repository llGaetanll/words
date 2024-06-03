import { Lora, Inter, Fira_Code, Roboto, Merriweather } from "@next/font/google";

// variable fonts
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const fira_code = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic']
})

// non-variable fonts
// must specify weight
export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
