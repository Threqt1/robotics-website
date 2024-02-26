import "tailwindcss/tailwind.css"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { App, ConfigProvider, theme } from "antd"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })

export const metadata = {
  title: 'Katy Robotics Website',
  description: 'For Katy Robotics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Set inter as default font text across HTML
    <html className={inter.className}>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#ffb9c6",
                borderRadius: 5,
                // Put inter as primary font for componnets
                fontFamily: inter.style.fontFamily + ", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
              }
            }}
          >
            {/* To propagate theme to static methods (im not rlly sure), wrap children in Antd App */}
            <App>
              {children}
            </App>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
