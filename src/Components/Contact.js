import { Component } from "react";
import {Fade, Slide } from "react-awesome-reveal"; //slide ke kanan

class Contact extends Component {
    render() {
        if(!this.props.data) return null

        const name = this.props.data.name
        const street = this.props.data.address.street
        const city = this.props.data.address.city
        const state = this.props.data.address.state
        const zip = this.props.data.address.zip
        const phone = this.props.data.phone
        const message = this.props.data.contactmessage

        return(
            <section id="contact">
                <Fade bottom duration={1000}>
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1><span>Get In Touch.</span></h1>
                        </div>
                        <div className="ten columns">
                            <p className="lead">{message}</p>
                        </div>
                    </div>
                </Fade>
                <div className="row">
                    <Slide left duration={1300}>
                        <div className=" eight columns">
                            <form action="" method="post" id="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">
                                            Name <span className="require">*</span>
                                        </label>
                                        <input 
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactName"
                                            onChange={this.handleChange} 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">
                                            Email <span className="require">*</span>
                                        </label>
                                        <input 
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactEmail"
                                            name="contactEmail"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Subject <span className="require">*</span> </label>
                                        <input
                                            type="text"
                                            defaultValue=" "
                                            size="35"
                                            id="contactSubject"
                                            name="contactSubject"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message <span className="require">*</span> </label>
                                        <textarea
                                            cols="50"
                                            rows="10"
                                            id="contactMessage"
                                            name="contactMessage"
                                            resize="false"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button className="submit">Submit</button>
                                        <span id="image-loader">
                                            <img src="images/loader.gif" alt="" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form>

                            <div id="message-warning">Error menn</div>
                            <div id="message-success">
                                <i className="fa fa-check"></i>Your message 
                                <br/>
                            </div>
                        </div>
                    </Slide>

                    <Slide right duration={1000}>
                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Address dan phone</h4>
                                <p className="address">
                                    {name}
                                    <br />
                                    {street}
                                    <br />
                                    {city}, {state},{zip}
                                    <br />
                                    <span>{phone}</span>
                                </p>
                            </div>

                            <div className="widget widget_tweets">
                                <h4 className="widget-title">Latest Tweets</h4>
                                <ul id="twitter">
                                    <li>
                                        <span>
                                            This is Photoshop's version of Lorem Ipsum and is used to demonstrate the visual effects of different typography over an
                                            <a href="https://github.com/agen07sdas">git</a>
                                        </span>
                                        <b>
                                            <a href="./">2 Days ago</a>
                                        </b>
                                    </li>
                                    <li>
                                        <span>
                                            This is Photoshop's version of Lorem Ipsum and is used to demonstrate the visual effects of different typography over an
                                            <a href="https://github.com/agen07sdas">git</a>
                                        </span>
                                        <b>
                                            <a href="https://github.com/agen07sdas">3 Days ago</a>
                                        </b>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </Slide>
                </div>
            </section>
        )


    }
}

export default Contact