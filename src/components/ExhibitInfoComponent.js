import { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


class ExhibitInfo extends Component {  
    renderComments(comments) {
        if(comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <p>{comment.text}</p>
                                <p>{comment.author}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>                                
                            </div>
                            
                    )})}
                    </div>                
            )
        }
        return (
        <div></div>
        )
    }
    
    renderExhibit(exhibit) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={exhibit.image} alt={exhibit.name} />
                    <CardBody>
                        <CardTitle>{exhibit.name}</CardTitle>
                        <CardText>{exhibit.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    
    render() {
        if(this.props.exhibit) {
            return <div className="row">{this.renderExhibit(this.props.exhibit)}
            {this.renderComments(this.props.exhibit.comments)}
            </div>
        } else {
            return <div />
        }
    }
};



export default ExhibitInfo;