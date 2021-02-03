import { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedExhibit: null
        };
    }

    onExhibitSelect(exhibit) {
        this.setState({selectedExhibit: exhibit});
    }

    render() {
        const directory = this.props.exhibits.map(exhibit => {
            return (
                <div key={exhibit.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onExhibitSelect(exhibit)}>
                        <CardImg width="100%" src={exhibit.image} alt={exhibit.name} />
                        <CardImgOverlay>
                            <CardTitle>{exhibit.name}</CardTitle>                            
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>                
            </div>
        );
    }
}


export default Directory;