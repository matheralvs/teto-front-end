// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Geral',
    items: [
      { title: 'app', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      { title: 'Início', path: PATH_DASHBOARD.one, icon: ICONS.dashboard },
      { title: 'Clientes', path: PATH_DASHBOARD.two, icon: ICONS.ecommerce },
      { title: 'Produtos', path: PATH_DASHBOARD.three, icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Gerenciamento',
    items: [
      { title: 'Negócios', path: PATH_DASHBOARD.two, icon: ICONS.ecommerce },
      { title: 'Novo negócio', path: PATH_DASHBOARD.one, icon: ICONS.dashboard },
      {
        title: 'Usuários',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Meu Perfil', path: PATH_DASHBOARD.user.four },
          { title: 'Outros Usuários', path: PATH_DASHBOARD.user.five },
          { title: 'Minha Conta', path: PATH_DASHBOARD.user.six },
        ],
      },
    ],
  },

  // SETTINGS
  // ----------------------------------------------------------------------
  {
    subheader: 'Configurações',
    items: [
      {
        title: 'Filiados',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Perfil', path: PATH_DASHBOARD.user.four },
          { title: 'Custos', path: PATH_DASHBOARD.user.five },
          { title: 'Extras', path: PATH_DASHBOARD.user.six },
        ],
      },
    ],
  },
];

export default navConfig;
