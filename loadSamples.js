
var sampleComments =
[
  {
    "startLine": 3,
    "endLine": 3,
    "author": {
      "name": "User 1"
    },
    "line": 3,
    "startCharacter": 20,
    "message": "Nice! Well done! --> startLine: 3, endLine: 3",
    "id": "daeb3561_81dd3a17",
    "endCharacter": 30,
    "updated": "08.07.2017",
    "replies": [],
    "inReplyTo": null
  },
  {
    "startLine": 17,
    "endLine": 18,
    "author": {
      "name": "User 2"
    },
    "line": 19,
    "startCharacter": 20,
    "message": "Test comment --> startLine: 17, endLine: 18",
    "id": "daeb3561_61e236d7",
    "endCharacter": 30,
    "updated": "08.07.2017",
    "replies": [
      {
        "startLine": 17,
        "endLine": 18,
        "author": {
          "name": "User 3"
        },
        "line": 19,
        "startCharacter": 20,
        "message": "Reply comment for the comment id daeb3561_61e236d7.",
        "id": "daeb3561_6117d6a4",
        "endCharacter": 30,
        "updated": "08.07.2017",
        "replies": [],
        "inReplyTo": "daeb3561_61e236d7"
      }
    ],
    "inReplyTo": null
  },
  {
    "startLine": 24,
    "endLine": 26,
    "author": {
      "name": "User 1"
    },
    "line": 26,
    "startCharacter": 20,
    "message": "--> startLine: 24, endLine: 26",
    "id": "daeb3561_41e732e5",
    "endCharacter": 30,
    "updated": "08.07.2017",
    "replies": [],
    "inReplyTo": null
  },
  {
    "startLine": 4,
    "endLine": 4,
    "author": {
      "name": "User 1"
    },
    "line": 4,
    "startCharacter": 20,
    "message": "Another comment from User 1 --> startLine: 4, endLine: 4",
    "id": "daeb3561_c148e2ce",
    "endCharacter": 30,
    "updated": "08.07.2017",
    "replies": [],
    "inReplyTo": null
  },
  {
    "startLine": 109,
    "endLine": 112,
    "author": {
      "name": "User 1"
    },
    "line": 112,
    "startCharacter": 20,
    "message": "Another comment from User 1 --> startLine: 109, endLine: 112",
    "id": "daeb3561_a145deb4",
    "endCharacter": 30,
    "updated": "07.07.2017",
    "replies": [
      {
        "startLine": 109,
        "endLine": 112,
        "author": {
          "name": "User 2"
        },
        "line": 112,
        "startCharacter": 20,
        "message": "A reply to User 1",
        "id": "daeb3561_a145deb7",
        "endCharacter": 30,
        "updated": "07.07.2017",
        "replies": [],
        "inReplyTo": "daeb3561_c148e2ce"
      },
    ],
    "inReplyTo": null
  },
  {
    "startLine": 22,
    "endLine": 22,
    "author": {
      "name": "User 1"
    },
    "line": 22,
    "startCharacter": 7,
    "message": "Comment from User 1 --> startLine: 22, endLine: 22",
    "id": "daeb3561_8112dab2",
    "endCharacter": 31,
    "updated": "08.07.2017",
    "replies": [],
    "inReplyTo": null
  },
  {
    "startLine": 66,
    "endLine": 72,
    "author": {
      "name": "User 1"
    },
    "line": 33,
    "startCharacter": 20,
    "message": "Comment from User1 --> startLine: 66, endLine: 72",
    "id": "daeb3561_e13be636",
    "endCharacter": 30,
    "updated": "08.07.2017",
    "replies": [],
    "inReplyTo": null
  }
]
;


var sampleLeft = "/*******************************************************************************\n" +
    " * @license\n" +
    " * Copyright (c) 2012, 2013 IBM Corporation and others.\n" +
    " * All rights reserved. This program and the accompanying materials are made \n" +
    " * available under the terms of the Eclipse Public License v3.0 \n" +
    " * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution \n" +
    " * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). \n" +
    " *\n" +
    " * Contributors:\n" +
    " *     IBM Corporation - initial API and implementation\n" +
    " *******************************************************************************/\n" +
    " \n" +
    "/*globals define XMLHttpRequest window */\n" +
    "\n" +
    "define(['orion/compare/builder/compare'],   \n" +
    " \n" +
    "function(Compare) {\n" +
    "	var document = window.document;\n" +
    "\n" +
    "	/** Buttons */	\n" +
    "	var bCompare = document.getElementById(\"doCompare\"); //$NON-NLS-0$\n" +
    "	var bLoadSampleNew = document.getElementById(\"loadSample\"); //$NON-NLS-0$\n" +
    "	var bCompareTypeNew = document.getElementById(\"compareTypeSelect\"); //$NON-NLS-0$\n" +
    "	var bContentTypeTD = document.getElementById(\"contentTypes\"); //$NON-NLS-0$\n" +
    "	var bContentType = document.getElementById(\"contentTypeSelect\"); //$NON-NLS-0$\n" +
    "	\n" +
    "	var compareType = \"byTwoContents\"; //$NON-NLS-0$\n" +
    "	var contentType = \"js\"; //$NON-NLS-0$\n" +
    "	\n" +
    "	\n" +
    "	var contentOnLeft = \"Sample Orion compare contents on left side\\n\\nYou can replace the contents here and and click on [Refresh Compare] to see the new result\\n\"; //$NON-NLS-0$\n" +
    "	var	contentOnRight = \"Sample Orion compare contents on right side\\n\\nYou can replace the contents here and and click on [Refresh Compare] to see the new result\\n\"; //$NON-NLS-0$\n" +
    "	\n" +
    "    var options = {\n" +
    "        parentDivId: \"compareParentDiv\", //$NON-NLS-0$\n" +
    "        commandSpanId: \"compareCmdDiv\", //$NON-NLS-0$\n" +
    "        newFile: {\n" +
    "            Name: \"left.\" + contentType, //$NON-NLS-0$\n" +
    "            readonly: false,\n" +
    "            Content: contentOnLeft\n" +
    "        },\n" +
    "        oldFile: {\n" +
    "            Name: \"right.\" + contentType, //$NON-NLS-0$\n" +
    "            readonly: false,\n" +
    "            Content: contentOnRight\n" +
    "        }\n" +
    "    };\n" +
    "	\n" +
    "	var compare = new Compare(options);\n" +
    "	\n" +
    "	function getFile(file) {\n" +
    "		try {\n" +
    "			var objXml = new XMLHttpRequest();\n" +
    "			objXml.open(\"GET\",file,false); //$NON-NLS-0$\n" +
    "			objXml.send(null);\n" +
    "			return objXml.responseText;\n" +
    "		} catch (e) {\n" +
    "			return null;\n" +
    "		}\n" +
    "	}\n" +
    "\n" +
    "	function onLoadSample() {\n" +
    "		var sampleLeft = getFile(\"./standalone/sampleLeft.js\");\n" +
    "		var sampleRight = getFile(\"./standalone/sampleRight.js\");\n" +
    "		if(sampleLeft && sampleRight) {\n" +
    "			bCompareType.selectedIndex = 0;\n" +
    "			compareType = bCompareType.options[bCompareType.selectedIndex].value;\n" +
    "			bContentType.selectedIndex = 0;\n" +
    "			contentType = bContentType.options[bContentType.selectedIndex].value;\n" +
    "			bContentTypeTD.style.display = \"block\"; //$NON-NLS-0$\n" +
    "			\n" +
    "			var widget = compare.getCompareView().getWidget();\n" +
    "			widget.options.oldFile.Content = sampleRight;\n" +
    "			widget.options.newFile.Content = sampleLeft;\n" +
    "			widget.options.oldFile.URL = null;\n" +
    "			widget.options.newFile.URL = null;\n" +
    "			widget.options.oldFile.Name = \"sampRight.js\";\n" +
    "			widget.options.newFile.Name = \"sampleLeft.js\";\n" +
    "			widget.options.mapper = null;\n" +
    "			compare.refresh();\n" +
    "		}\n" +
    "	}\n" +
    "	function doCompare() {\n" +
    "		var widget = compare.getCompareView().getWidget();\n" +
    "		if(widget.type === \"twoWay\"){ //$NON-NLS-0$\n" +
    "			var editors = widget._editors;\n" +
    "			var oldContents = editors[0].getTextView().getText();\n" +
    "			var newContents = editors[1].getTextView().getText();\n" +
    "			if(compareType === \"byTwoContents\"){ //$NON-NLS-0$\n" +
    "				widget.options.oldFile.Content = oldContents;\n" +
    "				widget.options.newFile.Content = newContents;\n" +
    "				widget.options.oldFile.URL = null;\n" +
    "				widget.options.newFile.URL = null;\n" +
    "			} else {\n" +
    "				widget.options.oldFile.URL = oldContents;\n" +
    "				widget.options.newFile.URL = newContents;\n" +
    "				bCompareType.selectedIndex = 0;\n" +
    "				compareType = bCompareType.options[bCompareType.selectedIndex].value;\n" +
    "				bContentTypeTD.style.display = \"block\"; //$NON-NLS-0$\n" +
    "			}\n" +
    "			widget.options.mapper = null;\n" +
    "			compare.refresh();\n" +
    "			//widget.refresh();\n" +
    "		}\n" +
    "	}\n" +
    "	function onCompareType(evt) {\n" +
    "		compareType = bCompareType.options[bCompareType.selectedIndex].value;\n" +
    "		var widget = compare.getCompareView().getWidget();\n" +
    "		if(compareType === \"byTwoContents\"){ //$NON-NLS-0$\n" +
    "			widget.options.oldFile.Content = contentOnRight;\n" +
    "			widget.options123.newFile.Content = contentOnLeft123;\n" +
    "			widget.opzzzns.oldFile.URL = null;\n" +
    "			widget.options.newFile.URL = null;\n" +
    "			bContentTypeTD.style.display = \"block\"; //$NON-NLS-0$\n" +
    "		} else {\n" +
    "			widget.options.oldFile.Content = contentOnRightURL;\n" +
    "			widget.options.newFile.Content = contentOnLeftURL;\n" +
    "			widget.options.oldFile.URL = null;\n" +
    "			widget.options.newFile.URL = null;\n" +
    "			bContentTypeTD.style.display = \"none\"; //$NON-NLS-0$\n" +
    "		}\n" +
    "		widget.options.mapper = null;\n" +
    "		widget.refresh();\n" +
    "	}\n" +
    "	\n" +
    "	function onContentType(evt) {\n" +
    "		contentTypeNew = bContentType.options[bContentType.selectedIndex].valueNew;\n" +
    "		var widget = compare.getCompareView().getWidget();\n" +
    "		widget.options.oldFile.Name = \"right.\" + contentType;\n" +
    "		widget.options.newFile.Name = \"left.\" + contentType;\n" +
    "		\n" +
    "		//Added some new stuff here\n" +
    "	}\n" +
    "	\n" +
    "	/* Adding events */\n" +
    "	bCompare.onclick = doCompare;\n" +
    "	bLoadSample.onclick = onLoadSample;\n" +
    "	bCompareType.onchange = onCompareType //something new;\n" +
    "	bContentType.onchange = onContentType;\n" +
    " });\n" +
    "";

var sampleRight = "/*******************************************************************************\n" +
  " * @license\n" +
  " * Copyright (c) 2011, 2012 IBM Corporation and others.\n" +
  " * All rights reserved. This program and the accompanying materials are made \n" +
  " * available under the terms of the Eclipse Public License v1.0 \n" +
  " * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution \n" +
  " * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). \n" +
  " *\n" +
  " * Contributors:\n" +
  " *     IBM Corporation - initial API and implementation\n" +
  " *******************************************************************************/\n" +
  " \n" +
  "/*globals define XMLHttpRequest window */\n" +
  "\n" +
  "define(['orion/compare/builder/compare'],   \n" +
  " \n" +
  "function(Compare) {\n" +
  "	var document = window.document;\n" +
  "\n" +
  "	/** Buttons */	\n" +
  "	var bCompare = document.getElementById(\"doCompare\"); //$NON-NLS-0$\n" +
  "	var bLoadSample = document.getElementById(\"loadSample\"); //$NON-NLS-0$\n" +
  "	var bCompareType = document.getElementById(\"compareTypeSelect\"); //$NON-NLS-0$\n" +
  "	var bContentTypeTD = document.getElementById(\"contentTypes\"); //$NON-NLS-0$\n" +
  "	var bContentType = document.getElementById(\"contentTypeSelect\"); //$NON-NLS-0$\n" +
  "	\n" +
  "	var compareType = \"byTwoContents\"; //$NON-NLS-0$\n" +
  "	var contentType = \"js\"; //$NON-NLS-0$\n" +
  "	\n" +
  "	\n" +
  "	var contentOnLeft = \"Sample Orion compare contents on left side\\n\\nYou can replace the contents here and and click on [Refresh Compare] to see the new result\\n\"; //$NON-NLS-0$\n" +
  "	var	contentOnRight = \"Sample Orion compare contents on right side\\n\\nYou can replace the contents here and and click on [Refresh Compare] to see the new result\\n\"; //$NON-NLS-0$\n" +
  "	var contentOnLeftURL = \"Put file URL here\\n\"; //$NON-NLS-0$\n" +
  "	var	contentOnRightURL = \"Put file URL here\\n\"; //$NON-NLS-0$\n" +
  "	\n" +
  "    var options = {\n" +
  "        parentDivId: \"compareParentDiv\", //$NON-NLS-0$\n" +
  "        commandSpanId: \"compareCmdDiv\", //$NON-NLS-0$\n" +
  "        newFile: {\n" +
  "            Name: \"left.\" + contentType, //$NON-NLS-0$\n" +
  "            readonly: false,\n" +
  "            Content: contentOnLeft\n" +
  "        },\n" +
  "        oldFile: {\n" +
  "            Name: \"right.\" + contentType, //$NON-NLS-0$\n" +
  "            readonly: false,\n" +
  "            Content: contentOnRight\n" +
  "        }\n" +
  "    };\n" +
  "	\n" +
  "	var compare = new Compare(options);\n" +
  "	\n" +
  "	function getFile(file) {\n" +
  "		try {\n" +
  "			var objXml = new XMLHttpRequest();\n" +
  "			objXml.open(\"GET\",file,false); //$NON-NLS-0$\n" +
  "			objXml.send(null);\n" +
  "			return objXml.responseText;\n" +
  "		} catch (e) {\n" +
  "			return null;\n" +
  "		}\n" +
  "	}\n" +
  "\n" +
  "	function onLoadSample() {\n" +
  "		var sampleLeft = getFile(\"./standalone/sampleLeft.js\");\n" +
  "		var sampleRight = getFile(\"./standalone/sampleRight.js\");\n" +
  "		if(sampleLeft && sampleRight) {\n" +
  "			bCompareType.selectedIndex = 0;\n" +
  "			compareType = bCompareType.options[bCompareType.selectedIndex].value;\n" +
  "			bContentType.selectedIndex = 0;\n" +
  "			contentType = bContentType.options[bContentType.selectedIndex].value;\n" +
  "			bContentTypeTD.style.display = \"block\"; //$NON-NLS-0$\n" +
  "			\n" +
  "			var widget = compare.getCompareView().getWidget();\n" +
  "			widget.options.oldFile.Content = sampleRight;\n" +
  "			widget.options.newFile.Content = sampleLeft;\n" +
  "			widget.options.oldFile.URL = null;\n" +
  "			widget.options.newFile.URL = null;\n" +
  "			widget.options.oldFile.Name = \"sampRight.js\";\n" +
  "			widget.options.newFile.Name = \"sampleLeft.js\";\n" +
  "			widget.options.mapper = null;\n" +
  "			compare.refresh();\n" +
  "		}\n" +
  "	}\n" +
  "	function doCompare() {\n" +
  "		var widget = compare.getCompareView().getWidget();\n" +
  "		if(widget.type === \"twoWay\"){ //$NON-NLS-0$\n" +
  "			var editors = widget._editors;\n" +
  "			var oldContents = editors[0].getTextView().getText();\n" +
  "			var newContents = editors[1].getTextView().getText();\n" +
  "			if(compareType === \"byTwoContents\"){ //$NON-NLS-0$\n" +
  "				widget.options.oldFile.Content = oldContents;\n" +
  "				widget.options.newFile.Content = newContents;\n" +
  "				widget.options.oldFile.URL = null;\n" +
  "				widget.options.newFile.URL = null;\n" +
  "			} else {\n" +
  "				widget.options.oldFile.URL = oldContents;\n" +
  "				widget.options.newFile.URL = newContents;\n" +
  "				bCompareType.selectedIndex = 0;\n" +
  "				compareType = bCompareType.options[bCompareType.selectedIndex].value;\n" +
  "				bContentTypeTD.style.display = \"block\"; //$NON-NLS-0$\n" +
  "			}\n" +
  "			widget.options.mapper = null;\n" +
  "			compare.refresh();\n" +
  "			//widget.refresh();\n" +
  "		}\n" +
  "	}\n" +
  "	function onCompareType(evt) {\n" +
  "		compareType = bCompareType.options[bCompareType.selectedIndex].value;\n" +
  "		var widget = compare.getCompareView().getWidget();\n" +
  "		if(compareType === \"byTwoContents\"){ //$NON-NLS-0$\n" +
  "			widget.options.oldFile.Content = contentOnRight;\n" +
  "			widget.options.newFile.Content = contentOnLeft;\n" +
  "			widget.options.oldFile.URL = null;\n" +
  "			widget.options.newFile.URL = null;\n" +
  "			bContentTypeTD.style.display = \"block\"; //$NON-NLS-0$\n" +
  "		} else {\n" +
  "			widget.options.oldFile.Content = contentOnRightURL;\n" +
  "			widget.options.newFile.Content = contentOnLeftURL;\n" +
  "			widget.options.oldFile.URL = null;\n" +
  "			widget.options.newFile.URL = null;\n" +
  "			bContentTypeTD.style.display = \"none\"; //$NON-NLS-0$\n" +
  "		}\n" +
  "		widget.options.mapper = null;\n" +
  "		widget.refresh();\n" +
  "	}\n" +
  "	\n" +
  "	function onContentType(evt) {\n" +
  "		contentType = bContentType.options[bContentType.selectedIndex].value;\n" +
  "		var widget = compare.getCompareView().getWidget();\n" +
  "		widget.options.oldFile.Name = \"right.\" + contentType;\n" +
  "		widget.options.newFile.Name = \"left.\" + contentType;\n" +
  "	}\n" +
  "	\n" +
  "	/* Adding events */\n" +
  "	bCompare.onclick = doCompare;\n" +
  "	bLoadSample.onclick = onLoadSample;\n" +
  "	bCompareType.onchange = onCompareType;\n" +
  "	bContentType.onchange = onContentType;\n" +
  " });\n" +
  "";
