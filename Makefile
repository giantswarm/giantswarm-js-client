watch-tests:
	fswatch -o lib spec | xargs -n1 -I % sh -c "echo '===== Running Tests =====' && npm test && echo '===== Done =====' && echo ''"