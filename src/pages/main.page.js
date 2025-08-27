import {BasePage} from './base.page.js'
 class MainPage extends BasePage {
    constructor (page) {
        super(page);
        this.signupButton =this.page.getByRole('link', { name: 'Sign up' });
        this.homeLink = this.page.getByRole('link', { name: 'Home' });
        this.globalFeedButton =this.page.getByRole('button', { name: 'Global Feed' });
        this.userMenuButton = this.page.locator('.dropdown-toggle');
        this.logoutButton =this.page.getByRole('link', { name: 'Logout' });
        this.profileButton =this.page.getByRole('link', { name: 'Profile' });

    }
    async register ()
    {
        await this.signupButton.click();
    }
    async homeLinkClick()
    {
        await this.homeLink.click();
        
    }
    async globalFeedClick()
    {
        await this.globalFeedButton.click();
        
    }
    async menuClick()
    {
        await this.userMenuButton.click();
        
    }
  
};
export {MainPage}