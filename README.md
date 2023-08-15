## Description
The Project offers a user-friendly interface for managing employee information. Users can access a list of employees and view detailed information about each employee. The application features several functionalities to enhance user experience, including pagination, employee search by office, employee search by name, and routing using `react-router-dom`. The project is built using React for the frontend, with a separate backend for handling API calls. The sensitive API key is securely stored on Heroku to ensure data security.

## Key Features

- **Separation of Concerns:** The project is divided into frontend and backend components, each in separate GitHub repositories. This separation enhances maintainability and scalability.

- **API Key Security:** Sensitive information, such as the API key, is stored securely on Heroku to prevent exposure in the codebase.

- **React Components:** Modular and reusable React components are utilized throughout the application, ensuring a clean and organized codebase.

- **Routing with `react-router-dom`:** The `react-router-dom` library is employed to enable seamless navigation between different pages of the application.

- **Pagination:** A pagination feature is implemented to display a limited number of employees per page, optimizing performance and user experience.

- **Search Functionality:** Users can search for employees by office or name, enhancing usability and helping users locate specific employees quickly.

- **Styling with SASS:** The application's styling is implemented using SASS, promoting maintainable and organized styling code.

- **Code Readability and Maintainability:** The codebase is structured with clear naming conventions and hooks like `useLocation`, making it easy for developers to understand and contribute.

- **Scalability and Future Enhancements:** The design accommodates future feature enhancements, thanks to its modular components and separation of concerns.

## Motivation and Reasoning Behind Installed Packages

1. **`react` and `react-dom`:** The core React packages are used for building the user interface, taking advantage of React's declarative and component-based approach.

2. **`react-icons`:** This package adds visually appealing icons to components, enhancing the overall design and user experience.

3. **`react-paginate`:** Pagination functionality is crucial for efficient data presentation, improving usability by dividing content into manageable segments.

4. **`react-router-dom`:** Enabling routing with this package enhances navigation, allowing users to access different sections of the application seamlessly.

5. **`sass`:** Utilizing SASS for styling ensures a structured and maintainable approach to CSS, promoting a clean and organized codebase.

## A list of the stories selected and the reason behind it

1. ** `Screen support for color blindness` :** I made sure the app works well for people who see colors differently. The app uses strong contrasts, like white background with blue-black text, to make things easy to read. When you're picking a page in the pagination, a bar appears under the page you're on. This way, even if you have trouble with colors, you'll know where you are. The goal is to make sure everyone can use the app comfortably, no matter how they see colors.

2. **`Responsive web design`:** The web app works smoothly on big computer screens, small mobile phones, and tablets, so anyone can use it easily. It's like making sure a shirt fits everyone, no matter their size. This way, people can enjoy the app no matter what device they have.

3. **`Use modern CSS throughout the application`:** I chose to use modern CSS techniques like flex and grid, along with a preprocessor called Sass, to make the app's layout and design super flexible,minimalist and organized. These tools help us create a neat and stylish app that's easy to change and looks good on any device.

4. **`Filter by name and office`

5. **`Sort by name either from A to Z or Z to A`

6. **`Enable switch between a grid and a different view`:** It's all about making sure you have the best experience, whether you prefer things neatly organized in a grid or displayed differently for a change.

7. **`Available on a free public url`:**Available on public url so that you can access backend and frontend parts. Heroku was used to handle Api key storage and security.






