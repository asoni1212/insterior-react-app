import React, { Component } from 'react';

class Home extends React.Component {

    render() {
        return <>
            <br></br>
            <br></br>
            <div className='container int-home-container-coming-soon'>
                <br></br>
                <br></br>
                <br></br>
                <p className='int-home-text-coming-soon'>COMING SOON</p>
                <p className='int-home-small-text-coming-soon'>We're working hard to improve our website and we'll ready to launch soon</p>
                <br></br>
                <br></br>
                <br></br>
                <h5 className='int-home-small-text-coming-soon'>Subscribe now to get the latest updates!</h5>
                <br></br>
                <div class="d-flex flex-column flex-sm-row int-home-subscripb-textbox-conatiner gap-2">
                    <label for="newsletter1" class="visually-hidden int-home-small-text-coming-soon">Email address</label>
                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" fdprocessedid="smne5j" />
                    <button class="btn btn-primary" type="button" fdprocessedid="ja7ho">Subscribe</button>
                </div>
                <br></br>
                <br></br>
            </div>
        </>
    }
}
export default Home;