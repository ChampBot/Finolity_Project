import { Component } from 'react';
import "./solution-badge.css";

export class SolutionBadge extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <div className="badge-info bg-body-secondary m-2">
                <img src={this.props.imageSrc} alt={this.props.title} />
                <div className='me-4'>{this.props.title}</div>
            </div>
            </>
        )
    }
}