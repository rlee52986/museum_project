import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';




function RenderExhibit({exhibit}) {
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

function RenderComments({comments}) {
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
    
    
    
function ExhibitInfo(props) {
    if(props.exhibit) {
        return (
            <div className="container">
                <div className="row">
                    <RenderExhibit exhibit={props.exhibit} />
                    <RenderComments comments={props.exhibit.comments} />
                </div>
            </div>
        );
    } 
        return <div />;
        
};




export default ExhibitInfo;