//<!--Niko Mäkelä 1601538, Matias Rantanen 1601551-->

import { Component } from '@angular/core';
//Import tabs pages
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NotesPage } from '../notes/notes';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //define tabs pages
  tab1Root = HomePage;
  tab2Root = NotesPage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;
  

  constructor() {

  }
}
