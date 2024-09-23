import { Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
// import TimeFormat from 'hh-mm-ss'

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }:any) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <Row>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-6 mt-3'>
          <div className='p-3 under-maintenance-time rounded'>
            <p className='className="mb-1 fs-12 op-5"'>Days</p>
            <h4 className="fw-semibold mb-2">{days}</h4>
          </div>
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-6 mt-3'>
          <div className='p-3 under-maintenance-time rounded'>
            <p className='className="mb-1 fs-12 op-5"'>Hours</p>
            <h4 className="fw-semibold mb-2">{hours}</h4>
          </div>
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-6 mt-3'>
          <div className='p-3 under-maintenance-time rounded'>
            <p className='className="mb-1 fs-12 op-5"'>Minutes</p>
            <h4 className="fw-semibold mb-2">{minutes}</h4>
          </div>
        </Col>
        <Col xxl={3} xl={6} lg={6} md={3} sm={3} className='col-6 mt-3'>
          <div className='p-3 under-maintenance-time rounded'>
            <p className='className="mb-1 fs-12 op-5"'>Seconds</p>
            <h4 className="fw-semibold mb-2">{seconds}</h4>
          </div>
        </Col>
      </Row>
    );
  }
};

export function DayCounter() {
  return (<Countdown date={Date.now() + 8500590000} renderer={rendering} />);
}
