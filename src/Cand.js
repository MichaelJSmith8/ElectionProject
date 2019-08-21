import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';



/* Candidate class */ 

class Cand extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: props.name,
            age: props.age,
            party: props.party,
           // img: props.img,
        }
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography component="h5">
                        {this.state.name}
                    </Typography>
                    <Typography component="h5">
                        {this.state.age}
                    </Typography>
                    <Typography component="h5">
                        {this.state.party}
                    </Typography>
                </CardContent>
        </Card>
        )
    }
  }

  export default Cand