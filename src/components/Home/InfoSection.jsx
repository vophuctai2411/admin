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

function InfoSection(props) {
  const { classes, contentContext } = props;
  let imgSrc = DEFAULT_IMG;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Card>
          <CardHeader title="Information Section" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <input
                  accept="image/*"
                  hidden
                  id="raised-button-file"
                  type="file"
                  onChange={(e) => {}}
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
                <img
                  src={imgSrc}
                  className={classes.image}
                  alt="product-imgfile"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <TextField
                  className={classes.input}
                  id="title"
                  fullWidth
                  variant="outlined"
                  label="Title"
                  size="small"
                  value={contentContext.infoSection.title}
                  onChange={(e) => {
                    contentContext.updateInfo({
                      title: e.target.value,
                    });
                  }}
                />
                <TextField
                  className={classes.input}
                  id="description"
                  fullWidth
                  variant="outlined"
                  label="Description"
                  size="small"
                  multiline
                  rows={5}
                  rowsMax={16}
                  value={contentContext.infoSection.description}
                  onChange={(e) => {
                    contentContext.updateInfo({
                      description: e.target.value,
                    });
                  }}
                />
                <TextField
                  className={classes.input}
                  id="buttonContent"
                  fullWidth
                  variant="outlined"
                  label="Button Content"
                  size="small"
                  type="number"
                  value={contentContext.infoSection.buttonContent}
                  onChange={(e) => {
                    contentContext.updateInfo({
                      buttonContent: e.target.value,
                    });
                  }}
                />

                {contentContext.infoSection.cardArr.map((i, index) => (
                  <>
                    <TextField
                      id={Math.random()}
                      className={classes.input}
                      variant="outlined"
                      label="Card Title"
                      style={{ width: "40%" }}
                      value={i.title}
                      size="small"
                      onChange={(e) => {
                        contentContext.infoSection.cardArr[index] = {
                          ...i,
                          title: e.target.value,
                        };
                        contentContext.updateInfo({
                          cardArr: [...contentContext.infoSection.cardArr],
                        });
                      }}
                    />
                    <TextField
                      id={Math.random()}
                      className={classes.input}
                      variant="outlined"
                      label="Card Descriptions"
                      style={{ width: "40%", marginLeft: 10 }}
                      value={i.description}
                      size="small"
                      onChange={(e) => {
                        contentContext.infoSection.cardArr[index] = {
                          ...i,
                          description: e.target.value,
                        };
                        contentContext.updateInfo({
                          cardArr: [...contentContext.infoSection.cardArr],
                        });
                      }}
                    />
                    {index + 1 ===
                      contentContext.infoSection.cardArr.length && (
                      <Button
                        onClick={(e) =>
                          contentContext.updateInfo({
                            cardArr: [
                              ...contentContext.infoSection.cardArr,
                              { title: null, description: null },
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

export default withStyles(styles, { withTheme: true })(InfoSection);
