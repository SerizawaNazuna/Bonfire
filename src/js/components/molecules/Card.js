import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Button from '../atoms/Button';

const ExpandableCard = (props) =>{
    return(
        <Card>
            <CardHeader
                title={props.title}
                subtitle={props.subtitle}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardActions>
                <Button onClick={props.onClickButton}>{props.buttonLabel}</Button>
            </CardActions>
            <CardText expandable={true}>{props.cardValue}</CardText>
        </Card> 
    );
}

export default ExpandableCard;