"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, FreeMode, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { connect } from 'react-redux';
import { AddToCart, ProductReduxData } from '@/shared/redux/action';
import { useSearchParams } from 'next/navigation';

const Productdetails = ({ local_varaiable, AddToCart, }: any) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // let  {id}  = searchParams;
  const searchParams = useSearchParams()

  const id = searchParams.get('id')

  const [defaultData, setdefaultData] = useState<any>();

  useEffect(() => {
    // console.log(useSearchParams(), "useSearchParams")


    if (id != undefined) {
      let data = local_varaiable.ecommercedata.filter((ele: any) => {


        return ele.id == id;
      });
      setdefaultData(data[0]);
    }
    else {
      setdefaultData({
        id: Math.random(),
        preview: "../../../assets/images/ecommerce/png/15.png",
        images: [
          { img: "../../../assets/images/ecommerce/png/15.png" },
          { img: "../../../assets/images/ecommerce/png/13.png" },
          { img: "../../../assets/images/ecommerce/png/14.png" },
          { img: "../../../assets/images/ecommerce/png/17.png" }
        ],
        description: "",
        newpr: '$2,599.00',
        offerprice: '$1,299',
      });
    }
  }, [id]);
  return (
    <Fragment>
      <Seo title={"Product Details"} />
      <Pageheader currentpage="Product Details" activepage="Ecommerce" mainpage="Product Details" />

    </Fragment>
  )
}
const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Productdetails);
// export default Productdetails