import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { before } from 'node:test';
import { MainPage, ProfilePage, RegisterPage } from '../src/pages/index';


const url='https://realworld.qa.guru/'
let newUser;
 
test.describe ('Профиль пользователя', ()=> { //это тест сьют,группа тестов, используется для группировки

  test.beforeEach ('Регистрация пользователя перед каждым тестом', async ({ page }) => {
  //  let womenProfileArray=[]
    
    
    newUser ={
      userBio: faker.music.genre(),
      userEmail: faker.internet.email(),
      userName: faker.person.firstName('female'),
      userPassword: faker.internet.password()
    }
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    await mainPage.open(url);
    await mainPage.register(); 

  
    await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword);


  });

test('Переход в профиль пользователя', async ({ page }) => { 
 const mainPage = new MainPage(page);
 const profilePage = new ProfilePage(page);
  
  await mainPage.menuClick();
  await profilePage.profileClick();
  await expect(page.getByRole('heading')).toContainText(newUser.userName);

  
    });

test('Выход из учетной записи', async ({ page }) => { 
  const mainPage = new MainPage(page);
  const profilePage = new ProfilePage(page);
    
    await mainPage.menuClick();
    await profilePage.logoutClick();
    await expect(mainPage.signupButton).toBeVisible
  
    
      });
});