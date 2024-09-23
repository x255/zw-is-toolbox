"use client";
import React from 'react'
import { Gallerylist } from '../../../../../shared/data/apps/gallerydata';
import Seo from '../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
const Gallery = () => {
    return (
        <>
            <Seo title={"Gallery"} />
            <Pageheader title="Gallery" heading="Apps" active="Gallery" />
            <div>
                <Gallerylist />
            </div>

        </>
    )
}

export default Gallery
