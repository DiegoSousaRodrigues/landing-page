import { AppProps } from 'next/app'
import { FunctionComponent, PropsWithChildren, Suspense, useEffect, useMemo, useState } from 'react'

import Head from 'next/head'
import { NextPage } from 'next'

import '@/styles/globals.scss'
import { MainLayout } from '@/layouts/MainLayout/MainLayout'
import { useRouter } from 'next/router'

export type CustomPage<P = any, IP = P> = NextPage<P, IP> & {
  step?: number
  layout?: FunctionComponent
}

type CustomApp<T> = AppProps<T> & {
  Component: CustomPage<T>
}

export default function MyApp({ Component }: CustomApp<Record<string, unknown>>) {
  const Layout = (Component.layout || MainLayout) as FunctionComponent<PropsWithChildren>

  return (
    <>
      <Head>
        {/* <link rel='icon' href={storeAttributes?.favicon_image_url} /> */}
        <title>LandingPage</title>

        <meta charSet='UTF-8' />

        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='title' content={'LandingPage'} />
      </Head>

      <Layout {...Component}>
        <Suspense>
          <Component />
        </Suspense>
      </Layout>
    </>
  )
}
