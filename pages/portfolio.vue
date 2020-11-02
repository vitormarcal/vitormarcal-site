<template>
  <div class="container">

    <ul>
      <li class="card">
        <a href="https://huddle-landing-page.vitormarcal.com.br/" rel="noopener noreferrer" target="_blank">
          <img src="@/assets/images/huddle-landig-page.png" alt="Desktop design screenshot for project">
        </a>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input type="button" value="Ver projeto">
      </li>

      <li class="card">
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src="~/assets/images/four-card-section.png" alt="Desktop design screenshot for project">
        </a>

        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input type="button" value="Ver projeto">
      </li>

      <li class="card">
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src="~/assets/images/fylo.png" alt="Desktop design screenshot for project">
        </a>

        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input type="button" value="Ver projeto">
      </li>

      <li class="card">
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src="~/assets/images/personal-site.png" alt="Desktop design screenshot for project">
        </a>

        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input type="button" value="Ver projeto">
      </li>

      <li class="card">
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src="~/assets/images/testimonials.png" alt="Desktop design screenshot for project">
        </a>

        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input type="button" value="Ver projeto">
      </li>
    </ul>

  </div>

</template>

<script>
import Index from "~/pages/blog/index";
export default {
  name: "portfolio",
  components: {Index}
}
</script>

<style scoped lang="scss">

  .container {
    margin:10rem;
    padding-top: 0;
    ul {
      width: auto;
      margin: 0 0 10rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      list-style: none;

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(219, 229, 230);
        overflow: hidden;
        padding-bottom: 1rem;
        box-shadow: 0 1rem 1.5rem -.3rem rgba(76,114,179,.2);

        img {
          cursor: pointer;
          display: block;
          object-fit: cover;
           width: 100%;
          height: 100%;
          transition: transform 0.3s ease 0s;
          border-bottom: 1px solid rgb(219, 229, 230);
          box-shadow: 0 1rem 1.5rem -.3rem rgba(76,114,179,.2);

          &:hover {

            transform: scale(1.05);
          }

        }

        p {
          margin-top: 2rem;
          padding: 1rem;
        }

        input {
          cursor: pointer;
          background-color: $blue-light;
          width: 240px;
          height: 40px;
          font-size: 16px;
          line-height: 16.34px;
          color: #ebfbff;
          text-align: center;
          font-weight: bold;
          border-radius: 30px;
          box-shadow: rgba(0, 0, 0, 0.1) 0 0.3rem 1rem;
          transition: all 0.3s ease 0s;
          text-transform: uppercase;

          &:hover {
            transform: scale(1.015);
          }
        }

      }

    }


  }

</style>
