// @flow
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

type FontSizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle'
  | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
  | 'srOnly' | 'inherit';

type FontWeightType = 'bold' | 'lighter' | 'normal';

type TextAlignType = 'center' | 'left' | 'right';

type Props = {|
  children: React.Node,
  fontSize?: FontSizeType,
  fontWeight?: FontWeightType,
  textAlign?: TextAlignType,
|}

const CustomTypography = ({
  children, fontSize = 'body1', fontWeight = 'normal', textAlign = 'left'
} : Props) : React.Node => (
  <Grid item xs={12}>
    <Typography component="div">
      <Box m={1}
        fontSize={fontSize + ".fontSize"}
        fontWeight={fontWeight}
        textAlign={textAlign}
      >
        { children }
      </Box>
    </Typography>
  </Grid>
);

export default CustomTypography;
