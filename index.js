const $ = id => document.getElementById(id);

$('logo').addEventListener('click', () => {
  $('pan').classList.remove('left');
  toggleVideo(false);
});

$('templates-link').addEventListener('click', () => {
  $('pan').classList.add('left');
  toggleVideo(false);
});

$('video-link').addEventListener('click', () => {
  toggleVideo(true);
});

function toggleVideo(bool) {
  $('content').classList.toggle('hidden', bool);
  $('video').classList.toggle('hidden', !bool);
}
