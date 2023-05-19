import { Helmet } from 'react-helmet-async';

// @mui
import { Card, CardHeader, CardContent, Container, Grid, Typography } from '@mui/material';

// auth

// _mock_
import {
  _appInvoices,
} from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import { AnalyticsWidgetSummary } from '../../sections/@dashboard/general/analytics';
import { ChartLine } from '../../sections/_examples/extra/chart';
import BasicTable from '../../sections/_examples/mui/table/BasicTable';

import {
  AppNewInvoice,
} from '../../sections/@dashboard/general/app';

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

          <Grid item xs={12}>
            <Card dir="ltr">
              <CardHeader title="Últimos 9 meses" />
              <CardContent>
                <ChartLine />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <AppNewInvoice
              title="Negócios recentes"
              tableData={_appInvoices}
              tableLabels={[
                { id: 'id', label: 'Número' },
                { id: 'category', label: 'Nome' },
                { id: 'price', label: 'Data' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          </Grid>

          <Grid item xs={12}>
            <Card dir="ltr">
              <CardHeader title="Negócios neste mês" />
              <CardContent>
                <BasicTable />
              </CardContent>
            </Card>
          </Grid>     
        </Grid>
      </Container>
    </>
  );
}
