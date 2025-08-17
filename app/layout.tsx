import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ElectroNick Bot Market',
  description: 'Beautiful catalog of Telegram bots by ElectroNick',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body className="bg-telegram-light dark:bg-telegram-dark">
        {children}
      </body>
    </html>
  )
}
