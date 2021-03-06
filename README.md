## SWAS Semantic Web Annotation for Students

provides annotation experience for PDF documents on web
built on top of PDF.js. Text and rectangular highlights are supported. Highlight
data format is independent of the viewport, making it suitable for saving on the
server.

![thesisarchitecture 2](https://user-images.githubusercontent.com/17232450/42127343-eb036630-7c96-11e8-8660-f70893f5ae02.jpg)

`npm install`

for runnig on local host 

`npm start`

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

### Example

See
[`demo/src/App.js`](https://github.com/agentcooper/react-pdf-highlighter/blob/master/demo/src/App.js)
for React component API example.

While docs are in progress, feel free to check the source annotated with Flow
type signatures.

### Prior art

[`react-pdf`](https://github.com/wojtekmaj/react-pdf) and
[`react-pdfjs`](https://github.com/erikras/react-pdfjs) only provide React
wrappers for PDF.js and do not have built-in annotation functionality.

[`pdfjs-annotate`](https://github.com/instructure/pdf-annotate.js/) does not
provide text highlights out of the box.

See also:

* https://github.com/mozilla/pdf.js
* https://github.com/wojtekmaj/react-pdf
* https://github.com/erikras/react-pdfjs
* https://github.com/instructure/pdf-annotate.js/
* https://blogs.dropbox.com/tech/2016/11/annotations-on-document-previews/
* https://github.com/agentcooper/react-pdf-highlighter.git
### FAQ

##### Can I get a new PDF with the highlights embedded into the document?

No, but [pdf-annotation-service](https://github.com/agentcooper/pdf-annotation-service) might be helpful for you.

### Compatibility

Works in Google Chrome, Safari 10+, Firefox 52+. Not tested in Internet
Explorer.

### Refrence Initial projects from SmartQr and Recat Hilighter
https://github.com/agentcooper/react-pdf-highlighter.git

