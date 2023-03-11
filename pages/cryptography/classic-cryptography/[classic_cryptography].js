import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/Layout/Layout';
import { data } from '@/data';
import slugify from 'slugify';

export const Cryptography_Dynamic = () => {
  const router = useRouter();
  const test = router.query.classic_cryptography

  return (
    <Layout pageTitle={test}>
      tes  {test}
    </Layout>
  )
}

export default Cryptography_Dynamic