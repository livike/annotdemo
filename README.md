## Compare widget standalone demo

The demo mimics the iframe way Che opens the compare widget with our comment sidebar.
Open the index-demo_lightweight_iframe.html in the browser.

#### Catch the selection (first line, last line) and send to the comment sidebar
-Make a selection and press the "c" key.
The information about the first line and last line of the selection will be sent to the comment sidebar (parent iframe)
and rise an alert

#### Highlight the comment(s)
(demo comment values hardcoded at 108/110 lines in left editor)
-On startup/refresh highlights the gutter of the commented lines

#### Click on the comment on the comments sidebar
-scrolls to the comment lines (targets the left editor)
-demonstrates the communication via postMessage, with the widget editor

#### Double click any line number
-will send the information about the line number to the comment sidebar and from there rise an alert
