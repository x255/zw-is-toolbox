import { Fragment, useEffect } from 'react';
import Themeprimarycolor, * as switcherdata from "../../data/switcherdata/switcherdata";
import { connect } from "react-redux";
import { ThemeChanger } from "../../redux/action";
import { Button, Nav, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { HelmetProvider, Helmet } from 'react-helmet-async';
const Switcher = ({ local_varaiable, ThemeChanger }:any) => {


    const Switcherclose = () => {
        if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
            document.querySelector(".offcanvas-end")?.classList.remove("show");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
            document.querySelector(".switcher-backdrop")?.classList.add("d-none");
        }

    };
    return (
        <Fragment>
           
                <div className="switcher-backdrop d-none" onClick={() => {
                    Switcherclose();
                }}></div>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                        <Button variant=''
                            onClick={() => {
                                Switcherclose();
                            }}
                            type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                    </div>

                    <div className="offcanvas-body">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="react">

                            <nav className="border-bottom border-block-end-dashed">
                                <Nav variant="pills" className="nav nav-tabs nav-justified switcher-main-tabs" id="switcher-main-tab" role="tablist">
                                    <Nav.Item>
                                        <Nav.Link className="p-0" eventKey="react"> <Button variant='' className="nav-link" id="switcher-home-tab" data-bs-toggle="tab" data-bs-target="#switcher-home"
                                            type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme Styles</Button></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="p-0" eventKey="firebase"> <Button variant='' className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab" data-bs-target="#switcher-profile"
                                            type="button" role="tab" aria-controls="switcher-profile" aria-selected="false">Theme Colors</Button></Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </nav>
                            <Tab.Content className="tab-content" id="nav-tabContent">
                                <Tab.Pane eventKey="react">

                                    <div className="">
                                        <p className="switcher-style-head">Theme Color Mode:</p>
                                        <div className="row switcher-style gx-0">
                                           <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-light-theme">
                                                        Light
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                                        checked={  local_varaiable.dataThemeMode !== 'dark'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Light(ThemeChanger)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-dark-theme">
                                                        Dark
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"
                                                        checked={  local_varaiable.dataThemeMode == 'dark'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Dark(ThemeChanger)} />
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="switcher-style-head">Directions:</p>
                                        <div className="row switcher-style gx-0">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-ltr">
                                                        LTR
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="direction" id="switcher-ltr"
                                                        checked={ local_varaiable.dir == 'ltr'} onChange={(_e) => { }}
                                                        onClick={() => { switcherdata.Ltr(ThemeChanger); }} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-rtl">
                                                        RTL
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="direction" id="switcher-rtl"
                                                        checked={  local_varaiable.dir == 'rtl'} onChange={(_e) => { }}
                                                        onClick={() => { switcherdata.Rtl(ThemeChanger); }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="switcher-style-head">Navigation Styles:</p>
                                        <div className="row switcher-style gx-0">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-vertical">
                                                        Vertical
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="navigation-style" id="switcher-vertical"
                                                        checked={  local_varaiable.dataNavLayout == 'vertical'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Vertical(ThemeChanger)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-horizontal">
                                                        Horizontal
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="navigation-style"
                                                        checked={  local_varaiable.dataNavLayout == 'horizontal'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.HorizontalClick(ThemeChanger)}
                                                        id="switcher-horizontal" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navigation-menu-styles">
                                        <p className="switcher-style-head">Vertical & Horizontal Menu Styles:</p>
                                        <div className="row switcher-style gx-0 pb-2 gy-2">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-menu-click">
                                                        Menu Click
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                        checked={  local_varaiable.dataNavStyle == 'menu-click'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Menuclick(ThemeChanger)}
                                                        id="switcher-menu-click" />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-menu-hover">
                                                        Menu Hover
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                        checked={  local_varaiable.dataNavStyle == 'menu-hover'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.MenuHover(ThemeChanger)}
                                                        id="switcher-menu-hover" />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-icon-click">
                                                        Icon Click
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                        checked={  local_varaiable.dataNavStyle == 'icon-click'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.IconClick(ThemeChanger)}
                                                        id="switcher-icon-click" />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-icon-hover">
                                                        Icon Hover
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                        checked={  local_varaiable.dataNavStyle == 'icon-hover'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.IconHover(ThemeChanger)}
                                                        id="switcher-icon-hover" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidemenu-layout-styles">
                                        <p className="switcher-style-head">Sidemenu Layout Styles:</p>
                                        <div className="row switcher-style gx-0 pb-2 gy-2">
                                            <div className="col-sm-6">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-default-menu">
                                                        Default Menu
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                        id="switcher-default-menu" defaultChecked
                                                        onClick={() => switcherdata.Defaultmenu(ThemeChanger)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-closed-menu">
                                                        Closed Menu
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                        checked={  local_varaiable.dataToggled == "close-menu-close"} onChange={_e => { }}
                                                        onClick={() => switcherdata.Closedmenu(ThemeChanger)}
                                                        id="switcher-closed-menu" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-icontext-menu">
                                                        Icon Text
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                        checked={  local_varaiable.dataToggled == "icon-text-close"} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.iconText(ThemeChanger)}
                                                        id="switcher-icontext-menu" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-icon-overlay">
                                                        Icon Overlay
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                        // checked={  local_varaiable.toggled == 'icon-overlay-close'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.iconOverayFn(ThemeChanger)}
                                                        id="switcher-icon-overlay" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-detached">
                                                        Detached

                                                    </label>
                                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                        checked={  local_varaiable.dataToggled == "detached-close"} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.DetachedFn(ThemeChanger)}
                                                        id="switcher-detached" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-double-menu">
                                                        Double Menu
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                        checked={  local_varaiable.dataVerticalStyle == "doublemenu"} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.DoubletFn(ThemeChanger)}
                                                        id="switcher-double-menu" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="switcher-style-head">Page Styles:</p>
                                        <div className="row switcher-style gx-0">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-regular">
                                                        Regular
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-regular"
                                                        checked={  local_varaiable.dataPageStyle == 'regular'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Regular(ThemeChanger)} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-classic">
                                                        Classic
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-classic"
                                                        checked={  local_varaiable.dataPageStyle == 'classic'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Classic(ThemeChanger)} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-modern">
                                                        Modern
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-modern"
                                                        checked={  local_varaiable.dataPageStyle == 'modern'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Modern(ThemeChanger)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="switcher-style-head">Layout Width Styles:</p>
                                        <div className="row switcher-style gx-0">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-full-width">
                                                        Full Width
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="layout-width" id="switcher-full-width"
                                                        checked={  local_varaiable.dataWidth == 'fullwidth'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Fullwidth(ThemeChanger)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-boxed">
                                                        Boxed
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="layout-width" id="switcher-boxed"
                                                        checked={  local_varaiable.dataWidth == 'boxed'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Boxed(ThemeChanger)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="switcher-style-head">Menu Positions:</p>
                                        <div className="row switcher-style gx-0">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-menu-fixed">
                                                        Fixed
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-fixed"
                                                        checked={  local_varaiable.dataMenuPosition == 'fixed'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.FixedMenu(ThemeChanger)} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-menu-scroll">
                                                        Scrollable
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-scroll"
                                                        checked={  local_varaiable.dataMenuPosition == 'scrollable'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.scrollMenu(ThemeChanger)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="switcher-style-head">Header Positions:</p>
                                        <div className="row switcher-style gx-0">
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-header-fixed">
                                                        Fixed
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="header-positions"
                                                        id="switcher-header-fixed"
                                                        checked={  local_varaiable.dataHeaderPosition == 'fixed'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Headerpostionfixed(ThemeChanger)} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check switch-select">
                                                    <label className="form-check-label" htmlFor="switcher-header-scroll">
                                                        Scrollable
                                                    </label>
                                                    <input className="form-check-input" type="radio" name="header-positions"
                                                        checked={  local_varaiable.dataHeaderPosition == 'scrollable'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.Headerpostionscroll(ThemeChanger)}
                                                        id="switcher-header-scroll" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="firebase">
                                    <div>
                                        <div className="theme-colors">
                                            <p className="switcher-style-head">Menu Colors:</p>
                                            <div className="d-flex switcher-style pb-2">
                                                <div className="form-check switch-select me-3">

                                                    <input className="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Light Menu" type="radio" name="menu-colors"
                                                        checked={  local_varaiable.dataMenuStyles == 'light'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.lightMenu(ThemeChanger)} id="switcher-menu-light" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Dark Menu" type="radio" name="menu-colors"
                                                        checked={  local_varaiable.dataMenuStyles == 'dark'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.darkMenu(ThemeChanger)} id="switcher-menu-dark" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Color Menu" type="radio" name="menu-colors"
                                                        checked={  local_varaiable.dataMenuStyles == 'color'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.colorMenu(ThemeChanger)} id="switcher-menu-primary" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Gradient Menu" type="radio" name="menu-colors"
                                                        checked={  local_varaiable.dataMenuStyles == 'gradient'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.gradientMenu(ThemeChanger)} id="switcher-menu-gradient" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-transparent"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Transparent Menu"
                                                        checked={  local_varaiable.dataMenuStyles == 'transparent'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.transparentMenu(ThemeChanger)}
                                                        type="radio" name="menu-colors" id="switcher-menu-transparent" />
                                                </div>
                                            </div>
                                            <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Menu dynamically change from below Theme Primary color picker</div>
                                        </div>
                                        <div className="theme-colors">
                                            <p className="switcher-style-head">Header Colors:</p>
                                            <div className="d-flex switcher-style pb-2">
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Light Header" type="radio" name="header-colors"
                                                        checked={  local_varaiable.dataHeaderStyles == 'light'} onChange={(_e) => { }}
                                                        id="switcher-header-light" onClick={() => switcherdata.lightHeader(ThemeChanger)}/>
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Dark Header" type="radio" name="header-colors"
                                                        checked={  local_varaiable.dataHeaderStyles == 'dark'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.darkHeader(ThemeChanger)}
                                                        id="switcher-header-dark" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Color Header" type="radio" name="header-colors"
                                                        checked={  local_varaiable.dataHeaderStyles == 'color'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.colorHeader(ThemeChanger)}
                                                        id="switcher-header-primary" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Gradient Header" type="radio" name="header-colors"
                                                        checked={  local_varaiable.dataHeaderStyles == 'gradient'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.gradientHeader(ThemeChanger)}
                                                        id="switcher-header-gradient" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-transparent" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Transparent Header" type="radio" name="header-colors"
                                                        checked={  local_varaiable.dataHeaderStyles == 'transparent'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.transparentHeader(ThemeChanger)}
                                                        id="switcher-header-transparent" />
                                                </div>
                                            </div>
                                            <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header dynamically change from below Theme Primary color picker</div>
                                        </div>
                                        <div className="theme-colors">
                                            <p className="switcher-style-head">Theme Primary:</p>
                                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-1" type="radio"
                                                      checked={  local_varaiable.colorPrimaryRgb == '58, 88, 146'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor1(ThemeChanger)}
                                                        name="theme-primary" id="switcher-primary"/>
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-2" type="radio"
                                                     checked={  local_varaiable.colorPrimaryRgb == '92, 144, 163'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor2(ThemeChanger)}
                                                        name="theme-primary" id="switcher-primary1" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                                     checked={  local_varaiable.colorPrimaryRgb == '161, 90, 223'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor3(ThemeChanger)}
                                                        id="switcher-primary2" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                                      checked={  local_varaiable.colorPrimaryRgb == '78, 172, 76'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor4(ThemeChanger)}
                                                        id="switcher-primary3" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                                     checked={  local_varaiable.colorPrimaryRgb == '223, 90, 90'} onChange={(_e) => { }}
                                                        onClick={() => switcherdata.primaryColor5(ThemeChanger)}
                                                        id="switcher-primary4" />
                                                </div>
                                                <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                                    <div className='theme-container-primary'>
                                                        <button className="">nano</button>
                                                    </div>
                                                    <div className='pickr-container-primary'>
                                                        <div className='pickr'>
                                                        <button className='pcr-button' onClick={(ele: any) => {
                                                            if (ele.target.querySelector("input")) {
                                                              ele.target.querySelector("input").click();
                                                            }
                                                          }}>
                                                            <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                                          </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="theme-colors">
                                            <p className="switcher-style-head">Theme Background:</p>
                                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-bg-1" type="radio"
                                                        onClick={() => switcherdata.backgroundColor1(ThemeChanger)}
                                                        checked={  local_varaiable.bodyBg == '20, 30 ,96'} onChange={(_e)=>{}}
                                                        name="theme-background" id="switcher-background"
                                                    />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-bg-2" type="radio"
                                                        onClick={() => switcherdata.backgroundColor2(ThemeChanger)}
                                                        checked={  local_varaiable.bodyBg == '8,78,115'} onChange={(_e)=>{}}
                                                        name="theme-background" id="switcher-background1" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-bg-3" type="radio" name="theme-background"
                                                        onClick={() => switcherdata.backgroundColor3(ThemeChanger)}
                                                        checked={  local_varaiable.bodyBg == '90,37,135'} onChange={(_e)=>{}}
                                                        id="switcher-background2" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-bg-4" type="radio"
                                                        onClick={() => switcherdata.backgroundColor4(ThemeChanger)}
                                                        checked={  local_varaiable.bodyBg == '24,101,51'} onChange={(_e)=>{}}
                                                        name="theme-background" id="switcher-background3" />
                                                </div>
                                                <div className="form-check switch-select me-3">
                                                    <input className="form-check-input color-input color-bg-5" type="radio"
                                                        onClick={() => switcherdata.backgroundColor5(ThemeChanger)}
                                                    checked={  local_varaiable.bodyBg == '120,66,20'} onChange={(_e)=>{}}
                                                        name="theme-background" id="switcher-background4" />
                                                </div>
                                                <div className="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                                                    <div className='theme-container-primary' >
                                                        <button className="">nano</button>
                                                    </div>
                                                    <div className='pickr-container-primary'>
                                                        <div className='pickr'>
                                                          
                                                            <button className='pcr-button' onClick={(ele: any) => {
                                                              if (ele.target.querySelector("input")) {
                                                                ele.target.querySelector("input").click();
                                                              }
                                                            }}>
                                                              <switcherdata.Themebackgroundcolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-image mb-3">
                                            <p className="switcher-style-head">Menu With Background Image:</p>
                                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                                <div className="form-check switch-select m-2">
                                                    <input className="form-check-input bgimage-input bg-img1" type="radio"
                                                        onClick={() => switcherdata.bgImage1(ThemeChanger)}
                                                        name="theme-background" id="switcher-bg-img" />
                                                </div>
                                                <div className="form-check switch-select m-2">
                                                    <input className="form-check-input bgimage-input bg-img2" type="radio"
                                                        onClick={() => switcherdata.bgImage2(ThemeChanger)}
                                                        name="theme-background" id="switcher-bg-img1" />
                                                </div>
                                                <div className="form-check switch-select m-2">
                                                    <input className="form-check-input bgimage-input bg-img3" type="radio" name="theme-background"
                                                        onClick={() => switcherdata.bgImage3(ThemeChanger)}
                                                        id="switcher-bg-img2" />
                                                </div>
                                                <div className="form-check switch-select m-2">
                                                    <input className="form-check-input bgimage-input bg-img4" type="radio"
                                                        onClick={() => switcherdata.bgImage4(ThemeChanger)}
                                                        name="theme-background" id="switcher-bg-img3" />
                                                </div>
                                                <div className="form-check switch-select m-2">
                                                    <input className="form-check-input bgimage-input bg-img5" type="radio"
                                                        onClick={() => switcherdata.bgImage5(ThemeChanger)}
                                                        name="theme-background" id="switcher-bg-img4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <div className="d-flex justify-content-between canvas-footer flex-wrap">
                                    <Link href="#!" scroll={false} id="reset-all" className="btn btn-danger m-1 w-100"
                                        onClick={() => switcherdata.Reset(ThemeChanger)}>Reset</Link>
                                </div>
                            </Tab.Content>
                        </Tab.Container>
                    </div>

                </div>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Switcher);
