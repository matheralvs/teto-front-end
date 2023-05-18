import { Helmet } from 'react-helmet-async';

// @mui
import { Container, Grid, Typography } from '@mui/material';

// auth

// _mock_

// components
import { useSettingsContext } from '../../components/settings';
// sections
import AnalyticsWidgetSummary from '../../sections/@dashboard/general/analytics/AnalyticsWidgetSummary';

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
        <Typography variant="h4" sx={{ mb: 5 }}>
          Olá, bem vindo de volta.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <AnalyticsWidgetSummary
              title="Negócios neste mês"
              total={1723315}
              icon="material-symbols:thumb-up-rounded"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <AnalyticsWidgetSummary
              title="Vendas neste mês"
              total={714000}
              color="warning"
              icon="material-symbols:account-balance-wallet"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <AnalyticsWidgetSummary
              title="Negócios abertos"
              total={234}
              color="error"
              icon="material-symbols:shopping-bag"
            />
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
