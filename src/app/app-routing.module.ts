import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mainmenu',
    loadChildren: () => import('./pages/mainmenu/mainmenu.module').then( m => m.MainmenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sliders',
    loadChildren: () => import('./pages/sliders/sliders.module').then( m => m.SlidersPageModule)
  },
  {
    path: 'verifyemail',
    loadChildren: () => import('./pages/verifyemail/verifyemail.module').then( m => m.VerifyemailPageModule)
  },
  {
    path: 'verifycode',
    loadChildren: () => import('./pages/verifycode/verifycode.module').then( m => m.VerifycodePageModule)
  },
  {
    path: 'emailverified',
    loadChildren: () => import('./pages/emailverified/emailverified.module').then( m => m.EmailverifiedPageModule)
  },
  {
    path: 'userqr',
    loadChildren: () => import('./pages/userqr/userqr.module').then( m => m.UserqrPageModule)
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./pages/userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'accountlimits',
    loadChildren: () => import('./pages/accountlimits/accountlimits.module').then( m => m.AccountlimitsPageModule)
  },
  {
    path: 'devicelist',
    loadChildren: () => import('./pages/devicelist/devicelist.module').then( m => m.DevicelistPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'changepasswordsuccess',
    loadChildren: () => import('./pages/changepasswordsuccess/changepasswordsuccess.module').then( m => m.ChangepasswordsuccessPageModule)
  },
  {
    path: 'deleteaccount',
    loadChildren: () => import('./pages/deleteaccount/deleteaccount.module').then( m => m.DeleteaccountPageModule)
  },
  {
    path: 'deleteaccountsuccess',
    loadChildren: () => import('./pages/deleteaccountsuccess/deleteaccountsuccess.module').then( m => m.DeleteaccountsuccessPageModule)
  },
  {
    path: 'editprofilesuccess',
    loadChildren: () => import('./pages/editprofilesuccess/editprofilesuccess.module').then( m => m.EditprofilesuccessPageModule)
  },
  {
    path: 'livesupport',
    loadChildren: () => import('./pages/livesupport/livesupport.module').then( m => m.LivesupportPageModule)
  },
  {
    path: 'lockaccount',
    loadChildren: () => import('./pages/lockaccount/lockaccount.module').then( m => m.LockaccountPageModule)
  },
  {
    path: 'lockaccountsuccess',
    loadChildren: () => import('./pages/lockaccountsuccess/lockaccountsuccess.module').then( m => m.LockaccountsuccessPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./pages/transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'verifytransfer',
    loadChildren: () => import('./pages/modals/verifytransfer/verifytransfer.module').then( m => m.VerifytransferPageModule)
  },
  {
    path: 'transferconfirm',
    loadChildren: () => import('./pages/transferconfirm/transferconfirm.module').then( m => m.TransferconfirmPageModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('./pages/deposit/deposit.module').then( m => m.DepositPageModule)
  },
  {
    path: 'depositscan',
    loadChildren: () => import('./pages/depositscan/depositscan.module').then( m => m.DepositscanPageModule)
  },
  {
    path: 'depositconfirm',
    loadChildren: () => import('./pages/depositconfirm/depositconfirm.module').then( m => m.DepositconfirmPageModule)
  },
  {
    path: 'vouchers',
    loadChildren: () => import('./pages/vouchers/vouchers.module').then( m => m.VouchersPageModule)
  },
  {
    path: 'bills',
    loadChildren: () => import('./pages/bills/bills.module').then( m => m.BillsPageModule)
  },
  {
    path: 'billspaymeralco',
    loadChildren: () => import('./pages/modals/billsmeralco/billspaymeralco/billspaymeralco.module').then( m => m.BillspaymeralcoPageModule)
  },
  {
    path: 'meralcoverify',
    loadChildren: () => import('./pages/modals/billsmeralco/meralcoverify/meralcoverify.module').then( m => m.MeralcoverifyPageModule)
  },
  {
    path: 'billspaymaynilad',
    loadChildren: () => import('./pages/modals/billsmaynilad/billspaymaynilad/billspaymaynilad.module').then( m => m.BillspaymayniladPageModule)
  },
  {
    path: 'mayniladverify',
    loadChildren: () => import('./pages/modals/billsmaynilad/mayniladverify/mayniladverify.module').then( m => m.MayniladverifyPageModule)
  },
  {
    path: 'billspayconverge',
    loadChildren: () => import('./pages/modals/billsconverge/billspayconverge/billspayconverge.module').then( m => m.BillspayconvergePageModule)
  },
  {
    path: 'convergeverify',
    loadChildren: () => import('./pages/modals/billsconverge/convergeverify/convergeverify.module').then( m => m.ConvergeverifyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
