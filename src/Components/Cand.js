import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';



/* Candidate class */ 


class Cand extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: props.name,
            age: props.age,
            party: props.party,
            img: props.img,
        }
    }

    render() {
        return (
            <Card>
                <CardMedia 
                style = {{width: 100, height: 100}}
                image={require('../images/' + this.props.img + '.jpg')}
                height = "140"
                >           
                </CardMedia>
                <CardContent>
                    <Typography component="h2">
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