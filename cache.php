<?php
header('Content-Type: text/cache-manifest');
$filesToCache = array(
	'./index.html',
	
	'./css/framework7.css',
	'./css/framework7.themes.css',
	'./css/my-app.css',
	'./css/framework7.min.css',
	'./css/framework7.rtl.css',
	'./css/framework7.rtl.min.css',
	'./css/framework7.themes.min.css',
	
	'./frames/bugs/bugs-archived.html',
	'./frames/bugs/bugs-closed.html',
	'./frames/bugs/bugs-open.html',
	'./frames/settings/index.html',
	'./frames/settings/about/index.html',
	'./frames/settings/about/license.html',
	'./frames/settings/design/theme.html',
	'./frames/settings/design/tint.html',
	'./frames/settings/design/timed-theme-schedule.html',
	'./frames/settings/update/index.html',
	'./frames/settings/update/update-detail.html',
	'./frames/getting-started.html',
	'./frames/getting-started~ipad.html',
	
	'./img/i-f7.png',
	'./img/i-form-calendar.png',
	'./img/i-form-comment.png',
	'./img/i-form-email.png',
	'./img/i-form-gender.png',
	'./img/i-form-name.png',
	'./img/i-form-password.png',
	'./img/i-form-settings.png',
	'./img/i-form-tel.png',
	'./img/i-form-toggle.png',
	'./img/i-form-url.png',
	
	'./iTunesArtwork.png',
	'./js/bugreporter7.js',
	'./js/cookies.js',
	'./js/framework7.min.js',
	'./js/jquery.js'
);
?>
CACHE MANIFEST

CACHE:
<?php
// Print files that we need to cache and store hash data
$hashes = '';
foreach($filesToCache as $file) {
	echo $file."\n";
	$hashes.=md5_file($file);
};
?>

NETWORK:
*
update.json

EXTERNAL:
update.json

# Hash Version: <?=md5($hashes)?>
# Update Hash: <?=md5_file("./update.json")?>
