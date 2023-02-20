import '@styles/globals.scss'
import Layout from '@components/Layout'
import {ApolloProvider} from '@apollo/client'
import client from "../apolloclient";

function Application({ Component, pageProps }) {
  return(
    <>
      <ApolloProvider client={client}>
        <Layout>
        <Component {...pageProps} />
      </Layout>
     </ApolloProvider>
    </>
  )
}

export default Application
