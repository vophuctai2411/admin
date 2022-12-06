import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../theme/styles/ProductView";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DEFAULT_IMG from "../../assets/images/product_default_img.jpg";
import { useContext } from "react";
import { FavoritesContext } from "../../context/favorites-context";

function Header(props) {
  const { classes, contentContext } = props;
  let imgSrc = DEFAULT_IMG;
  //const contentContext = useContext(FavoritesContext);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Card>
          <CardHeader title="Header" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <input
                  accept="image/*"
                  hidden
                  id="raised-button-file"
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="text"
                    component="span"
                    className={classes.button}
                  >
                    Upload
                  </Button>
                </label>
                <img src={imgSrc} className={classes.image} alt="imgfile" />
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <TextField
                  className={classes.input}
                  id="buttonContent"
                  fullWidth
                  variant="outlined"
                  label="Button Content"
                  size="small"
                  value={contentContext.header.buttonContent}
                  onChange={(e) => {
                    contentContext.updateHeader({
                      buttonContent: e.target.value,
                    });
                  }}
                />
                {contentContext.header.navigateArr.map((i, index) => (
                  <>
                    <TextField
                      id={Math.random()}
                      className={classes.input}
                      variant="outlined"
                      label="Navigation Item"
                      style={{ marginRight: 10 }}
                      value={i}
                      size="small"
                      onChange={(e) => {
                        contentContext.header.navigateArr[index] =
                          e.target.value;
                        contentContext.updateHeader({
                          navigateArr: [...contentContext.header.navigateArr],
                        });
                      }}
                    />
                    {index + 1 === contentContext.header.navigateArr.length && (
                      <Button
                        onClick={(e) =>
                          contentContext.updateHeader({
                            navigateArr: [
                              ...contentContext.header.navigateArr,
                              null,
                            ],
                          })
                        }
                      >
                        Add
                      </Button>
                    )}
                  </>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Header);
