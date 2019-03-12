<template>
  <div id="app">
    <scrollactive id="navbar" class="navbar fixed-top navbar-expand-lg navbar-light"
        active-class="is-active"
        :duration="800"
        bezier-easing-value=".5,0,.35,1">
      <div class="w-15 d-lg-block d-none"></div>
      <a class="navbar-brand scrollactive-item" href="#Home">
        <h1 id="logo">
          <span class="darkgray">Score</span><span class="crimson">Cast</span>
        </h1>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#Why">Why?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#Video">Video</a>
          </li>
        </ul>
        <!--form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form-->
      </div>
      <div class="w-15 d-lg-block d-none"></div>
    </scrollactive>
    <router-view/>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'App',
  metaInfo: {
    link: [
      { rel: 'favicon', href: '/favicon.ico' },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    title: 'ScoreCast',
  },
  mounted() {
    // Initialize Navbar
    // Can't use SCSS here since we're injecting
    $('#navbar').css('background-color', 'rgba(245,245,245,0)');
    $('#logo').css('padding', '1rem 0 1rem 0');

    // Set up Scroll Handler
    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop();
      // Navbar
      if (scrollTop < 50) {
        // Initialize navbar
        $('#navbar').css('background-color', 'rgba(245,245,245,0)');
        $('#logo').css('padding', '1rem 0 1rem 0');
      } else if (scrollTop >= 250) {
        $('#navbar').css('background-color', '#f5f5f5');
        $('#logo').css('padding', '0');
      } else {
        const navScroll = ((scrollTop - 50) / 200);
        $('#navbar').css('background-color', `rgba(245,245,245,${navScroll})`);
        $('#logo').css('padding', `${1 - navScroll}rem 0`);
      }
    });
  },
};
</script>

<style lang="scss">
  @import 'assets/main';

  nav {
    //background-color: mix($lightergray, rgba(255,255,255,0.9));
  }

  #logo {
    font-weight: bold;
    font-family: 'Roboto', 'Open Sans', sans-serif;
    font-size: 2rem;
  }
  .crimson {
    color: $crimson;
  }
  .darkgray {
    color: $darkgray;
  }
</style>
