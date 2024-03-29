<!-- TITLE -->
<h1>GYM MANAGER</h1> <br>

Project developed at the <a href="https://www.rocketseat.com.br/">Rocketseat</a> - BOOTCAMP LAUNCHBASE.
</div><br>  

<!-- 
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] 
-->
[![MIT License][license-shield]](https://github.com/MarioDoncel/Academia-Launchbase/blob/main/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/marioadoncel/)


<br />


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#objective">Objective</a></li>
        <li><a href="#status">Status</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
It is a gym management application that organizes and correlates information about Instructors and Members.
<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

<!-- This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples. -->
* HTML
* CSS
* Javascript
* [Node.js](https://nodejs.org/)
* [Nunjucks (template engine)](https://mozilla.github.io/nunjucks/)
* [Express.js (server)](https://expressjs.com/)
* [PostgreSQL (database)](https://www.postgresql.org/)
<!-- 
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Svelte](https://svelte.dev/)
* [Laravel](https://laravel.com)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
 -->
<p align="right">(<a href="#top">back to top</a>)</p>

### Objective

Project developed for educacional purposes.
<p align="right">(<a href="#top">back to top</a>)</p>

### Status

Finished.
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

<!-- This is an example of how to list things you need to use the software and how to install them. -->
* npm
  ```sh
  npm install npm@latest -g
  ```
* PostgreSQL

### Installation

<!-- _Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._
 -->

1. Clone the repo
   ```sh
   git clone https://github.com/MarioDoncel/Academia-Launchbase
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run on PostgreSQL the queries that are in <a href="https://github.com/MarioDoncel/Academia-Launchbase/blob/main/database.sql">database.sql</a> to create a database "gymmanager" and the tables "instructors" and "members".

4. Configure your access to database on  `src/config/db.js`

   ```js
   module.exports = new Pool({
      user: "postgres",
      password: "xxxxxx",
      host:"localhost",
      port: "5432",
      database: "gymmanager"
    });
    ```
   
5. Run the application
    ```js
    npm start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

* **Instructors Page** - Here you can see all Intructors registered showing their avatars, names, modalities that they work and the number of athletes they have. 
Two are shown per page. You can filter the results by name or modality.
<img src="public/Assets/readmeImages/InstructorsPage.png" width="500px">


* **Instructors Details/Create/Edit Pages** - Here you have the pages to show, create, edit and delete Instructors.
<div style="display:flex;">
<img src="public/Assets/readmeImages/InstructorCreatePage.png" width="500px">
<img src="public/Assets/readmeImages/InstructorDetailsPage.png" width="500px">
<img src="public/Assets/readmeImages/InstructorEditPage.png" width="500px">
</div>
<br>

* **Members Page** - Here you can see all Members registered showing their avatars, names, emails, height and weight.
Two are shown per page. You can filter the results by name or email.
<img src="public/Assets/readmeImages/MembersPage.png" width="500px">


* **Members Details/Create/Edit Pages** - Here you have the pages to show, create, edit and delete Members.
<div style="display:flex;">
<img src="public/Assets/readmeImages/MemberCreatePage.png" width="500px">
<img src="public/Assets/readmeImages/MemberDetailsPage.png" width="500px">
<img src="public/Assets/readmeImages/MemberEditPage.png" width="500px">
</div>

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Mario Andres Doncel Neto  

Email - 88mario.doncel@gmail.com <br>
Whatsapp - +55 19 99612 9909

Project Link: [https://github.com/MarioDoncel/Academia-Launchbase](https://github.com/MarioDoncel/Academia-Launchbase)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Rocketseat](https://www.rocketseat.com.br/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
