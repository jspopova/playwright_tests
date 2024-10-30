import {BasePage} from './base.page.js'
 class RegisterPage extends BasePage {
    constructor (page) {
        super(page);
        this.signupButton =page.getByRole('button', { name: 'Sign up' });
        this.emailField =this.page.getByPlaceholder('Email');
        this.passwordfField =this.page.getByPlaceholder('Password')
        this.usernameField =this.page.getByPlaceholder('Your Name');
        //this.usernameButton = this.page.getByText(userName)
    }
    //todo нейминг
    async register (userName, userEmail, userPassword)
    {
        await this.usernameField.click();
        await this.usernameField.fill(userName)
        await this.emailField.click();
        await this.emailField.fill(userEmail);
        await this.passwordfField.click();
        await this.passwordfField.fill(userPassword);    
        await this.signupButton.click();
        
    }
    
    async userNameClickAndFill (userName)
    {
        await this.usernameField.click();
        await this.usernameField.fill(userName)
    }
   
    async emailClickAndFill (userEmail)
    {
        await this.emailField.click();
        await this.emailField.fill(userEmail);
        
    }
    
    async passwordClickAndFill(userPassword)
    {
        await this.passwordfField.click();
        await this.passwordfField.fill(userPassword);    
    }
    async signupClick ()
    {
        await this.signupButton.click();
        
    }
}
export {RegisterPage}

