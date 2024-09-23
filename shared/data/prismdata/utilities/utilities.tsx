export const avatars1=
`<span className="avatar me-2 avatar-radius-0">
<img src="../../assets/images/faces/1.jpg" alt="img" />
</span>
<span className="avatar me-2">
<img src="../../assets/images/faces/2.jpg" alt="img" />
</span>
<span className="avatar me-2 avatar-rounded">
<img src="../../assets/images/faces/3.jpg" alt="img" />
</span>`
export const avatars2=
` {Avatarsizes.map((idx) => (
    <span className={'avatar avatar-{idx.class} me-2'} key={Math.random()}>
        <img src={idx.src} alt="img" />
    </span>
))}`
export const avatars3=
` {Avataricons.map((idx) => (
    <span className={'avatar avatar-{idx.class} me-2 avatar-rounded'} key={Math.random()}>
        <img src={idx.src} alt="img" />
        <Badge bg={idx.color} className="badge rounded-pill avatar-badge"><i className={idx.icon}></i></Badge>
    </span>
))}`
export const avatars4=
`  {Avatarindicators.map((idx) => (
    <span className={'avatar avatar-{idx.class} me-2 online avatar-rounded'} key={Math.random()}>
        <img src={idx.src} alt="img" />
    </span>
))}`
export const avatars5=
` {Avataroffline.map((idx) => (
    <span className={'avatar avatar-{idx.class} me-2 offline avatar-rounded'} key={Math.random()}>
        <img src={idx.src} alt="img" />
    </span>
))}`
export const avatars6=
`   {Avataricons.map((idx) => (
    <span className={'avatar avatar-{idx.class} me-2 avatar-rounded'} key={Math.random()}>
        <img src={idx.src} alt="img" />
        <Badge bg={idx.color} className="badge rounded-pill  avatar-badge">{idx.text}</Badge>
    </span>
))}`
export const avatars7=
`    <div className="avatar-list-stacked">
{Avatarstacked.map((idx) => (
    <span className="avatar" key={Math.random()}>
        <img src={idx.src} alt="img" />
    </span>
))}
<Link className="avatar bg-primary text-fixed-white" href="#!"> +8 </Link>
</div>`
export const avatars8=
`  <div className="avatar-list-stacked">
                            
{Avatarstacked.map((idx) => (
    <span className="avatar avatar-rounded" key={Math.random()}>
        <img src={idx.src} alt="img" />
    </span>
      
))}
 <Link className="avatar bg-primary text-fixed-white" href="#!" style={{borderRadius:"50px"}}> +8 </Link>
</div>`
export const avatars9=
`   {Avatarinitials.map((idx) => (
    <span className={'avatar avatar-{idx.class} m-2 bg-{idx.color}'} key={Math.random()}>{idx.text}
    </span>
))}`
export const borders1=
`   <span className="border border-container"></span>
<span className="border-top border-container"></span>
<span className="border-end border-container"></span>
<span className="border-bottom border-container"></span>
<span className="border-start border-container"></span>`
export const borders2=
`  <span className="border-0 border-container"></span>
<span className="border border-top-0 border-container"></span>
<span className="border border-end-0 border-container"></span>
<span className="border border-bottom-0 border-container"></span>
<span className="border border-start-0 border-container"></span>`
export const borders3=
`   <span className="border border-container border-1"></span>
<span className="border border-container border-2"></span>
<span className="border border-container border-3"></span>
<span className="border border-container border-4"></span>
<span className="border border-container border-5"></span>`
export const borders4=
`<span className="border border-container border-primary"></span>
<span className="border border-container border-secondary"></span>
<span className="border border-container border-success"></span>
<span className="border border-container border-danger"></span>
<span className="border border-container border-warning"></span>
<span className="border border-container border-info"></span>
<span className="border border-container border-light"></span>
<span className="border border-container border-dark"></span>
<span className="border border-container border-white"></span>`
export const borders5=
`  <div className="mb-4">
<label htmlFor="exampleFormControlInput1" className="form-label">Email
    address</label>
<input type="email" className="form-control border-success"
    id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
Below Shows Danger Border
</div>
<div
className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
Customizing borders with backgrounds colors
</div>`
export const borders6=
` <div className="border border-success p-2 mb-2">This is default success border</div>
<div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
    opacity
    success border
</div>
<div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
    opacity
    success border
</div>
<div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
    opacity
    success border
</div>
<div className="border border-success p-2 border-opacity-10">This is 10% opacity
    success
    border
</div>`
export const borders7=
`  <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-top" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-end" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-bottom" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-start" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-circle" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img  rounded-pill" alt="..." />`
export const borders8=
`  <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />`
