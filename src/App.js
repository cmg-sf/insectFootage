import React, { Component } from 'react'

import Footer from './components/Footer/Footer';

import poster from './img/poster.jpg';
import logo from './img/sf-logo.png';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  handleChange(val){
    this.setState({
      search: val
    })
  }
  search(e){
    e.preventDefault();
    window.location.assign(`https://stockfootage.com/?s=insect+${this.state.search}&post_type=product`);
  }
  render() {
    return (
      <div className="App">

        <div className="bg-video-container">
          <video className="bg-video" loop="1" autoPlay="1" playsInline="" muted="1" data-bgvideo="" poster={poster} data-bgvideo-fade-in="500" data-bgvideo-pause-after="120" data-bgvideo-show-pause-play="false" data-bgvideo-pause-play-x-pos="right" data-bgvideo-pause-play-y-pos="top">
            <source src="/assets/bg-video.mp4" type="video/mp4"/>
            <source src="/assets/bg-video.mp4" type="video/webm"/>
            <source src="/assets/bg-video.mp4" type="video/ogg"/>
          </video>
        </div>

        <div id="vidtop-content">
          <header>
            <div></div>
            <a className="nav-link" href="https://stockfootage.com/">HOME</a>
            <a className="nav-link" href="https://stockfootage.com/shop">SHOP</a>
            <a className="nav-link" href="https://stockfootage.com/my-account">LOGIN</a>
          </header>
          <div className="interact-box">
            <img src={logo} alt=""/>
            <h1><span style={{color: 'rgb(188, 52, 38)'}}>Insect</span>Footage.com</h1>
            <form className="search" onSubmit={e=>this.search(e)}>
              <input placeholder="Search" onChange={e=>this.handleChange(e.target.value)} value={this.state.search} type="text"/>
            </form>
          </div>
          <div></div>
        </div>

        <div className="info-sec">
          <section>
            <h1>Insect footage in 4K and HD Royalty Free</h1>
            <h4 className="sub-banner">InsectFootage.com is a division of <a style={{textDecoration:'none', color: '#999'}} href="https://stockfootage.com/">StockFootage.com</a></h4>
          </section>
          <div className="hr-red"/>

		<section className="category-sec">
				<h1>Browse by Category</h1>
				<div className="categories">
						<a href="https://stockfootage.com/?s=insect+Scorpion&post_type=product" className="cat">Scorpion</a>
						<a href="https://stockfootage.com/?s=insect+Cockroach&post_type=product" className="cat">Cockroach</a>
						<a href="https://stockfootage.com/?s=insect+Spider&post_type=product" className="cat">Spider</a>
						<a href="https://stockfootage.com/?s=insect+Mantis&post_type=product" className="cat">Mantis</a>
						<a href="https://stockfootage.com/?s=insect+Beetle&post_type=product" className="cat">Beetle</a>
						<a href="https://stockfootage.com/?s=insect+Millipede&post_type=product" className="cat">Millipede</a>
						<a href="https://stockfootage.com/?s=insect+Centipede&post_type=product" className="cat">Centipede</a>
						<a href="https://stockfootage.com/?s=insect+Ant&post_type=product" className="cat">Ant</a>
						<a href="https://stockfootage.com/?s=insect+Assasin+Beetle&post_type=product" className="cat">Assasin Beetle</a>
				</div>
		</section>
		<br/>		
<div className="hr-red"/>

          <section className="contributors">
            <h1><span className="contrib-show">Contributors Showcase</span> - Inspired to Create</h1>


            <div className="contributor-previews">
              <div className="contributor-preview">
                <iframe title="yt1" width="350" height="195" src="https://www.youtube.com/embed/KlD3nJtTL1I" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt2" width="350" height="195" src="https://www.youtube.com/embed/ZQNEwxRXUiI" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt3" width="350" height="195" src="https://www.youtube.com/embed/FI2Fp8twyo8" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <div className="mobile-contributor-previews">
              <div className="contributor-preview">
                <iframe title="yt4" width="250" height="150" src="https://www.youtube.com/embed/KlD3nJtTL1I" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt5" width="250" height="150" src="https://www.youtube.com/embed/ZQNEwxRXUiI" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt6" width="250" height="150" src="https://www.youtube.com/embed/FI2Fp8twyo8" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <br/>
            <p>Download stunning macro stock video footage clips of butterflies, spiders, beetles, black widows, millipedes, mombos, and pillbugs.  Inspect up close scorpions, tarantulas, and other bugs with wings and antenna as you explore this insect collection.</p>
          </section>
          <br/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
