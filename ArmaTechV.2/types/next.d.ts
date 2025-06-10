import { NextPage } from 'next'
import { AppProps } from 'next/app'

declare module 'next' {
  export type NextPageWithParams<P = {}, IP = P> = NextPage<P, IP> & {
    getInitialProps?(context: any): IP | Promise<IP>
  }
}

declare module 'next/types' {
  export type PageProps = {
    params?: { [key: string]: string }
    searchParams?: { [key: string]: string | string[] }
  }
} 