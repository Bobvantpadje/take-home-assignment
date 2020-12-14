# Questions

## Describe the architecture you will use and include a motivation of your choices. (max 500 characters)

- Next.js: This application might end up displaying a lot of cars. Using SSR makes it possible to serve initial car data and images server side. This will decrease the initial load time for the user. Also, because this project has a short deadline this framework will help me to develop quicker.
- Css: when creating large project I prefer to create some sort of design system but to save time and to keep the application simple I chose to just use regular css for now.
- Formik & Yup: Input handling and validation is hard to get right. Formik makes it easy to setup form validation.
- Usually I would write unit tests to test all the code I’ve written, but due to lack of time I did no implement this.
- RecommendCarLib: I stored all function regarding recommending cars in a lib file. Ideally I would do this in a Factory, but for now this should hold up. 

## You have a team of 3 developers. How would you tackle working together on the stories?

- The stories don’t depend on each other. So it would be possible to work on all stories simultaneously. I worked in different branches per feature during this assignment. When working with a team every developer could work on their own branch simultaneously. However, it is important to clarify how the car object looks. If this is not clear it could be that all developers would use different object keys.

## Can you describe 1 thing that can go wrong with your code once in production?

I can actually describe multiple things which can go wrong. These are function which I would’ve loved to add if I had more time. 
- If’s impossible to add electric cars to the system
- The model name is currently entered via a text input. This makes it possible to make a typo when adding a new car.
- It’s possible to add duplicate cars. 
- Cars can use different kinds of fuel. This is impossible to add in the current application


# Running & Deploying
## How to run the project:
- yarn install
- yarn dev

## Static HTML Export (Static hosting service or CDN)
- yarn  build
- yarn export
- serve 'out' directory to static hosting service or CDN
- for more info: https://nextjs.org/docs/advanced-features/static-html-export

## Deploy to Node.js server
- yarn build
- yarn start
- for more info: https://nextjs.org/docs/deployment