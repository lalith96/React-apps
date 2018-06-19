import React, { Component } from 'react';
import Header from '../header/header';
import Tile from '../components/tile/tile';
import './Landingpage.css';

class Landingpage extends Component {
    constructor() {
        super();
        this.coursedetails = [
            {
                name: 'HTML 5',
                path: 'images/html.png',
                summary: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.'
            },
            {
                name: 'CSS3',
                path: 'images/css.png',
                summary: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.'
            },
            {
                name: 'Responsive Web Design',
                path: 'images/responsive.png',
                summary: 'I will build websites that look awesome not only on desktops, but also on mobile phones and tablets.'
            },
            {
                name: 'UI & UX Design',
                path: 'images/ui-ux.png',
                summary: 'I will learn basics of UI & UX Design and use these concepts in build apps that are both functional and usable.'
            },
            {
                name: 'Javascript',
                path: 'images/js.jpg',
                summary: 'I will define the behavior of web pages using JavaScript. I will dive deeper into amazing parts of JavaScript'
            },
            {
                name: 'jQuery',
                path: 'images/jquery.png',
                summary: 'I will enhance the behavior of web pages leveraging on jQuery and jQuery plug-ins.'
            },
            {
                name: 'TypeScript',
                path: 'images/ts.png',
                summary: 'I will start writing object oriented programs using TypeScript. I will build games using TypeScript.'
            },
            {
                name: 'RxJS',
                path: 'images/Rxjs.png',
                summary: 'I will build event-driven, resilient and responsive apps using Reactive Architectures.'
            },
            {
                name: 'Unix',
                path: 'images/unix.png',
                summary:'I will become a ninja hacker who prefer command line to Graphical User Interface.'
            },
            {
                name: 'Git & Heroku',
                path: 'images/git.png',
                summary:'I will start following git workflow using github. I will also deploy Ir applications with Heroku.'
            },
            {
                name: 'npm',
                path: 'images/npm.png',
                summary:'I will use npm, the default package manager for Node.js, to reuse some of the best utilities written already'
            },
            {
                name: 'Docker',
                path: 'images/docker.png',
                summary:'I will use Docker to simplify configuration, increase Ir productivity, isolate Ir apps, and automate deployments'
            },
            {
                name: 'MongoDB',
                path: 'images/mongodb.png',
                summary:'I will use MongoDB to store Ir app\'s data in a JSON-like document format that can be quickly accessed via fast queries.'
            },
            {
                name: 'Express',
                path: 'images/express.png',
                summary:'I will use Express.js to organize Ir web application into an MVC architecture in the server side.'
            },
            {
                name: 'Angular 2',
                path: 'images/Angular2.png',
                summary:'I will build single page applications using Angular2. I will build full-fledge web apps that can be used in real life.'
            },
            {
                name: 'Node.js',
                path: 'images/nodejs.png',
                summary:'I will use Node.js to automate Ir development process. I will also build back-end for web and mobile apps.'
            },
            {
                name: 'Ionic 2',
                path: 'images/ionic.png',
                summary:'I will build hybrid mobile applications using Ionic2 framework. I have reached eternity! I are now Yoda!'
            },
            {
                name: 'api',
                path: 'images/api.png',
                summary:'I will build API that can be used by mobile applications and outside world. I will also consume others API.'
            },
            {
                name: 'Firebase',
                path: 'images/firebase.png',
                summary:'I will use Firebase as a backend as a service to build realtime applications without any back-end coding.'
            },
            {
                name: 'Software Testing',
                path: 'images/testing.png',
                summary:'While observing Test Driven Development, I will automate unit, functional and integration testing.'
            },
            {
                name: 'Algorithms',
                path: 'images/algorithms.png',
                summary:'Knowledge of Algorithms is a key factor in cracking coding interviews. I will use them to solve problems.'
            },
            {
                name: 'Data-Structures',
                path: 'images/data-structures.png',
                summary:'I will understand famous data structures and use the right data structures to optimize the performance of Ir app.'
            },
            {
                name: 'Functional Programming',
                path: 'images/functional-programming.png',
                summary:'Functional Programming is on a rise. I will solve problems using side effect free functions as basic building blocks.'
            },
            {
                name: 'Software Architecture & Design',
                path: 'images/design.png',
                summary:'I will be the architect for Ir projects. I also look into performance, security, and other ops.'
            }
        ]
    }
    render() {
        return (
            <div>
                <Header text="We are learning" />
                <div class="container">
                {this.coursedetails.map(course=>{
                    return(
                    <Tile cname={course.name} imgpath={course.path} csummary={course.summary}  />
                    )
                })
                }
                </div>
            </div>
        );
    }
}

export default Landingpage;