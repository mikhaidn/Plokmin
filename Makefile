STYLESHEET=resume-stylesheet.css

resume: DanMikhailResume.md
	pandoc $< -f markdown -t html --standalone --embed-resources --css=${STYLESHEET} -o DanMikhailResume.html