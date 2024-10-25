import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { before } from 'node:test';

const url='https://realworld.qa.guru/'

 
test.describe.only('Профиль пользователя', ()=> { //это тест сьют,группа тестов, используется для группировки

  test.beforeEach ('Регистрация пользователя перед каждым тестом', async ({ page }) => {
    let womenProfileArray=[]
    await page.goto(url);
    let userName = faker.person.firstName('female');
    let userEmail = faker.internet.email();
    let userPassword = faker.internet.password();
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByPlaceholder('Your Name').fill(userName);
    await page.getByPlaceholder('Your Name').press('Tab');
    await page.getByPlaceholder('Email').click();
  
    await page.getByPlaceholder('Email').fill(userEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(userPassword);
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.getByText(userName).click();
   // await expect(page.getByRole('navigation')).toContainText(userName); expect  в beforeEach не нужен
  });
//!!! beforeEach будет в хукахб что эо значит
test('Изменение bio пользователя', async ({ page }) => { //test это функция
 let shortUserBio=faker.music.genre();
  await page.locator('.dropdown-toggle').click;
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByPlaceholder('Short bio about you').click();
  await page.getByPlaceholder('Short bio about you').fill(shortUserBio);
  await page.getByRole('button', 'Update Settings')
  await expect(page.getByPlaceholder('Short bio about you')).toContainText(shortUserBio);

  /*await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Your Name').fill(userName);
  await page.getByPlaceholder('Your Name').press('Tab');
  await page.getByPlaceholder('Email').click();

  await page.getByPlaceholder('Email').fill(userEmail);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(userPassword);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByText(userName).click();
  await expect(page.getByRole('navigation')).toContainText(userName);*/
    });
});