import React from 'react';
import DashboardLayout from 'src/layouts/DashboardLayout';
import DashboardView from 'src/views/dashboard/DashboardView';
import Pharmacy from 'src/views/Pharmacy/Pharmacy';
import HomeView from './views/home/HomeView';
import Accounts from './views/Accounts/Accounts';
import Inventory from './views/Inventory/Inventory';
import Laboratory from './views/Laboratory/Laboratory';
import Maternity from './views/Maternity/Maternity';
import MchStore from './views/MCHStore/MchStore';
import Mchclinic from './views/MCHClinic/Mchclinic';
import Login from './views/Authentication/Login';
import Visits from './views/Visists/Visits';

const routes = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      // { path: '/', element: <HomeView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'accounts', element: <Accounts /> },
      { path: 'visits', element: <Visits /> },
      { path: 'pharmacy', element: <Pharmacy /> },
      { path: 'inventory', element: <Inventory /> },
      { path: 'laboratory', element: <Laboratory /> },
      { path: 'maternity', element: <Maternity /> },
      { path: 'mchclinic', element: <Mchclinic /> },
      { path: 'mchstores', element: <MchStore /> },
     
    ]
  }
];

export default routes;
