import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class CampsiteInfoComponent extends Component{
    render (){
        if (this.props.campsite){
            return (
                <div className="row"></div>
            )
        }
        return <div />
    }
}

export default CampsiteInfoComponent;