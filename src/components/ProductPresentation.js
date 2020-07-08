import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import product from "../assets/product.png";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "#f0f4f8"
  },
  title: {
    marginTop: "50px",
    paddingLeft: "20%",
    paddingRight: "20%",
    textAlign: "left"
  },
  productImage: {
    width: "80%",
    marginTop: "auto",
    marginLeft: 0
  },
  titleDescription: {
    paddingLeft: "20%",
    paddingRight: "20%",
    textAlign: "left"
  }
}));

const ProductPresentation = () => {
  const classes = useStyles();

  return (
    <Grid item xs={false} sm={4} md={7} className={classes.background}>
      <h1 className={classes.title}>Modern Banking</h1>
      <p className={classes.titleDescription}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing, offering you a
        seamless way to bank.
      </p>
      <img className={classes.productImage} src={product} alt="" />
    </Grid>
  );
};

export default ProductPresentation;
