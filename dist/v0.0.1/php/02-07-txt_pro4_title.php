<?php
    ob_start(); // start trapping output
    $name = @$_POST['name'];
?>
<?php echo $name;?>

<?php
    $output = ob_get_contents(); // get contents of trapped output
    //write to file, e.g.
    $newfile="../htmltxt/02-07-txt_pro4_title.html"; 
    $file = fopen ($newfile, "w");
    fwrite($file, $output);
    fclose ($file);
    ob_end_clean(); // discard trapped output and stop trapping
?>

<script>
	window.location.href = '../admin.html';
</script>
