import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap';
import datas from '../data';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h2>content</h2>
                <Row>
                    {datas.products.map(pd =>
                        <Col sm="3">
                            <Card>
                                <CardImg src={pd.image} />
                                <CardBody>
                                    <CardTitle>{pd.name}</CardTitle>
                                    <CardSubtitle>รายละเอียด...</CardSubtitle>
                                    <CardText>rating {pd.rating}</CardText>
                                    <CardText>Review {pd.numReview}</CardText>
                                    <Button color="warning">Read ~</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                    }
                </Row>
            </div>
        )
    }
}
