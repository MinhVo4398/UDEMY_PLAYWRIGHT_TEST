This course is 
Automated Software Testing with Playwright - Udemy


npx playwright test --config=playwright.config.ts --project=Webkit

![Alt text](image.png)

 npx playwright test --config=playwright.config.ts --project=Chromium --reporter=line

 npx playwright test --config=playwright.config.ts --project=Chromium --reporter=list
 ![Alt text](image-1.png)

 npx playwright test --config=playwright.config.ts --project=Chromium --reporter=dot 
 ![Alt text](image-2.png)

 npx playwright test --config=playwright.config.ts --project=Chromium --reporter=junit
 ![Alt text](image-3.png)


+ Config run:
npm run tests:chrome
![Alt text](image-4.png)

npm run tests:webkit -- --headed 


npm run test:e2e
![alt text](image-5.png)


npm run test:e2e -- --headed 

------------
Visual testing
+ npx playwright test --config=visual.config.ts --project=Chromium

+ update snapshot:  npx playwright test --config=visual.config.ts --project=Firefox --update-snapshots

Config run visual test:
![alt text](image-6.png)
+ npm run test:visual:chrome
+ npm run test:visual:chrome -- --headed

Config run visual test, update  snapshot
![alt text](image-7.png)
+ npm run test:visual:chrome:update


Config run API
![alt text](image-8.png)
+ npm run tests:api

Run Jenkins:
![alt text](image-9.png)

Config jenkins run:
![alt text](image-10.png)

Retries test:
+ npx playwright test --config=playwright.config.ts --project=Chromium --retries=3

Generate PDF File
 npx playwright pdf https://www.example.com my-file.pdf