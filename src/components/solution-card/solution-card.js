import { Component } from 'react';
export class SolutionCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <div className="card border-0">
                <div className='card-header border-0 bg-white px-3 py-2'>
                    <i className={'text-danger ' + this.props.imageClass}></i>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.headerTitle}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
                <div className='card-footer border-top bg-white'>
                    <button type='button' className='btn btn-link text-decoration-none border-3 border-bottom text-dark view-all-button p-0'>Learn more</button>
                </div>
            </div>
            </>
        )
    }
}