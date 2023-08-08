import React, { Component } from 'react';

class Footer extends React.Component {
  render() {
    return <>
      
        <footer class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6 mb-5">
              <h5>About Us</h5>
              <p>At Interior.in, we are passionate about creating spaces that reflect your unique style and personality. We understand that your home or workspace is not just a place; it's an extension of who you are and what you stand for. That's why we offer comprehensive interior solutions that cater to all your design and decor needs.</p>
            </div>

           

            <div class="col-12 col-lg-6 mb-3">
              <form>

                <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <img src="asset/logo/insterior-logo-trans.png" className='logo' alt="Logo" ></img>
                </a>
                <br></br>
                <h5 className='int-home-small-text-subscribe-footer'>Subscribe now to get the latest updates!</h5>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address" fdprocessedid="smne5j" />
                  <button class="btn btn-primary" type="button" fdprocessedid="ja7ho">Subscribe</button>
                </div>

              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              {/* <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
            </ul>
          </div>
          </div>
        </footer>
     
    </>
  }
}

export default Footer;