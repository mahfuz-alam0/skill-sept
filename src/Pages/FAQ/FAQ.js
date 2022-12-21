import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const FAQ = () => {
    const { theme } = React.useContext(AuthContext);
    return (
        <div className={!theme? 'bg-dark text-light': undefined}>
            <Container>
                <Accordion className='pt-4'>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="0">
                        <Accordion.Header>Who are these courses for ?</Accordion.Header>
                        <Accordion.Body>
                            Who wants to become a web developer. For those who want to learn web development from scratch and then get a job in a software company as a web developer. For those who don't know much about programming or web development. Even those who have studied CSE for four years and could not decide what to do, did not learn much, they can learn complete web development from this course and apply for jobs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="1">
                        <Accordion.Header>What prior experience do I need to have before starting this course?</Accordion.Header>
                        <Accordion.Body>
                            Since we are teaching from scratch. So you don't need to know anything beforehand. But if you have time, you can do these three things.<br />
                            1. You need to keep some brain space to get the things in your head after watching the video.<br />
                            2. Just joining the course will not make you an auto web developer. Must have a hard-working, stick-to-it mentality.<br />
                            3. If you get stuck somewhere, you have to have the mentality of asking for help and the will to stick around.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="2">
                        <Accordion.Header>What is in the course?</Accordion.Header>
                        <Accordion.Body>
                            You can understand that by looking at the course curriculum. But in short, this course has everything you need to become a serious web developer these days. In short, from HTML, CSS to bootstrap, JavaScript, Git, ES6, REST API, server, JSON are there. At the same time, there is a system for making complete websites with React, the framework that currently has the most jobs. In addition, there are many other things including node, database (mongodb), debug, problem solving, interview questions. And in the whole course you will be shown 11 websites. 11 more websites will be your homework. In order to complete this whole thing, there is no way without becoming a top-notch junior web developer.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="3">
                        <Accordion.Header>How to get the course videos?</Accordion.Header>
                        <Accordion.Body>
                            Course videos will be pre-recorded. You open an account and enroll in this course. Videos will be given one module per day from the start of the course. Each module usually has 10 to 12 videos. You have to finish watching these videos within the day they are released. Therefore, dedicated time should be kept daily for the course. And during that time, you can watch the video lying down, standing, leaning, swinging your legs, dancing, or even hiding under the bed.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="4">
                        <Accordion.Header>How long will it take to complete this course?</Accordion.Header>
                        <Accordion.Body>
                            If you watch videos for 1 to 1.5 hours every day, along with extra 4 to 6 hours of practice, it will take you about 5 months. However, sometimes extra time should be reserved for homework and take away projects. Must bring hard work mentality. There are no cheats or shortcuts.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="5">
                        <Accordion.Header>What is the educational background required to do the course?</Accordion.Header>
                        <Accordion.Body>
                            We have designed the course in such a way that academic background does not matter. You can do this course from any academic background. University students, college students, job seekers, unemployed, lovers, runaway lovers, even lovers who don't pick up the phone, have been started from scratch so that everyone can learn. But must give time 6-8 hours. Minimum 4-5 hours.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="6">
                        <Accordion.Header>What things do I need?</Accordion.Header>
                        <Accordion.Body>
                            First, it takes dedicated time. Mast 6-8 hours per day. 8-10 hours if possible (If you can't give time. If you don't want to do hard work, there will be no benefit in enrolling in the course.) Secondly you will need a laptop or a computer (where software like node, Visual Studio Code can be installed) and thirdly you will need minimum 2 - 10 Mbps internet. Broadband is preferred so that the course videos can be viewed well. To become a professional web developer, minimum 4 months of serious hard work should be kept in mind.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="7">
                        <Accordion.Header>Why is this course free?</Accordion.Header>
                        <Accordion.Body>
                            This course is not just a video watching course. Because there are 30 professional developers behind this course. Will see your 11 assignments. Assignment marks plus feedback will be provided. There will also be seven web developers who will be ready to answer any of your questions within 24 hours. If there is a problem with your code, there will be a dedicated developer to solve it by screen sharing. Also, developers, video editors, course moderators, live conceptual sessions, job placement support, all the people who work to make the website of the course, their families will not be able to run for free anymore. That's why we have to keep a minimum fee in this course.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={!theme? 'bg-dark text-light':undefined} eventKey="8">
                        <Accordion.Header>Does everyone get a job from your course?</Accordion.Header>
                        <Accordion.Body>
                            no 100% not everyone gets job. But those who finish the main course. And SCIC finishes well and gets 70% of them jobs or interns. Some of the rest may be early in university or school and not looking for jobs or internships. But those who cannot finish the course on time. We have support for them too and some of them sometimes get jobs or interns.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default FAQ;