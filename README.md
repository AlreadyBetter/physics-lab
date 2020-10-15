This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libs
``` 
npm install react-router
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install react-bootstrap-icons --save
npm install recharts
npm install @react-pdf/renderer --save
```
## create `.htaccess` file and put it into build dir
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```