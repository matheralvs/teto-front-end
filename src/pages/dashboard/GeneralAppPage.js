import { Helmet } from 'react-helmet-async';

// @mui
import { Container, Grid } from '@mui/material';

// auth

// _mock_

// components
import { useSettingsContext } from '../../components/settings';
// sections

// assets

// ----------------------------------------------------------------------

export default function GeneralAppPage() {

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title>Teto Solar</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <h1>1</h1>
          </Grid>

          <Grid item xs={12} md={4}>
            <h1>2</h1>
          </Grid>

          <Grid item xs={12} md={4}>
            <h1>3</h1>
          </Grid>

          <Grid item xs={12} md={4}>
            <h1>4</h1>
          </Grid>

          <Grid item xs={12} md={4}>
            <h1>5</h1>
          </Grid>

          <Grid item xs={12} md={4}>
            <h1>6</h1>
          </Grid>          
        </Grid>
      </Container>
    </>
  );
}
