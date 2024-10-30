import {BasePage} from './base.page.js'
 class ArticlePage extends BasePage {
    constructor (page) {
        super(page);
        this.publishButton =this.page.getByRole('button', { name: 'Publish Article' });
        this.titleField =this.page.getByPlaceholder('Article Title');
        this.descriptionfField =this.page.getByPlaceholder('What\'s this article about?')
        this.articleField =this.page.getByPlaceholder('Write your article (in markdown)');
        this.newArticleLink = this.page.getByRole('link', { name: 'New Article' });
        this.commentField = this.page.getByPlaceholder('Write a comment...');
        this.postCommentButton = this.page.getByRole('button', { name: 'Post Comment' });
        this.editButton = this.page.getByRole('button', { name: 'Edit Article' });

       
    }
  
  
    
    async titleClickAndFill (title)
    {   
        await this.newArticleLink.click();
        await this.titleField.click();
        await this.titleField.fill(title);
    }
   
    async descriptionClickAndFill (description)
    {
        await this.descriptionfField.click();
        await this.descriptionfField.fill(description);
        
    }
    
    async articleTextClickAndFill(articleText)
    {
        await this.articleField.click();
        await this.articleField.fill(articleText);    
    }
    async publishClick()
    {
        await this.publishButton.click();
        
    }

    async commentClickAndFill(commentText)
    {
        await this.commentField.click();
        await this.commentField.fill(commentText);    
    }

    async commentPostClick()
    {
        await this.postCommentButton.click();
        
    }

   
}
export {ArticlePage}

