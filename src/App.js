import React, { Component } from 'react';
import { Tab, Tabs } from 'react-materialize';
import './App.css';
import Intro from "./components/Intro";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import ProjectData from './ProjectData';
import { autobiography, selfIntro } from './IntroData';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: ProjectData,
			autobiography: autobiography,
			selfIntro: selfIntro,
			
		}
	}


	render() {
		return (
			<div className="app">
				<header className="r-layout__header">
					<div className="container">
						<h4>DecadeHew</h4>
						<p>前端工程師</p>
						<p className="email">Email: <a href="mailto:yong_323@hotmail.com">yong_323@hotmail.com</a></p>
						<p className="social-icon">
							<a href="https://www.dropbox.com/s/uqv9z1w1go3mo6s/resume.pdf?dl=0" target="_blank" className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="履歷表"><i className="fas fa-portrait fa-2x"></i></a>
							<a href="https://github.com/decadehew" target="_blank" className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Github"><i className="fab fa-github fa-2x"></i></a>
							<a href="https://www.facebook.com/amy262833" target="_blank" className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="FB"><i className="fab fa-facebook-square fa-2x"></i></a>
							<a href="https://twitter.com/decadehew" target="_blank" className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Twitter"><i className="fab fa-twitter fa-2x"></i></a>
						</p>
					</div>
				</header>
				<main>
					<div className='r-layout__tabs-container'>
						<Tabs className="r-layout__tabs">
							<Tab title="簡介" active className="first" >
								<Intro
									autobiography={this.state.autobiography}
									selfIntro={this.state.selfIntro}
								/>
							</Tab>
							<Tab title="作品集" >
								<Portfolio projectData={this.state.projects} />
							</Tab>
							<Tab title="文章" className="last">
								<Blog />
							</Tab>
						</Tabs>
						
					</div>
				</main>
				<footer></footer>
			</div>
		);
	}
}

export default App;

