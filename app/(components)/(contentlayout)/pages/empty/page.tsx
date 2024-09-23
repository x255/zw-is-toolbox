"use client";
import React from 'react'
import { Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const Empty = () => {
  return (
    <>
      <Seo title={"Empty"} />

      <Pageheader title="Empty" heading="Pages" active="Empty" />
    </>
  )
}

export default Empty
