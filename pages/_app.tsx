import '@styles/globals.scss'
// import { Roboto_Slab, Source_Sans_Pro } from '@next/font/google'

// const roboto: any = Roboto_Slab({
//   weight: ['400', '600', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
// })

// const sansPro: any = Source_Sans_Pro({
//   weight: ['600', '700'],
//   style: ['normal'],
//   subsets: ['latin']
// })

function Application({ Component, pageProps }) {
  return(
    <>
      {/* <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily}, ${sansPro.style.fontFamily};
        }
      `}</style> */}
     <Component {...pageProps} />
    </>
  )
}

export default Application
