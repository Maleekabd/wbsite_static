import Layout from '@/Layout/Layout'
import React from 'react'
import { useState } from "react";
import Blog from "@/components/Blog"
import Features from "@/components/Features"
import Landingpage from '@/components/Landingpage';

export const  Homepage = () => {
  return (
    <Layout>
      <Landingpage />
      <Blog />
      <Features />
    </Layout>
  )
}

export default  Homepage