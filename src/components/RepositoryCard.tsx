import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";

import { Trepository } from "../pages/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: "10px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function RepositoryCard({ repo }: { repo: Trepository }) {
  console.log({ repo });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img alt="a" src={repo.owner.avatar_url} />
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={`${repo.owner.login}`}
        subheader={
          <Link href={repo.html_url} target="_blank">
            {repo.name}{" "}
          </Link>
        }
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title={repo.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {repo.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {repo.full_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Language: {repo.languaje}
        </Typography>
      </CardContent>
    </Card>
  );
}
