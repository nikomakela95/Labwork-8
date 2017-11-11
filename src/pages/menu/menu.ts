import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

//<!--Niko Mäkelä 1601538, Matias Rantanen 1601551-->

export interface PageInterface {
   title: string;
   pageName: string;
   tabComponent?: any;
   index?: number;
   icon: string;
 }

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  email: string;



  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;
/**pages to menu */
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    { title: 'Notes', pageName: 'TabsPage', tabComponent: 'NotesPage', index: 1, icon: 'clipboard'},
    { title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 2, icon: 'contacts'},
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 3, icon: 'information-circle'},
  
    
  
    
  ];

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.email = fire.auth.currentUser.email;
    }
  
  openPage(page: PageInterface){
    //New object params
    let params ={};
  
    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
      //Else is here if we have pages which are not in tabs nav
    } else {
      this.nav.setRoot(page.pageName, params);
    }
    }
  
  //adding function to show which page is active 
  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();
  
    if(childNav){
      if (childNav.getSelected() && childNav.getSelected().root == page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
   }
  }