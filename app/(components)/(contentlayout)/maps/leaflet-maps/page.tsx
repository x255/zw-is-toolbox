"use client";
import dynamic from 'next/dynamic';
const Leafletmaps = dynamic(() => import("../../../../../shared/data/maps/leafletmapdata"), {
  ssr: false
});
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'
const Leaflet = () => {
  return (
    <>
   <Seo title={"Leaflet"} />
    <Pageheader title="Leaflet" heading="Maps" active="Leaflet" />
      <Leafletmaps />
    </>
  )
}

export default Leaflet
