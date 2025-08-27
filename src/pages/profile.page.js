import {BasePage} from './base.page.js'
 class ProfilePage extends BasePage {
    constructor (page) {
        super(page);

        this.logoutButton =this.page.getByRole('link', { name: 'Logout' });
        this.profileButton =this.page.getByRole('link', { name: 'Profile' });

    }
 
    async logoutClick()
    {
        await this.logoutButton.click();
        
    }
    async profileClick()
    {
        await this.profileButton.click();
        
    }
};
export {ProfilePage}