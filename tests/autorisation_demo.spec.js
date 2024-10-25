import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'

test.skip('test', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill('Иванов3');
  await page.getByPlaceholder('Your Name').press('Tab');
  await page.getByPlaceholder('Email').fill('ivanivanov3@mail.ru');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('QWerty123');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByText('Иванов').click();
  await expect(page.getByRole('navigation')).toContainText('Иванов3');
});
//import { test, expect } from '@playwright/test';

test('Пользователь может авторизоваться с помощью логина и пароля', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Email').click();
//  await page.getByPlaceholder('Your Name').fill('Иванов2');
  //await page.getByPlaceholder('Your Name').press('Tab');
  await page.getByPlaceholder('Email').fill('ivanivanov2@mail.ru');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('QWerty123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Иванов').click();
  await expect(page.getByRole('navigation')).toContainText('Иванов2');
});