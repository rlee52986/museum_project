import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({exhibit, onClick}) {
    return (
        <Card onClick={() => onClick(exhibit.id)}>
                        <CardImg width="100%" height="350px" src={exhibit.image} alt={exhibit.name} />
                        <CardImgOverlay>
                            <CardTitle>{exhibit.name}</CardTitle>                            
                        </CardImgOverlay>
                    </Card>
    );
}


function Directory(props) {
    
    
        const directory = props.exhibits.map(exhibit => {
            return (
                <div key={exhibit.id} className="col-md-5 m-1">
                    <RenderDirectoryItem exhibit={exhibit} onClick={props.onClick} />
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


export default Directory;