<?php
$dir = "img/gallery/minified/";
$imgScan = scandir($dir);
$imgArray = array_diff($imgScan, array('.', '..'));
$count = 0;

foreach($imgArray as $imgSrc){
  echo '<div onclick="show(this)" class="gallery"><img id="image'.$count.'" src="'.$dir.$imgSrc.'" /></div>';
  $count += 1;
}
?>
