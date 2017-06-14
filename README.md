## HOW TO USE:

1. To run the demo, open the POC-demo-annotations.html file

2. The left and right content is loaded automatically.

3. The sample comments can be loaded and deleted with the "Show the comments" and "Hide the comments" buttons

4. On view switch (side bi side / inline) the comments must be loaded manually.


## DESCRIPTION OF THE PROBLEMS WITH DISPLAYING ANNOTATIONS IN DIFF-WIDGET:

1. When inserted annotations the line numbers are wrong. Only after changing the viewport(scroll down, scroll up) the line numbers create the gap for the inserted comments. However one number (the next line), that is not referencing to the comment is "sticking up".

2. When comment nodes is inserted for two consecutive lines, the gutter highlight is extended beside the first comment node object

3. when the line after the comment node have some diff annotation the highlight of the diff annotation is extended to the comment node above (is visible behind the comment)

4. By positioning the cursor on a line above the comment node object and walking down with the down key, the comment node object disappears when the cursor reached his line.

4a. When you click od the line right below the comment node object, the comment node object disappears. Seems to be the same bug as in 4.
