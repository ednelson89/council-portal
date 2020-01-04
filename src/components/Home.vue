<template>
  <div>
    <b-row>
      <b-col cols="8">
        <br />
        <h1>Council Of Bros Portal</h1>
      </b-col>
    </b-row>
    <hr style="width:90%" />
    <b-row>
      <b-col cols="12">
        <p>Welcome to the Dev Build of the Council of Bros Web Portal.</p>
        <p>
          This application will be a single page app designed to provide a character sheet and game materials collection hub for
          commonly played Tabletop RPGs. The intent is to provide user accounts (using O-Auth) so that characters may be tied to users
          and certain information on a character sheet may remain privileged if the user wishes.
        </p>
        <p>
          The front end will be developed using the javascript framework VueJS, which will allow for rapid but modular development of
          a user interface. Using a mix of components from Vuetify and Bootstrap-Vue, all necessary front end components should be
          provided for. Custom character sheets will be made for each game the Council plays, though if the council wishes to add a game,
          they should give a heads up to allow time for the form to be built.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>
          * Simple Login has been implemented, though actual user accounts are not created yet. Content will be unavailable unless your
          logged in. Any changes you make to the current system will not be permanent.
        </p>
        <p style="font-weight: bold;">To Login, use the following credentials:</p>
        <p>Username: testUser1</p>
        <p>Password: testPass</p>
      </b-col>
    </b-row>
    <hr style="width:90%;" />
    <b-row>
      <b-col cols>
        <p>To Do:</p>
        <ul>
          <li>
            <p>Build a character list page</p>
          </li>
          <li>
            <p>Build a character creation component that can be used both at char summary and campaign page.</p>
          </li>
          <li>
            <p>Build a character summary page</p>
          </li>
          <li>
            <p>Implement basic users</p>
          </li>
          <li>
            <p>Apply character and game data to users</p>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
</style>