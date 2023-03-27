 import React, { useEffect } from 'react';

export default function Linked(){
   
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


    return (
      <>
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
        <div
          class="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="abhishek-daulatkar-3b328a194"
          data-version="v1"
        >
          <a
            class="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/abhishek-daulatkar-3b328a194?trk=profile-badge"
          >
           Abhishek Daulatkar THE GODDD OF AALL
          </a>
              
        </div>
      </>
    );
}