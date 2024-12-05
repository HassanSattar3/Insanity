function onOpen() {
  DocumentApp.getUi()
    .createMenu('AI Content Detector')
    .addItem('Check with Sapling.ai', 'checkWithSapling')
    .addToUi();
}

function checkWithSapling() {
  const html = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('Sapling.ai Content Detector')
    .setWidth(400);
  DocumentApp.getUi().showSidebar(html);
}

function getDocumentText() {
  const doc = DocumentApp.getActiveDocument();
  return doc.getBody().getText();
} 