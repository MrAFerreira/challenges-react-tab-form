import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/es/carousel/style/css';
import './style.scss';

class TabForm extends Component {
  render() {
    return (
      <div className="tabform">
        <img className="logo" src="offermanager.png" alt="offfermanager logo" />
        <h2>Share OfferManager!</h2>
        <Carousel>
          <div className="form-slide">
            <p>Win up to 20.000 OfferTest credits with 3 simple steps!</p>
            <p>
              Share OfferManager with 2 friends and we'll hook you up with 10.000 free credits for
              each one, to use on OfferTest
            </p>
            <span>How does it work?</span>
            <img src="arrow-white.png" alt="next" />
          </div>
          <div className="form-slide">
            <p>STEP 1</p>
            <p>Fill bellow the name and email of your 2 friends</p>
            <img src="arrow-white.png" alt="next" />
          </div>
          <div className="form-slide">
            <p>STEP 2</p>
            <p>
              Your friends will receive an email from Mobrand informing them that you've given them
              the possibility to try OfferManager.
            </p>
            <img src="arrow-white.png" alt="next" />
          </div>
          <div className="form-slide">
            <p>STEP 3</p>
            <p>
              After their first OfferTest purchase, they win 10.000 extra free credits each and
              you'll get 10.000 free credits from each friend.
            </p>
            <p>
              <strong>Remember you have only 2 invitations, use them wisely!</strong>
            </p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default TabForm;
