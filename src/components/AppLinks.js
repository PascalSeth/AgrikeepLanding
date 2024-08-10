import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactGA from 'react-ga4';

class AppLinks extends Component {
  trackClickGA = (event_name) => {
    // Add event tracking here, but ensure it only runs when the button is clicked
    ReactGA.event({
      category: 'Button Click',
      action: event_name,
    });
  };

  render() {
    const { forNav } = this.props;
    const appleLink = ""
    const googleLink = ""
    return (
      <div className="my-3 mx-auto text-center">
        <Link href={appleLink} onClick={ () => this.trackClickGA("AppStoreLinkClick") }>
          <Image 
            src="/images/download_apple.png"
            alt="Download Agrikeeper on the App Store"
            height={50}
            width={150}
            className="m-2"
          />
        </Link>
        <Link href={googleLink} onClick={ () => this.trackClickGA("GooglePlayLinkClick") }>
          <Image 
            src="/images/download_google.png"
            alt="Download Agrikeeper on the Play Store"
            height={50}
            width={150}
            className="m-2"
          />
        </Link>
      </div>
    );
  }
}

export default AppLinks;
