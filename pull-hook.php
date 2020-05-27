<?php
// Set up a webhook for your Bitbucket repo (or other service) that will visit this script (eg, http://example.org/git-pull.php).
// When you commit, Bitbucket will visit that URL.
// Now the script below runs, which will then pull from the bitbucket repo, grabbing the recently uploaded commit.
// All you have to do is push to Bitbucket!
// NOTE: This script relies on shell_exec and may not work on shared hosts.

$out = shell_exec("git pull origin devel");
echo $out;
