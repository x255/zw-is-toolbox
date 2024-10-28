"use client";
import { Alert, Button, Card, Col, Form, InputGroup, Nav, Tab } from 'react-bootstrap'
import Link from 'next/link'
import { SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'
import {auth} from '../shared/firebase/firebaseapi'
import { basePath } from '../next.config'
import store from '../shared/redux/store';

const Home = () => {


    const [passwordshow1, setpasswordshow1] = useState(false);

    const [err, setError] = useState("");
    const [data, setData] = useState({
        "username": "nextjsspruko",
        "password": "1234567890",
    });
    const { username, password } = data;
    const changeHandler = (e: { target: { name: any; value: any; }; }) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    const Login = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(username, password).then(
          (            user: any) => { console.log(user); RouteChange(); }).catch((err: { message: SetStateAction<string>; }) => { setError(err.message); });
    };

    const Login1 = (_e: any) => {
        if (data.username == "nextjsspruko" && data.password == "1234567890") {
            RouteChange();
            console.log("hhuhuihgui");
        }
        else {
            setError("The Auction details did not Match");
            setData({
                "username": "nextjsspruko",
                "password": "1234567890",
            });
        }
    };

    const router = useRouter();
    const RouteChange = () => {
        const path = "/landing";
        router.push(path);
    };

    const local_varaiable = store.getState();
  return (
    <>
      <html>
      <body>

    <div className="container">
        <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
            <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                <div className="my-5 d-flex justify-content-center">
                    <Link href="/dashboards/crm">
                        <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo" />
                        <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark" />
                    </Link>
                </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="nextjs">
                    <Card>
                        <Nav variant="pills" className="justify-content-center authentication-tabs">
                        <Nav.Item>
                                <Nav.Link eventKey="nextjs"> 
                                <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/nextjs.png`} alt="logo" className="desktop-logo" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="firebase">
                                <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/firbase.png`} alt="logo" className="desktop-logo" />
                                  </Nav.Link>
                            </Nav.Item>
                           
                        </Nav>
                        <Tab.Content>
                        
                        <Tab.Pane eventKey="nextjs" className='border-0'>
                                <div className="p-4">
                                    <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                    <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Jhon !</p>
                                    <div className="row gy-3">
                                        {err && <Alert variant="danger">{err}</Alert>}
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signin-username" className="text-default">Email</Form.Label>
                                            <Form.Control size="lg"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                name="email"
                                                type='text'
                                                value={username}
                                                onChange={changeHandler}
                                                
                                            />
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="signin-password" className="form-label text-default d-block">Password
                                                <Link href="/authentication/reset-password/basic/" scroll={false} className="float-end text-danger">Forget password ?</Link></Form.Label>
                                            <InputGroup>
                                                <Form.Control size="lg"
                                                    className="form-control"
                                                    placeholder="password"
                                                    name="password"
                                                    type={(passwordshow1) ? 'text' : "password"}
                                                    value={password}
                                                    onChange={changeHandler}
                                                    
                                                />
                                                <Button variant='light' className="btn" type="button" onClick={() => setpasswordshow1(!passwordshow1)}
                                                    id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Button>
                                            </InputGroup>
                                            <div className="mt-2">
                                                <div className="form-check">
                                                    <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                    <Form.Label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </Form.Label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={12} className="d-grid mt-2">
                                            <Button variant='primary' size='lg' className="btn" onClick={Login1}>Sign In</Button>
                                        </Col>
                                    </div>
                                    <div className="text-center">
                                        <p className="fs-12 text-muted mt-3">Dont have an account? <Link href="/authentication/sign-up/basic/" className="text-primary">Sign Up</Link></p>
                                    </div>
                                    <div className="text-center my-3 authentication-barrier">
                                        <span>OR</span>
                                    </div>
                                    <div className="btn-list text-center">
                                        <Button variant='light' className="btn btn-icon">
                                            <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                                        </Button>
                                        <Button variant='light' className="btn btn-icon">
                                            <i className="ri-google-line fw-bold text-dark op-7"></i>
                                        </Button>
                                        <Button variant='light' className="btn btn-icon">
                                            <i className="ri-twitter-x-line fw-bold text-dark op-7"></i>
                                        </Button>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="firebase" className='border-0'>
                                <div className="p-4">
                                    <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                    <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Jhon !</p>
                                    <div className="row gy-3">
                                        {err && <Alert variant="danger">{err}</Alert>}
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signin-username" className="form-label text-default">Email</Form.Label>
                                            <Form.Control size="lg"
                                                className=""
                                                placeholder="Enter your email"
                                                name="email"
                                                type='text'
                                                value={username}
                                                onChange={changeHandler}
                                                
                                            />
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="signin-password" className="form-label text-default d-block">Password
                                                <Link href="/authentication/reset-password/basic/" scroll={false} className="float-end text-danger">Forget password ?</Link></Form.Label>
                                            <InputGroup>
                                                <Form.Control size="lg"
                                                    className="form-control"
                                                    placeholder="Enter your password"
                                                    name="password"
                                                    type={(passwordshow1) ? 'text' : "password"} 
                                                    value={password}
                                                    onChange={changeHandler}
                                                    
                                                />
                                                <Button variant='light' className="btn btn-light" type="button" onClick={()=>setpasswordshow1(!passwordshow1)}
                                                    id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                            </InputGroup>
                                            <div className="mt-2">
                                                <div className="form-check">
                                                    <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                    <Form.Label className=" text-muted fw-normal" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </Form.Label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={12} className="d-grid mt-2">
                                            <Button variant='primary' onClick={Login} size='lg' className="btn">Sign In</Button>
                                        </Col>
                                    </div>
                                    <div className="text-center">
                                        <p className="fs-12 text-muted mt-3">Dont have an account? <Link href="/authentication/sign-up/basic/" className="text-primary">Sign Up</Link></p>
                                    </div>
                                    <div className="text-center my-3 authentication-barrier">
                                        <span>OR</span>
                                    </div>
                                    <div className="btn-list text-center">
                                        <Button variant='light' className="btn btn-icon">
                                            <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                                        </Button>
                                        <Button variant='light' className="btn btn-icon">
                                            <i className="ri-google-line fw-bold text-dark op-7"></i>
                                        </Button>
                                        <Button variant='light' className="btn btn-icon">
                                            <i className="ri-twitter-x-line fw-bold text-dark op-7"></i>
                                        </Button>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Card>
                </Tab.Container>
            </Col>
        </div>
    </div>
      </body>
      </html>
</>
  )
}

export default Home;
