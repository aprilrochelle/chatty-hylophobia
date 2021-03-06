const loadMessages = require('./messages');
const data = require('./data');
const buildDomString = require('./dom');
const radioButton = require('./radioButtonEvent');
const modalEvents = require('./modalEvents');
const clearButton = require('./clearEvent');
const enterListener = require('./enterEventListener');
const messageEvents = require('./messageEvents');

const whenMessagesLoads = function () {
  const messagesData = JSON.parse(this.responseText).messages;
  data.setMessages(messagesData);
  buildDomString(messagesData);
  messageEvents();
};

const errorFunction = function () {
  console.error('no good señor');
};

const initializer = () => {
  loadMessages(whenMessagesLoads, errorFunction);
  enterListener();
  radioButton.radioButtonEvent();
  modalEvents.selectThemeEvents();
  modalEvents.removeAllThemes();
  clearButton.addClearEvent();
};

module.exports = {
  initializer,
};
