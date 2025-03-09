import { Component } from 'react';
import ai from "../../assets/images/events/ai_event.jpg";
import fg from "../../assets/images/events/evangeline-shaw-BdV23FLkmxQ-unsplash.jpg";
import vs from "../../assets/images/events/visuals-Y4qzW3AsvqI-unsplash.jpg";
import "./upcoming-events.css"
export class UpcomingEvents extends Component {
    eventList = [
        {
            bgImage: ai,
            date: "Saturday, March 29",
            location: "Webinar",
            timing: "11 AM - 1 PM",
            headLine: "AI Centre of Excellence in Education",
            description: "Discover how Finolity and Ingram Micro leverage Microsoft Teams to transform hybrid work strategies, improve collaboration, and drive productivity for businesses.",
            url: "https://finolity.com/events/ai-centre-of-excellence-in-education-transforming-learning-with-innovation-introduction/"
        },
        {
            bgImage: fg,
            date: "Sunday, May 25",
            location: "New Delhi",
            timing: "12 AM - 2 PM",
            headLine: "Join Finolity Green Horizons Summit 2025",
            description: "Join the Finolity Green Horizons Summit 2025 to explore innovative solutions for sustainability and green technology. Discover actionable insights and network with industry leaders driving a cleaner, greener future.",
            url: "https://finolity.com/events/join-finolity-green-horizons-summit-2025/"
        },
        {
            bgImage: vs,
            date: "Sunday, September 14",
            location: "Bengalore",
            timing: "4 PM - 8:30 PM",
            headLine: "Finolity Ecosystem Partnerships Summit",
            description: "Join the Finolity Ecosystem Partnerships Summit to collaborate with industry leaders and explore opportunities in building robust, innovative ecosystems. Discover strategies to foster growth, partnerships, and technological advancements.",
            url: "https://finolity.com/events/finolity-ecosystem-partnerships-summit/"
        }
    ];
    render() {
        return (
            <>
                <div className="latest-news my-3">
                    <section className='container mb-2'>
                        <h3 className='my-2'>Upcoming Events</h3>
                        <div className='row m-0'>
                            {
                                this.eventList.map((event, index) => {
                                    return (
                                        <div className='col-12 col-md-4 p-0'>
                                            <Event event={event}></Event>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export class Event extends Component {
    
    constructor(props) {
        super(props);
        this.event = props.event;
    }
    render() {
        return (
            <>
                <div class="event card w-90 border p-2 rounded">
                    <img class="card-img-top" src={this.event.bgImage} alt="Card image cap" />
                    <p>
                        <label className='date bg-body-secondary'>{this.event.date}</label>
                    </p>
                    <div class="card-body py-1">
                        <h5 class="card-title py-0">
                            {this.event.headLine}
                        </h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item border-0"><i class="fa fa-clock-o me-2" aria-hidden="true"></i> {this.event.timing} </li>
                        <li class="list-group-item border-0"><i class="fa fa-map-marker me-2" aria-hidden="true"></i> {this.event.location} </li>
                    </ul>
                    <div class="card-body">
                        <p class="card-text">{this.event.description}</p>
                        <a href={this.event.url} class="btn btn-danger">Register Today</a>
                    </div>
                </div>
            </>
        )
    }
}