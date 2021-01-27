import { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exhibits: [
                {
                    id: 0,
                    name: 'Modern',
                    image: 'assets/images/modern.jpg',
                    date: 12021,
                    description: "This is the modern art exhibit of the museum"
                },
                {
                    id: 1,
                    name: 'Impressionism',
                    image: 'assets/images/impressionism.jpg',
                    date: 22021,
                    description: "This is the impressionism exhibit of the museum"
                },
                {
                    id: 2,
                    name: 'Sculpture',
                    image: 'assets/images/sculpture.jpg',
                    date: 32021,
                    description: "This is the sculpture exhibit of the museum"
                },
                {
                    id: 3,
                    name: 'Renaissance',
                    image: 'assets/images/renaissance.jpg',
                    date: 42021,
                    description: "This is the renaissance exhibit of the museum"
                }
            ]
        };
    }

    render() {
        const directory = this.state.exhibits.map(exhibit => {
            return (
                <div key={exhibit.id} className="col">
                    <img src={exhibit.image} alt={exhibit.name} />
                    <h2>{exhibit.name}</h2>
                    <p>{exhibit.description}</p>
                </div>
            );
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