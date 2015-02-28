<?php

$steamURL = "http://steamcommunity.com/groups/loaderror/memberslistxml/?xml=1";
$xml = new SimpleXMLElement(file_get_contents($steamURL));

$members = (int)$xml->groupDetails->memberCount;
$online = (int)$xml->groupDetails->membersOnline;
$playing = (int)$xml->groupDetails->membersInGame;

?><!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:title" content="loaderror">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://loaderror.de/">
	<meta property="og:image" content="https://loaderror.de/loaderror.png">
	<title>loaderror</title>
	<link rel="stylesheet" href="css/loaderror.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Geo:400italic|Inconsolata:400,700">
	<script src="js/loaderror.js"></script>
</head>
<body>
	<header>
		<h1>loaderror</h1>
		<canvas id="c"></canvas>
	</header>
	<section>
		<div>
			<p><?php echo $members ?> <span>members</span></p>
			<p><?php echo $online ?> <span>online</span></p>
			<?php if($playing > 0): ?><p><?php echo $playing ?> <span>playing</span></p><?php endif; ?>
		</div>
		<div>
			<p><a href="https://steamcommunity.com/groups/loaderror">Join us</a></p>
		</div>
	</section>
	<footer>
		<p>© 2015 loaderror - <a href="https://tbspace.de/impressum.html">Impressum</a></p>
	</footer>
</body>
</html>
