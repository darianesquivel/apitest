import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
type TmediaCard = {
  image: string;
  description: string;
  color: string;
  likes: number;
  created_at: string;
};

function MediaCard({
  image,
  description,
  created_at,
  color,
  likes,
}: TmediaCard) {
  const classes = useStyles();
  const url = image || "/static/images/cards/contemplative-reptile.jpg";
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} title="Created at" />
        <Typography>{created_at}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description || "No description"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard;
