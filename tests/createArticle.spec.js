import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { before } from 'node:test';
import { MainPage, RegisterPage, ArticlePage } from '../src/pages/index';


const url='https://realworld.qa.guru/'
let newUser;
let newArticle;
let commentText;
 
test.describe ('Создание, редактирование, удаление статьи', ()=> { 

  test.beforeEach ('Регистрация пользователя перед каждым тестом', async ({ page }) => {
  //  let womenProfileArray=[]
    
    
    newUser ={
      userBio: faker.music.genre(),
      userEmail: faker.internet.email(),
      userName: faker.person.firstName('female'),
      userPassword: faker.internet.password()
    };
    newArticle ={
      title: faker.lorem.paragraph(2),
      description: faker.lorem.paragraph(),
      articleText: faker.lorem.paragraphs(5)
    };

    commentText=faker.lorem.paragraph(1);

    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    
    
    await mainPage.open(url);
    await mainPage.register(); 

    await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword)




  });

test('Создание новой статьи', async ({ page }) => {   
    const articlePage = new ArticlePage(page)
    await articlePage.titleClickAndFill (newArticle.title);
    await articlePage.descriptionClickAndFill(newArticle.description);
    await articlePage.articleTextClickAndFill(newArticle.articleText);
    await articlePage.publishClick ()
    await expect(page.getByRole('heading', { name: newArticle.title })).toBeVisible
    
});

test('Новая статья есть в списке', async ({ page }) => { 
  
  const articlePage = new ArticlePage(page);
  const mainPage = new MainPage(page);
  await articlePage.titleClickAndFill (newArticle.title);
  await articlePage.descriptionClickAndFill(newArticle.description);
  await articlePage.articleTextClickAndFill(newArticle.articleText);
  await articlePage.publishClick ();
  await mainPage.homeLinkClick();
  await mainPage.globalFeedClick();
  await expect(page.getByRole('heading', { name: newArticle.title })).toBeVisible
  });

test('Оставить комментарий к созданной заметке', async ({ page }) => { 

  const articlePage = new ArticlePage(page);
  await articlePage.titleClickAndFill (newArticle.title);
  await articlePage.descriptionClickAndFill(newArticle.description);
  await articlePage.articleTextClickAndFill(newArticle.articleText);
  await articlePage.publishClick ();
  await articlePage.commentClickAndFill(commentText);
  await articlePage.commentPostClick()
  await expect(page.getByText(commentText)).toBeVisible();
  
  });


});